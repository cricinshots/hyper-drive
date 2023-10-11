import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./home.css";

export default function Home(props) {
  // const location = useLocation();

  return (
    <div id="rootHome" className="tElement">
      <div className="Heading">Connect Your wallet</div>
      <div className="con1">
        <div className="container">

          <input
            className="other-container"
            type="text"
          ></input>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="resourceButton1">Connect Wallet</div>
      </div>
    </div>
  );
}
