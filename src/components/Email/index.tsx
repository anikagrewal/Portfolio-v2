import React, { useState, MouseEvent } from 'react';


const EmailLinkWithButton = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleAction = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

  
    window.location.href = `mailto:${email}`;

    
    navigator.clipboard.writeText(email);
    setCopied(true);


    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className={`flex flex-row gap-3 justify-center items-center`}>
      <button
        className={`cursor-pointer bg-beige rounded-full border-2 w-32 h-10 border-darkGreen text-base text-black hover:bg-darkGreen shadow-lg lg:w-64 lg:h-16 lg:text-h2`}
        onClick={handleAction}
      >
        {copied ? 'Copied to Clipboard!' : 'Email'}
      </button>
   
    </div>
  );
};

export default EmailLinkWithButton;