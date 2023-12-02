import React, { useEffect , useState} from 'react'
import Header from './Header'
import TotalBalance from './TotalBalance'
import CryptoAddressQRCode from './CryptoAddressQRCode'
import FunctionBtn from './FunctionBtn'
import Loader from './Loader'
import BottomSection from './BottomSection'
const Home = (props) => {
 const [Loading, setloading] = useState(1)
 
  
 useEffect(()=>{



setTimeout(()=>{

setloading(0)


},3000)







 },[])

 
  return (
    
<>


   
<div  style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>


<div style={{color:'white', width:'450px', height:'700px', backgroundColor:'#242424', boxShadow:'0px 5px 13px 0px black'}}>
  


<Header ></Header>
{Loading? <Loader/>:<></>}
    <TotalBalance></TotalBalance>
    <FunctionBtn></FunctionBtn>

    {/* <hr  style={{width:'80%', color:'#2b2a2a', borderColor:'#2b2a2a', marginBottom:'30px'}} /> */}
    
   

    <BottomSection />

</div>



</div>
 
    </>
  
  
    )
}

export default Home