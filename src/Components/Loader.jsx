import React from 'react'
import './CSS/Common.css'


const Loader = () => {
  return (
    <>
    
    
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', position:'absolute'}}>
          <div style={{height:'600px', width:'450px', backgroundColor:'#00000061'}}>
       <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'600px'}}>

                <div  style={{height:'150px', width:'250px', backgroundColor:'',display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column', gap:'10px', padding:'10px'}}>

                <img src="/spinner.gif" height={"20px"} width={"20px"} alt="" />
              
              
              
                </div>

       </div>
        
        
          </div>
         

        </div>



    
    
    
    </>
  )
}

export default Loader