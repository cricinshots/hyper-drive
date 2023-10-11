import React,{useState,useEffect} from 'react'
import "./tmain.css";
import {doTransact} from '../Solana/signAndSend'

export default function MainT() {
 const [amount,changeAmount]=useState(0);
 useEffect(() => {
   
 }, [amount])
 
  return (

   <div id = "rootElementTransfer" className="tElement">
   
     <div className="Heading">You are transferring resources
                             from your wallet to your Game
     </div>

     <div className='con1'>
           <div id = "gems">
             Gems
           </div>
         <div className="container">
           <div className="gems">
             <img src={process.env.PUBLIC_URL +"/tgems.png"} alt="Gem Image" className="gem-image" />
           </div>
         
           <input className="other-container" type='text' onChange={(event)=>changeAmount(event.target.value)}>
             
           </input>
         </div>
     </div>
     <div className="Heading1">You are transferring {amount} gems to your Game. Are you sure?
     </div>
     <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
           <div className="transferButton1" onClick={()=>{
                console.log(doTransact(amount,"bf235e1e38ece59eccc2b71e9832358ce95fa722c2d35cO573e77d3457d5a2e827a179fd18206a6"))
           }}>
           </div>
         </div>
 </div>
  )
}
