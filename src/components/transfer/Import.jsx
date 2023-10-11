import React,{useState,useEffect} from 'react'
import "./tmain.css";

export default function MainT() {
 const [amount,changeAmount]=useState(0);
 useEffect(() => {
   
 }, [amount])
 
  return (

   <div id = "rootElementTransfer" className="tElement">
   
     <div className="Heading">You are transferring resources
                             from your Wallet to your Game
     </div>

     <div className='con1'>
           <div id = "gems">
             Gems
           </div>
         <div className="container">
           <div className="gems">
             <img src="tgems.png" alt="Gem Image" className="gem-image" />
           </div>
         
           <input className="other-container" type='text' onChange={(event)=>changeAmount(event.target.value)}>
             
           </input>
         </div>
     </div>
     <div className="Heading1">You are transferring {amount} gems to your wallet. Are you sure?
     </div>
     <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
           <div className="resourceButton1">
             TRANSFER
           </div>
         </div>
 </div>
  )
}
