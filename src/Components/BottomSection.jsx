import React, { useEffect, useState } from 'react'
import { Link , Outlet} from 'react-router-dom'
import { useLocation } from 'react-router-dom';


import './CSS/Common.css'

const BottomSection = () => {
  const location = useLocation();

// Access the current URL from the location object
const currentUrl = location.pathname + location.search;

console.log('Current URL:', currentUrl);

if(currentUrl === '/home/token'){

document.getElementById('token').style.color = "#037171";
document.getElementById('nft').style.color = "grey";
document.getElementById('act').style.color = "grey";
}

if(currentUrl === '/home/nft'){

  document.getElementById('nft').style.color = "#037171";
  document.getElementById('token').style.color = "grey";
document.getElementById('act').style.color = "grey";
}
if(currentUrl === '/home/Activity'){

  document.getElementById('act').style.color = "#037171";
  document.getElementById('nft').style.color = "grey";
document.getElementById('token').style.color = "grey";
}




  return (
   <>
   
   <div style={{height:'6vh', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
    <Link id='token' style={{textDecoration:'none', color:'grey' , }} to='/home/token'>Tokens</Link>
    <Link id='nft' style={{textDecoration:'none', color:'grey'}} to='/home/nft'>NFTs</Link>
    <Link id='act' style={{textDecoration:'none', color:'grey'}} to='/home/Activity'>Activity</Link>




   </div>
   
   <div style={{height:'30vh', padding:'20px'}}>
    <Outlet></Outlet>
</div>

   
   </>
  )
}

export default BottomSection