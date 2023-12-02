import React from 'react';
import QRCode from 'qrcode.react';

const CryptoAddressQRCode = ({ address }) => {
 
  const handleCopyClick = () => {
    // Create a range object to select the text
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('text-to-copy'));

    // Get the selection object
    const selection = window.getSelection();

    // Remove existing selections and add the new one
    selection.removeAllRanges();
    selection.addRange(range);

    // Execute the copy command
    document.execCommand('copy');

    // Clear the selection
    selection.removeAllRanges();
  };
 
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      
      <QRCode height={200} width={"200px"} value={address} />
      <p onClick={handleCopyClick} style={{backgroundColor:'rgb(65 181 235 / 8%)',color:'#41B5EB',fontSize:'14px', padding:'10px'}} >{address}</p>
    </div>
  );
};

export default CryptoAddressQRCode;
