import { useState } from 'react'
import WelcomeScreen from './Components/WelcomeScreen' 
import LoginScreen from './Components/LoginScreen'
import Application from './Application'
import './App.css'
import SendTransaction from './Components/SendTransaction'
import Token from './Components/Token'
import Activity from './Components/Activity'
import Home from './Components/Home'
import NFT from './Components/NFT'
import AccountLoginScreen from './Components/AccountLoginScreen'
import ShowAccountInfo from './Components/ShowAccountInfo'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  




  return (  
    <>
    
    <BrowserRouter>
    <Routes>
      
      <Route exat path='/' element={<Application/>}/>
      <Route exat path='/home' element={<Home/>}>
      <Route exat path='/home/token' element={<Token/>}/>
      <Route exat path='/home/activity' element={<Activity/>}/>
      <Route exat path='/home/nft' element={<NFT/>}/>

      </Route>

      <Route exat path='/loginop' element={<AccountLoginScreen/>}></Route>
     {/* <Route exat path='/userinfo' element={<ShowAccountInfo/>}></Route> */}
     
     
      <Route exat path='/sendtransaction' element={<SendTransaction/>}></Route>
     <Route exat path='/userinfo' element={<ShowAccountInfo/>}></Route>



</Routes>


</BrowserRouter>

    </>
  )
}

export default App
