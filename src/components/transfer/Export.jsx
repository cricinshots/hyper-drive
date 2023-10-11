import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tmain.css";
import { Grid } from "react-loader-spinner";

export default function MainT() {
  const [amount, changeAmount] = useState(0);
  const [Gems, changeGems] = useState(0);
  useEffect(() => {}, [amount]);
  useEffect(() => {
    const url =
      "https://cricinshots.in/apis/apidev2/api20/testGetUserStats.php";
    axios
      .post(url, {
        token:
          "bf235e1e38ece59eccc2b71e9832358ce95fa722c2d35cO573e77d3457d5a2e827a179fd18206a6",
      })
      .then((r) => {
        changeGems(r.data["A4"]);
        console.log(r.data["A4"]);
      });
  });

  function sendFunds() {
    const loader=document.getElementById("containerGrid");
    loader.style.display="block"
    axios
      .post("https://cricinshots.in/apis/apidev2/wallet/exportWallet.php", {
        A4: amount,
        token: window.colyseusToken,
      })
      .then((r) => {
        loader.style.display="none";
        changeGems(r.data["A4"]);
        alert("Success transfered gems from game to wallet!");
      })
      .catch((e) => console.log(e));
  }

  return (
    <div id="rootElementTransfer" style={{height:"91%",justifyContent:"center"}} className="tElement">
      <div id="containerGrid">
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
      <div>
        <div className="Heading">
          You are transferring resources from your game to your wallet
        </div>
        <div className="Heading">Gems in account -{Gems}</div>

        <div className="con1">
          <div id="gems">Gems</div>
          <div className="container">
            <div className="gems">
              <img src={process.env.PUBLIC_URL +"/tgems.png"} alt="Gem Image" className="gem-image" />
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
          }}
        >
          <div className="resourceButton1" onClick={() => sendFunds()}>
            TRANSFER
          </div>
        </div>
      </div>
    </div>
  );
}
