import * as buffer from "buffer";
import axios from "axios";
window.Buffer = buffer.Buffer;
const { getOrCreateAssociatedTokenAccount, createTransferInstruction }  = require("@solana/spl-token");
const {Connection, PublicKey, Transaction,} = require("@solana/web3.js");
const {connect,getProvider} = require("./solana");
export const doTransact = async (amt,colyToken)=> {
    let amount = 1;
    if(amt) amount=amt;

    const provider = getProvider(); // see "Detecting the Provider"
    const info = await connect();
    const network = "https://api.testnet.solana.com";
    const connection = new Connection(network);

    const destination = "9E8F8829ZKeiraCCxinJF5DNngbkpWQ993e2BNNB8L7g";
    const mint_address = "AUNnuUwLwgYZ3JPUYc23awDqcuHhDootHVkY1T3UoKQy"
    let sourceAcc = await getOrCreateAssociatedTokenAccount(connection,new PublicKey(info.publicKey.toString()),new PublicKey(mint_address),new PublicKey(info.publicKey.toString()))
    let destAcc = await getOrCreateAssociatedTokenAccount(connection,new PublicKey(info.publicKey.toString()),new PublicKey(mint_address),new PublicKey(destination))
    let transaction = new Transaction();
    transaction.add(createTransferInstruction(
        sourceAcc.address,destAcc.address,new PublicKey(info.publicKey.toString()),amount
    ));
    const latestBlockHash = await connection.getLatestBlockhash('confirmed');
    transaction.recentBlockhash = await latestBlockHash.blockhash;
    console.info(transaction.recentBlockhash)
    // transaction.feePayer = new PublicKey(info.publicKey.toString())
    transaction.feePayer = new PublicKey(destination)
    console.log(`Sending ${amount} ${(mint_address)} from ${(info.publicKey.toString())} to ${(destination)}.`)
    try {
        const signedTransac = await provider.signAndSendTransaction(transaction);
        await axios.post("https://cricinshots.in/apis/apidev2/wallet/importWallet.php",{
            A4:amount,
            token:colyToken
        })
        return true;
    }
    catch (err){
        console.error(err.message)
    }
}
