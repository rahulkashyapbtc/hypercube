import React from 'react'
import './CSS/Common.css'

const MessagePop = (props) => {
 
 
    return (
    <>
    

    
   
  


        <div style={{display:'flex', justifyContent:'center',alignItems:'center', position:'absolute'}}>
          <div style={{height:'600px', width:'450px', backgroundColor:'#00000061'}}>
       <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'600px'}}>

                <div  style={{height:'150px', width:'250px', backgroundColor:'#242424',display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column', gap:'20px', padding:'10px', zIndex:'4', border:'1px solid #4b4949', borderRadius:'10px'}}>

                    <div style={{fontSize:'14px'}}>{props.title}.</div>
                    <button onClick={props.off} style={{padding:'10px',paddingLeft:'40px',paddingRight:'40px', cursor:'pointer',color:'', borderRadius:'12px'}} id='btn'>OK</button>
                </div>

       </div>
        
        
          </div>
         

        </div>



    
    </>
  )
}

export default MessagePop