import React from 'react';


const PdfLink = ({ pdfUrl }: IPdf) => {
  const handleOpenPdf = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    window.open(pdfUrl, '_blank');
  };

  return (
    <button
      className={`cursor-pointer bg-beige rounded-full border-2 w-32 h-10 border-darkGreen text-base text-black hover:bg-darkGreen shadow-lg lg:w-64 lg:h-16 lg:text-h2`} 
      onClick={handleOpenPdf}
    >
      Resume
    </button>
  );
};

export default PdfLink;