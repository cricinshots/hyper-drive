import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WalletResource() {
  const [Gems, changeGems] = useState(0);

  useEffect(() => {
    console.log(Gems);
  }, [Gems]);
  function getGems() {
    const url = "https://dev2.wegalabs.xyz:444/solana/balance";
    axios
      .post(url, {
        walletAddress: "6bCQMc3eeGiqSktmHoVFU3vnWdN55JQubMmYjX7PC8pS",
      })
      .then((r) => {
        changeGems(r.data['uiAmount']);
        console.log(r.data);
      });
  }
  return (
    <>
      <div style={{ width: "100%", margin: "1vw" }}>
        <div
          style={{
            position: "relative",
            top: "18px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{ margin: "5px" }} src={process.env.PUBLIC_URL +"/wallet.png"} />
          <div className="HomeCardheading">Wallet Resources</div>
        </div>
        <div id="gameResourceComponent">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "rgba()",
            }}
          >
            <div id="gameResourceWidget">
              <div id="gameResourceImage"></div>
              <div className="numberHeadings">{Gems}</div>
            </div>
          </div>
          <div>
            <div id="buttonReload" onClick={() => getGems()}></div>
          </div>
        </div>
      </div>
    </>
  );
}
