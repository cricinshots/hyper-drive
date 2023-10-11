import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import "./home.css";
import {connect, getProvider} from "../Solana/solana";
let setAddress = async (setNavigate)=>{
    try {
        let res = await connect();
        await axios.post("https://cricinshots.in/apis/apidev2/wallet/linkWallet.php", {
            "address": res.publicKey.toString(),
            "token": window.colyseusToken
        })
        setNavigate((nav)=>nav+1);

    }
    catch (err){
        console.error(err)
        alert("An error occured while connecting wallet, please try again")
    }
}
export default function Home(props) {
    let [navigate,setNav] = useState(0);
    let navigation = useNavigate();

  useEffect(() => {
      let main=async()=>{
          let res = await connect(true);
          if(res) navigation("/resource")
      }
      main();
    // axios
    //   .post("https://cricinshots.in/apis/apidev2/wallet/checkAddress.php", {
    //     token:
    //       "be8bbd9a10739c0053ce125f54564f4c7755df308bec18O5e24cd1a20b3ff6cc2b2dc86d4f82ecb",
    //   })
    //   .then((r) => console.log(r));
  }, [navigate]);
  return (
    <div id="rootHome" className="tElement">
      <div className="con1">
        <div className="homeContainer">
          
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              zIndex: 1,
              alignItems: "center",
              paddingBottom: "26px",
            }}
          >
            <div onClick={async ()=>{
                try{
                   await setAddress(setNav);
                }
                catch (err) {
                    console.error(err)
                }
            }} className="connectButton">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
