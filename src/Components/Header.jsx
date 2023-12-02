import React , {useState}from 'react'
import Menu from './Menu'
import ShowAccountInfo from './ShowAccountInfo'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [Menu, setMenu] = useState(0)
  
  const showMenu =()=>{
// setMenu(1)
navigate('/userinfo')


  }


  return (
   <>
    <div style={{height:'6vh', backgroundColor:'#2b2a2a', display:'flex',gap:'', alignItems:'center', justifyContent:'space-between', paddingLeft:'10px'}}>


    
   <div style={{display:'flex',gap:'5px', alignItems:'center',}}> 
   <div> <img className='' src="/headerlogo.gif" height={"40px"} width={"40px"} alt="" /></div>
    <div>HyperCube </div>
   </div>


<div onClick={showMenu} style={{paddingRight:'10px', cursor:'pointer'}}><img src="/threedots.svg" height={"20px"} width={"20px"} alt="" /></div>

    </div>

 

   
   </>
  )
}

export default Header