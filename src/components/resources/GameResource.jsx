import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GameResource() {
  const [Gems, changeGems] = useState(0);
  const [disab,setDisab]=useState(1);

  useEffect(() => {
    console.log(Gems,disab);
  }, [Gems]);
  function getGems() {
    if(disab!=1)return;
    setDisab(0.2);
    const url = "https://cricinshots.in/apis/apidev2/api20/testGetUserStats.php";
    axios
      .post(url, {
        token: localStorage.getItem("colyseusToken"),
      })
      .then((r) => {
        changeGems(r.data["A4"]);
        setDisab(1);
        console.log(r.data["A4"]);
      }).catch((e)=>{
        setDisab(1);
        console.log(e)})
  }

    useEffect(() => {
        getGems();
    }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          style={{
            position: "relative",
            top: "18px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{margin:"5px",height:"fit-content",marginTop:"20px"}} src={window.location.origin+"/hyperdrive/playerImage.png"} />
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
            <div id="buttonReload" onClick={() => getGems()} style={{opacity:disab}}></div>
          </div>
        </div>
      </div>
    </>
  );
}
