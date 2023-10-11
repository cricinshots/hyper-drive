import React, { useState, useEffect } from "react";
import "./tmain.css";
import { doTransact } from "../Solana/signAndSend";
import { Grid } from "react-loader-spinner";
import axios from "axios";



export default function MainT() {
  const [amount, changeAmount] = useState(0);
  const [loader, setLoader] = useState(false);

  const [Gems, changeGems] = useState(0);

  useEffect(() => {}, [amount,loader]);

  useEffect(()=>{
    const url = "https://cricinshots.in/apis/apidev2/wallet/checkBalance.php";

    axios
      .post(url, {
        token: localStorage.getItem("colyseusToken"),
      })
      .then((r) => {
        changeGems(r.data['uiAmount']);
        console.log(r.data);
      }).catch(e=>{
          console.log(e);
      })
  },[])

  return (
    <>
      {loader ? (
        <div id="rootElementTransfer" style={{ justifyContent: "center" }}>
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div id="rootElementTransfer" className="tElement" style={{justifyContent:"center"}}>
            <div className="Heading">
              You are transferring resources from your Wallet to your Game
            </div>
            <div className="Heading">Gems in Wallet -  {Gems}</div>

            <div className="con1">
              <div className="container">
                <div className="gems">
                  <img
                    src={process.env.PUBLIC_URL + "/tgems.png"}
                    alt="Gem Image"
                    className="gem-image"
                  />
                </div>

                <input
                  className="other-container"
                  type="text"
                  onChange={(event) => changeAmount(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="Heading1">
              You are transferring {amount} gems to your Game. Are you sure?
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="transferButton"
                onClick={async () => {
                  setLoader(true);
                  await doTransact(
                    amount,
                      localStorage.getItem("colyseusToken")
                  );
                  setLoader(false);
                  alert("Successfully transferred gems to your account, please wait for balance to refresh")
                  changeGems((gems)=>gems-amount)
                }}
              ></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
