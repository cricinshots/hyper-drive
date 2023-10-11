import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GameResource() {
  const [Gems, changeGems] = useState(0);

  useEffect(() => {
    console.log(Gems);
  }, [Gems]);
  function getGems() {
    const url = "https://cricinshots.in/apis/apidev2/api20/testGetUserStats.php";
    axios
      .post(url, {
        token: "1d6628797cbcfecc68255a456bce020e3c02c5b616b55dO3ee02f706a9ed4905f63b0800761548a",
      })
      .then((r) => {
        changeGems(r.data["A4"]);
        console.log(r.data["A4"]);
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
          <img style={{margin:"5px"}} src={process.env.PUBLIC_URL +"/playerImage.png"} />
          <div className="HomeCardheading">Game Resources</div>
        </div>
        <div id="gameResourceComponent">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
