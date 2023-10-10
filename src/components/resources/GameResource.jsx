import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GameResource() {
  const [Gems, changeGems] = useState(0);

  useEffect(() => {console.log(Gems)}, [Gems]);
  function getGems() {
    const url = "https://cricinshots.in/apis/apidev2/api20/userStats.php";
    axios
      .post(url, {
        api_key: "e5KHqSJVtWoWnhSYRZhi2d",
        assume: 4905,
      })
      .then((r) => {
        // changeGems(r.data.assumed_user);
        console.log(r.data);
      });
  }
  return (
    <>
      <div style={{ width: "100%" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 320 145"
          fill="none"
          style={{ position: "absolute" }}
        >
          <path
            d="M9.9148 145H310.085C315.561 145 320 140.561 320 135.085V9.9148C320 4.43901 315.561 0 310.085 0H9.9148C4.43901 0 0 4.43901 0 9.9148V135.085C0 140.561 4.43901 145 9.9148 145Z"
            fill="#071321"
            fill-opacity="0.32"
          />
        </svg>
        <div className="HomeCardheading" style={{ position: "relative" }}>
          Game Resources
        </div>
        <div id="gameResourceComponent">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80%"
              height="40%"
              viewBox="0 0 125 37"
              fill="none"
              style={{ zIndex: 0 }}
            >
              <path
                d="M10.4846 36.7623H115.041C120.516 36.7623 124.955 32.3233 124.955 26.8475V10.6233C124.955 5.1475 120.516 0.708496 115.041 0.708496H10.4846C5.00883 0.708496 0.569824 5.1475 0.569824 10.6233V26.8475C0.569824 32.3233 5.00883 36.7623 10.4846 36.7623Z"
                fill="#071321"
                fill-opacity="0.32"
              />
            </svg>
            <div id="gameResourceWidget">
              <div id="gameResourceImage"></div>
              <div className="numberHeadings">{Gems}</div>
              <div>
                <div id="buttonReload" onClick={() => getGems()}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
