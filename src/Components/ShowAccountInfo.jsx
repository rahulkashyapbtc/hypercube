import React, { useEffect , useState} from 'react'
import './CSS/Common.css'
import CryptoAddressQRCode from './CryptoAddressQRCode'
import Header from './Header'
import { useNavigate } from 'react-router-dom'


const ShowAccountInfo = () => {
    const Navigate = useNavigate();

 
    const [cryptoAddress, setcryptoAddress] = useState(0)

 

    const logout = ()=>{

      localStorage.removeItem('key')
      localStorage.removeItem('ImportedAccount')
      localStorage.removeItem('createdAccount')
      Navigate('/')




    }

    useEffect(()=>{


     const createdacc =    localStorage.getItem('createdAccount');
      const importedacc =   localStorage.getItem('ImportedAccount');


      if(createdacc){
        setcryptoAddress(createdacc)
      }

      if(importedacc){
        setcryptoAddress(importedacc)
      }


    },[])

    const Cancel = ()=>{
        Navigate('/home')
    }

    return (
    

    <>

<div  style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>



<div style={{color:'white', width:'450px', height:'700px', backgroundColor:'#242424', boxShadow:'0px 5px 13px 0px black'}}>

<Header></Header>


<div  style={{height:'40vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
<CryptoAddressQRCode address={cryptoAddress} />


<div style={{display:'flex', gap:'20px', alignItems:'center'}}>


<button  id='btn' onClick={Cancel} style={{padding:'20px', cursor:'pointer',backgroundColor:'', border:'', color:'', borderRadius:'12px', display:'flex', alignItems:'center', gap:'10px'}}>
 
 <img src="/back.svg" height={"20px"}  width={"20px"}alt="" />


 <span>Back</span>
 
 </button>

 <button  id='btn' onClick={logout} style={{padding:'20px', cursor:'pointer',backgroundColor:'', border:'', color:'', borderRadius:'12px', display:'flex', alignItems:'center', gap:'10px'}}>

 <img src="/logout.svg" height={"20px"}  width={"20px"}alt="" />


 <span>Logout</span>
 
 </button> 
</div>
</div>




</div>
</div>
    
    
    </>
  )
}

export default ShowAccountInfo