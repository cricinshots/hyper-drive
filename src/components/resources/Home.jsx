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
              position:"relative",
              top:"20px"
            }}
          >
            <div
              className="resourceButton" style={{marginBottom:"15px"}}
              onClick={()=>navigate('transfer/export')}
              >
            </div>
            <div className="resourceButton2"
            
            onClick={()=>navigate('transfer/import')}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
