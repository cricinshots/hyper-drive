import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./tmain.css";

export default function MainT(props) {
  const [amount, changeAmount] = useState(0);
  const [Gems, changeGems] = useState(0);
  const location = useLocation();
  useEffect(() => {}, [amount]);
  useEffect(() => {
    const url =
      "https://cricinshots.in/apis/apidev2/api20/testGetUserStats.php";
    axios
      .post(url, {
        token:
          "1d6628797cbcfecc68255a456bce020e3c02c5b616b55dO3ee02f706a9ed4905f63b0800761548a",
      })
      .then((r) => {
        changeGems(r.data["A4"]);
        console.log(r.data["A4"]);
      });
  });


  function sendFunds() {
    axios
      .post("https://cricinshots.in/apis/apidev2/wallet/exportWallet.php", {
        A4: amount,
        token:
          "be8bbd9a10739c0053ce125f54564f4c7755df308bec18O5e24cd1a20b3ff6cc2b2dc86d4f82ecb",
      })
      .then((r) => alert(r.data["A4"]))
      .catch((e) => console.log(e));
  }

  return (
    <div id="rootElementTransfer" className="tElement">
      <div className="Heading">
        You are transferring resources from your game to your wallet
      </div>
      <div className="Heading">
        Gems in account -{Gems}
      </div>

      <div className="con1">
        <div id="gems">Gems</div>
        <div className="container">
          <div className="gems">
            <img src="tgems.png" alt="Gem Image" className="gem-image" />
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
  );
}
