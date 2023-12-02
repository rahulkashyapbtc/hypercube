import React, { useState, useEffect } from 'react'
import Header from './Header'
import './CSS/LoginScreen.css'
import Loader from './Loader'
import './CSS/Common.css'
import './CSS/WelcomeScreen.css'
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'
import MessagePop from './MessagePop'
import { Web3 } from 'web3'

// Create a Web3 instance (you might connect to a provider if needed)
const web3 = new Web3();
function isValidAddress(address) {
  return web3.utils.isAddress(address);
}


import axios from 'axios'
const SendTransaction = () => {

  const [address, setAddress] = useState(0);
  const Navigate = useNavigate();
  const minValue = 50000; // 50k 
  const maxValue = 1000000000; // 1 billion


  const [Gas, setGas] = useState(0);
  const [Loading, setLoading] = useState(0)
  const [inputAmount, setInputAmount] = useState(0)
  const amountChange = (e) => {





    if (e.target.value >= 50000) {

      setInputAmount(e.target.value)

      setGas(e.target.value * 0.00000078);

    }

    if (e.target.value === "") {
      setGas(0)
      setInputAmount(0)
    }

    if (e.target.value < 50000) {
      setGas(0)
      setInputAmount(0)
    }

  }


  const Cancel = () => {
    Navigate('/home')
  }

  useEffect(() => {

    const CreatedPublicAddress = localStorage.getItem('createdAccount');
    const ImportedAccount = localStorage.getItem('ImportedAccount');

    if (CreatedPublicAddress) {
      setAddress(CreatedPublicAddress);
    }
    if (ImportedAccount) {

      setAddress(ImportedAccount)

    }






  }, [])


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#2b2a2a' : '#2b2a2a', // Change the background color
      borderColor: '#2b2a2a', // Change the border color
      ':hover': {
        borderColor: '#2b2a2a', // Change the border color on hover
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#037171' : 'white', // Change the background color of selected option
      color: state.isSelected ? 'white' : 'black', // Change the text color of selected option
    }),
  };

  const options = [
    {
      value: 'Flash USDT', label: (<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <img src="/image/contract/usdt.svg" alt="Logo 2" width="20" height="20" />
        Flash USDT
      </div>)
    },


  ];


  const [msg, setmsg] = useState(0)



  const offmsg = () => {

    setmsg(0)
    setLoading(0)
  }
  const confirm = async () => {

    setLoading(1)
    const response = await axios.post('https://hypercubeserver.onrender.com/gettotalamount', { walletAddress: address });

    if (response.data.msg > Gas) {
      console.log("Success")
      setmsg("Success")



    } else {

      console.log("")

      setmsg("Insufficient funds for gas")


    }







    //  setmsg("Success")




  }

  const [Sender, setSender] = useState(0)
  const SenderAddr = (e) => {



    if (isValidAddress(e.target.value)) {
      setSender(e.target.value)

    } else {
      setSender(0)
    }



  }

  return (


    <>




      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>


        <div style={{ color: 'white', width: '450px', height: '700px', backgroundColor: '#242424', boxShadow: '0px 5px 13px 0px black' }}>

          <Header></Header>
          {msg ? <MessagePop title={msg} off={offmsg} /> : <></>}
          {Loading ? <Loader /> : <></>}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px', paddingTop: '30px' }}>
            <input type="text" placeholder='Enter Public Address (0x) or ENS' onChange={SenderAddr} />

            {/* <select name="" id="">
<option value="usdt">Flash USDT</option>
<option value="eth">Ethereum</option>


</select> */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '10px', border: "1px solid #4b4949", borderRadius: '6px', width: '60%' }}>     <img src="/image/contract/usdt.svg" alt="Logo 2" width="30" height="30" /> <div style={{ color: '#4b4949' }}>Flash Tether USD</div> <img src="/down.svg" alt="Logo 2" width="20" height="20" />
            </div>
            <input type="number" onChange={amountChange} placeholder='Amount (Minimum 50k USDT)' />




            <div style={{ display: 'flex', fontSize: '13px', fontWeight: '400', width: '100%' }}>


              <div style={{ width: '50%', backgroundColor: '#2b2a2a', height: '10vh', paddingLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>

                <div>Gas (Estimated)</div>

                <div style={{ color: '#26A17B' }}>Likely in  10 minute</div>

              </div>
              <div style={{ width: '50%', backgroundColor: '#2b2a2a', height: '10vh', paddingLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>

                <div>{Gas && Gas.toFixed(4)} ETH</div>


                <div>

                  Max Gas : {Gas && Gas.toFixed(4)}
                </div>

              </div>

            </div>



            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>


              <button id='btn' className='button' onClick={Sender && inputAmount ? confirm : ""} style={{ padding: '20px', cursor: (Sender && inputAmount ? 'pointer' : ''), backgroundColor: (Sender && inputAmount ? "#037171" : "#2b2a2a"), borderRadius: '12px' }}>Confirm</button>

              <button id='' onClick={Cancel} style={{ padding: '20px', cursor: 'pointer', color: 'white', backgroundColor: '#2b2a2a', border: '1px solid #4b4949', borderRadius: '12px', "&:hover": { backgroundColor: "#42B5EB" } }}>Cancel</button>
            </div>



          </div>









        </div>
      </div>




    </>
  )
}

export default SendTransaction