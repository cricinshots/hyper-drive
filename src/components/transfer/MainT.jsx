 import React from 'react'
 import "./tmain.css";
 
 export default function MainT() {
   return (

    <div id = "rootElementTransfer" className="tElement">
    
      <div className="Heading">You are transferring resources
                              from your game to your wallet
      </div>

      <div className='con1'>
            <div id = "gems">
              Gems
            </div>
          <div className="container">
            <div className="gems">
              <img src="tgems.png" alt="Gem Image" className="gem-image" />
            </div>
          
            <input className="other-container" type='text'>
              
            </input>
          </div>
      </div>
      <div className="Heading1">You are transferring 100 gems to your wallet. Are you sure?
      </div>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <div className="resourceButton1">
              TRANSFER
            </div>
          </div>
  </div>
   )
 }
 