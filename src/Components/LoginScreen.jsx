import React, {useState, useEffect} from 'react'
import './CSS/LoginScreen.css'
import './CSS/Common.css'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MessagePop from './MessagePop'
import AccountLoginScreen from './AccountLoginScreen'
const LoginScreen = () => {
  
  const [isregis, setisregis] = useState(0)
  const [WeakPass, setWeakpass] = useState(0)
useEffect(()=>{

const key = localStorage.getItem('key');

if(key){
  console.log("login")
  setisregis(1)
}else{
  console.log("register")
}


},[])

  const Navigate = useNavigate()
    const [show, setshow] = useState(0)
    const [addr, setaddt] = useState(0)

    const [pass, setPass] = useState(0);
const password = (e)=>{
setPass(e.target.value)

}


function isStrongPassword(password) {
  // Define criteria
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Check if all criteria are met
  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  );
}


    const submit = async ()=>{

      if(isregis){
       
        const key = localStorage.getItem('key')
        if( key === pass){

          Navigate('/home')
        }else{
          setWeakpass("Password incorrect ")
        }


      }else{
        if(isStrongPassword(pass)){
          // setshow(1)
          
          
          
  
          localStorage.setItem('key', pass);
          Navigate('/loginop')
      }else{
        setWeakpass("Use Strong Password")
      }
      }

  }

  const off = ()=>{
    setWeakpass(0); 
  }


    return (
   
    <>
    
    
   <div  style={{display:'flex', alignItems:'center', flexDirection:'column', gap:'40px', justifyContent:'center', height:'100%'}}>
     
     {/* <img className='rotation' src="/logo.png" height={"200px"} width={"200px"} alt="" /> */}
{ WeakPass?<MessagePop off={off} title={WeakPass}/>:<></>}
     <img className='' src="/hypercube.gif" height={"200px"} width={"200px"} alt="" />
     <h1 style={{color:'white', fontWeight:'500'}}>HyperCube</h1>
    
    <input type="Password" placeholder={isregis?"Enter Your Password":"Set Your Password"} onChange={password} />


    <button id='btn'  onClick={submit} style={{padding:'20px', cursor:'pointer',borderRadius:'12px'}}>{isregis?"Password":"Set Your Password"}</button>
   

     </div>
    
    </>

  )
}

export default LoginScreen