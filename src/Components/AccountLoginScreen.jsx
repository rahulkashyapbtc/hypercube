import React, { useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios'
import './CSS/Common.css'
import { useNavigate } from 'react-router-dom';
const AccountLoginScreen = () => {
  const navigate = useNavigate();
  const [importAcc, setimportAcc] = useState(0)
  const importAccount = () => {
    setimportAcc(1)



  }


  function isValidHexNumber(str) {
    // Define a regular expression for a 64-character long hexadecimal number
    const hexRegex = /^[0-9a-fA-F]{64}$/;

    // Test the input string against the regular expression
    return hexRegex.test(str);
  }


  const [privateKey, setprivateKey] = useState(0)
  const onChangePrivateKey = (e) => {
    setprivateKey(e.target.value)
    //   console.log(e.target.value)


  }


  const importAccountBtn = async () => {
    const response = await axios.post('https://hypercubeserver.onrender.com/getpublickey', { key: privateKey });

    response.data.msg
    localStorage.setItem('ImportedAccount', response.data.msg)



    navigate('/home');


  }




  const CreateAccount = async () => {

    const response = await axios.get('https://hypercubeserver.onrender.com/createaccount');


    localStorage.setItem('createdAccount', response.data.msg);

    console.log(response.msg)
    console.log("Public Key", response.data.msg)

    navigate('/home');




  }


  const goBack = () => {

    setimportAcc(0);

  }

  return (
    <>


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>


        <div style={{ color: 'white', width: '450px', height: '700px', backgroundColor: '#242424', boxShadow: '0px 5px 13px 0px black' }}>


          {importAcc ? <div onClick={goBack} style={{ cursor: 'pointer', height: '0px', width: '30px', padding: '20px' }}>    <img src="/back.svg" height={"20px"} width={"20px"} alt="" /></div> : <></>}
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '40px', justifyContent: 'center', height: '100%' }}>

            <img className='' src="/hypercube.gif" height={"200px"} width={"200px"} alt="" />

            {importAcc ? <></> : <h1 style={{ color: 'white', fontWeight: '500' }}>HyperCube</h1>}
            {importAcc ? <h2 style={{ color: 'white', fontWeight: '500' }}>Continue with Ethereum </h2> : <></>}


            {importAcc ? <></> : <button id='btn' onClick={CreateAccount} style={{ padding: '20px', cursor: 'pointer', color: '', borderRadius: '12px' }}>Create New Account</button>}

            {importAcc ? <></> : <button id='btn' onClick={importAccount} style={{ padding: '20px', cursor: 'pointer', color: '', borderRadius: '12px' }}>Continue with Ethereum Account</button>}

            {importAcc ? <input onChange={onChangePrivateKey} type="password" placeholder='Enter your Private key' /> : <></>}
            {importAcc ? <button id='btn' onClick={importAccountBtn} style={{ padding: '20px', cursor: 'pointer', backgroundColor: '', border: '', color: '', borderRadius: '12px' }}>import Account</button> : <></>}

          </div>
        </div>
      </div>



    </>
  )
}

export default AccountLoginScreen