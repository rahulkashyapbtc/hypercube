import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/Common.css'
const FunctionBtn = () => {
 const navigate = useNavigate()

  const sendTransaction = ()=>{

navigate('/sendtransaction');



  }


    return (
   
   <>
    
    <div style={{display:'flex', alignItems:'center', height:'30px', justifyContent:'center',gap:'30px', paddingTop:'30px', paddingBottom:'50px'}}>

        <button id='btn' onClick={sendTransaction} style={{padding:'20px',cursor:'pointer', backgroundColor:'', border:'', color:'', borderRadius:'12px', fontSize:'16px', width:'80%'}}>SEND TOKENS <img src="/send.svg" height={"20px"} width={"20px"}  alt="" /></button>
        
        {/* <button style={{padding:'20px',cursor:'pointer', backgroundColor:'#2b2a2a', border:'none', color:'white', borderRadius:'12px', border:'1px solid #f2f2f2'}}>Swap</button>
        <button style={{padding:'20px',cursor:'pointer', backgroundColor:'#2b2a2a', border:'none', color:'white', borderRadius:'12px', border:'1px solid #f2f2f2'}}>Portfolio</button> */}


    </div>
    
    
    </> 
  )
}

export default FunctionBtn