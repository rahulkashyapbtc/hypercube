import React from 'react'

import './CSS/WelcomeScreen.css'
const WelcomeScreen = () => {
   


    return (
  
   <>

   
      <div  style={{display:'flex', alignItems:'center', flexDirection:'column', gap:'40px', justifyContent:'center', height:'100%'}}>
     
      <img className='rotation' src="/logo.png" height={"200px"} width={"200px"} alt="" />
      <h1 style={{color:'white'}}>HyperCube</h1>
      {/* <img src="/image/spinner.gif" height={"40px"} width={"40px"} alt="" /> */}
    

      </div>

   </>


  )
}

export default WelcomeScreen