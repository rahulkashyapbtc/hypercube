import { useState } from 'react'
import WelcomeScreen from './Components/WelcomeScreen'
import LoginScreen from './Components/LoginScreen'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home'

const Application = () => {
  return (
   <>
   
   <div  style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>


<div style={{color:'white', width:'450px', height:'700px', backgroundColor:'#242424', boxShadow:'0px 5px 13px 0px black'}}>
  
  <LoginScreen/>



</div>



</div>



 
   </>
  )
}

export default Application