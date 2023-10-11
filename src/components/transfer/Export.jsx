import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tmain.css";
import { Grid } from "react-loader-spinner";

export default function MainT() {
  const [amount, changeAmount] = useState(0);
  const [Gems, changeGems] = useState(0);
  const [loader, setLoader] = useState(false);
  useEffect(() => {}, [amount, loader]);
  useEffect(() => {
    const url =
      "https://cricinshots.in/apis/apidev2/api20/testGetUserStats.php";
    axios
      .post(url, {
        token:
            localStorage.getItem("colyseusToken"),
      })
      .then((r) => {
        changeGems(r.data["A4"]);
        console.log(r.data["A4"]);
      });
  });

  function sendFunds() {
    setLoader(true);
    axios
      .post("https://cricinshots.in/apis/apidev2/wallet/exportWallet.php", {
        A4: amount,
        token:localStorage.getItem("colyseusToken"),
      })
      .then((r) => {
        setLoader(false);
        changeGems(r.data["A4"]);
        alert("Successfully transferred gems from game to wallet!");
      })
      .catch((e) => {
        setLoader(false);
        console.log(e)});
  }

  return (
    <>
      {loader ? (
        <div id="rootElementTransfer" style={{justifyContent:"center"}}>
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
        <div
          id="rootElementTransfer"
          style={{ justifyContent: "center" }}
          className="tElement"
        >
          <div>
            <div className="Heading">
              You are transferring resources from your game to your wallet
            </div>
            <div className="Heading">Gems in account -  {Gems}</div>

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
              You are transferring {amount} gems to your wallet. Are you sure?
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <div className="transferButton" onClick={() => sendFunds()}>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
