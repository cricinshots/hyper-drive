 import React from 'react'
 import "./tmain.css";
 
 export default function MainT() {
   return (

    <div className="tElement">
    <div className="Heading">You are transferring resources
                            from your game to your wallet</div>
    
        <div className="container">
        <div className="gems">
          <img src="tgems.png" alt="Gem Image" className="gem-image" />
        </div>
        
        <input className="other-container" type='text'>
          
        </input>
      </div>
    </div>
   )
 }
 