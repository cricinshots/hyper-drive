import React from "react";
import GameResource from "./GameResource";
import WalletResource from "./WalletResource";
import "./home.css";

export default function Home() {
  return (
    <>
      <div id="rootElementHome">
        <div className="HomeCardheading">Connect To wallet</div>
        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
          <div className="cardElementHome">
            <GameResource />
          </div>
          <div className="cardElementHome">
            <GameResource />
          </div>
        </div>
      </div>
    </>
  );
}
