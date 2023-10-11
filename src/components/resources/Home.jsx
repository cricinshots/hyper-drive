import React from "react";
import GameResource from "./GameResource";
import WalletResource from "./WalletResource";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div id="rootElementHome">
        <div className="HomeCardheading">Connect To wallet</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="cardElementHome">
            <GameResource />
          </div>
          <div className="cardElementHome">
            <WalletResource />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="resourceButton"
              onClick={()=>navigate('transfer/export')}
            >
              TRANSFER TO WALLET
            </div>
            <div className="resourceButton">TRANSFER TO GAME</div>
          </div>
        </div>
      </div>
    </>
  );
}
