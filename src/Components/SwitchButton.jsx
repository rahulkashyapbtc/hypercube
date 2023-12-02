import React, { useState , useEffect} from 'react';
import './CSS/Switch.css'
import getEthereumPriceInUSD from './getEthereumPriceInUSD';

const SwitchButton = () => {
  // State to track the switch state (On or Off)
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const USDT = 450000000;
  const USDTPRICE = 450122400.00 ;

  useEffect(()=>{

    const getPrice = async()=>{
            const EtherPrice = await getEthereumPriceInUSD();
            console.log("Total Flash Ether i Have ",USDT/EtherPrice)



    }

    if(isSwitchOn){
        getPrice();
    }


  },[isSwitchOn])

  // Function to handle switch toggle
  const toggleSwitch = () => {
    setIsSwitchOn((prevSwitchState) => !prevSwitchState);
  };

  return (
    <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
      <p style={{fontWeight:'200', color:'grey'}}>{isSwitchOn ? 'Flash Tokens :' : 'Flash Tokens :'}</p>
      <label className="switch">
        <input type="checkbox" checked={isSwitchOn} onChange={toggleSwitch} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SwitchButton;
