import React, { useState } from 'react';

const ShortenedString = ({ fullString }) => {
  const maxLength = 5; // Adjust this value based on your preference
  const [isFullStringCopied, setIsFullStringCopied] = useState(false);

  // Function to copy the full string to the clipboard
//   const copyFullString = () => {
//     navigator.clipboard.writeText(fullString);
//     setIsFullStringCopied(true);
//   };

  // Reset the copy status when the user clicks outside the component
  const handleBlur = () => {
    setIsFullStringCopied(false);
  };

  return (
    <div  onBlur={handleBlur} tabIndex={0}>
      {isFullStringCopied ? (
        <span>{fullString}</span>
      ) : (
        <span>
          {fullString.slice(0, maxLength)}
          {'...'}
          {fullString.slice(-maxLength)}
        </span>
      )}
    </div>
  );
};

export default ShortenedString;
