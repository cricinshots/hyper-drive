import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./home.css";

export default function Home(props) {
  // const location = useLocation();
  useEffect(() => {
    axios
      .post("https://cricinshots.in/apis/apidev2/wallet/checkAddress.php", {
        token:
          "be8bbd9a10739c0053ce125f54564f4c7755df308bec18O5e24cd1a20b3ff6cc2b2dc86d4f82ecb",
      })
      .then((r) => console.log(r));
  }, []);
  return (
    <div id="rootHome" className="tElement">
      <div className="Heading">Connect Your wallet</div>
      <div className="con1">
        <div className="homeContainer">
          <img
            src="../../groupHome.png"
            alt=""
            style={{ position: "relative", zIndex: 1 }}
          />
          <div className="shadedHomeContainer" type="text"></div>
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
            <div className="resourceButton1" style={{ width: "60%" }}>
              Connect Wallet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
