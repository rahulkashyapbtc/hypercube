import React from 'react'

const Activity = () => {
  return (
  <>
  
  <div style={{height:"10vh", display:'flex', justifyContent:'center', alignItems:'center'}}>



  <div style={{display:'flex', justifyContent:'space-around', gap:'30px', height:'25px', alignItems:'center', width:'100%'}}>
<div style={{display:'flex', gap:'10px'}}>
<img src="/received.svg" height={"40px"} width={"40px"} alt="" />

<div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
    <div>Receive</div>
    <div style={{fontSize:'13px', fontWeight:'100', color:'grey'}}>$450000000 USDT</div>
</div>
</div>
<div >
</div>
<div style={{display:'flex', flexDirection:'column'}}>
<div style={{fontWeight:'200', fontSize:'14px'}} >$450122400.00 USD</div>
<div></div>
</div>
</div>
  


</div>

  
  </>
  )
}

export default Activity