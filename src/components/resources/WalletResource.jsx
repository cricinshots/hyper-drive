import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WalletResource() {
  const [Gems, changeGems] = useState(0);
  const [disab,setDisab]=useState(1);


  useEffect(() => {
    console.log(Gems);
  }, [Gems,disab]);
  function getGems() {
    if(disab!=1){
      console.log('working');
      return;
    };
    setDisab(0.2);
    const url = "https://cricinshots.in/apis/apidev2/wallet/checkBalance.php";
    axios
      .post(url, {
        token: "bf235e1e38ece59eccc2b71e9832358ce95fa722c2d35cO573e77d3457d5a2e827a179fd18206a6",
      })
      .then((r) => {
        changeGems(r.data['uiAmount']);
        console.log(r.data);
        setDisab(1);
      }).catch(e=>{
          console.log(e);
          setDisab(1);
      })
  }
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
          <img style={{ margin: "5px",height:"fit-content",marginTop:"20px" }} src={window.location.origin+"/hyperdrive/wallet.png"} />
          <div className="HomeCardheading">Wallet Resources</div>
        </div>
        <div id="gameResourceComponent">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
