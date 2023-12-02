import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ShowAccountInfo from './ShowAccountInfo';
import ShortenedString from './ShortenedString';
import getEthereumPriceInUSD from './getEthereumPriceInUSD';
import SwitchButton from './SwitchButton';
import './CSS/Switch.css'

const TotalBalance = (props) => {
  const navigate = useNavigate();
  const USDT = 450000000;
  const USDTPRICE = 450122400.00 ;
  const maxLength = 9;
const [address, setAddress] = useState(0);
const [TotalAmount , setTotalAmount] = useState(0);
const [ethusdt, setethusdt] = useState(0.00)
  useEffect(()=>{

    const CreatedPublicAddress = localStorage.getItem('createdAccount');
    const ImportedAccount = localStorage.getItem('ImportedAccount');
  
    if (CreatedPublicAddress) {
      setAddress(CreatedPublicAddress);
    }
    if(ImportedAccount){

      setAddress(ImportedAccount)

    }
    // if(CreatedPublicAddress && ImportedAccount){
    //   navigate('/');

    // }else{
    //   navigate('/'); 
    // }

    


  },[])

  const showInfo=()=>{

    navigate('/userinfo')

  }



  useEffect(()=>{
const getBalance = async ()=>{


  const response = await axios.post("http://localhost:8800/gettotalamount", {walletAddress : address});
  setTotalAmount(response.data.msg);
  console.log(response.data.msg)
  const ethp = await getEthereumPriceInUSD();
  setethusdt(ethp* response.data.msg)



}

if(address){
  getBalance()
}

  },[address])


  // Swich



    // State to track the switch state (On or Off)
    const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [TotalAmountWithFlash, setTotalAmountWithFlash] =useState(0);
  
    useEffect(()=>{
  
      const getPrice = async()=>{
              const EtherPrice = await getEthereumPriceInUSD();
             
              setTotalAmountWithFlash((USDT/EtherPrice).toFixed(3))
            
  
      }
  
      if(isSwitchOn){
          getPrice();
          
          setethusdt(1)
      }else{
        setethusdt(0.00)
      }
  
  
    },[isSwitchOn])
  
    // Function to handle switch toggle
    const toggleSwitch = () => {
      setIsSwitchOn((prevSwitchState) => !prevSwitchState);
    };
  

  // /switch


  

  return (
    <>
    
        <div style={{height:'30vh', display:'flex',backgroundColor:'', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:'10px'}}>
                
                <div onClick={showInfo} style={{borderRadius:'23px', backgroundColor:'rgb(65 181 235 / 8%)',color:'#41B5EB', padding:'8px',fontSize:'12px', cursor:'pointer'}}>  
            {address &&    
                <span>
          {address.slice(0, maxLength)}
          {'...'}
          {address.slice(-maxLength)}
        </span>}
      
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize:'35px', color:'white', fontWeight:'500'}}> {TotalAmount && (isSwitchOn? TotalAmountWithFlash :TotalAmount)} ETH</p>
                <p>{ethusdt && (isSwitchOn? ethusdt + USDTPRICE:ethusdt)} USD</p>
                </div>

                <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
      <p style={{borderRadius:'23px', backgroundColor:'rgb(65 181 235 / 8%)',color:'#41B5EB', padding:'8px',fontSize:'13px'}}>{isSwitchOn ? 'Flash Tokens :' : 'Flash Tokens :'}</p>
      <label className="switch">
        <input type="checkbox" checked={isSwitchOn} onChange={toggleSwitch} />
        <span className="slider round"></span>
      </label>
    </div>

        </div>
    
      
    
    </>
  )
}

export default TotalBalance