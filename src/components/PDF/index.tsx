import React from 'react';
import styles from '@/styles/Home.module.css';


const PdfLink = ({ pdfUrl }: IPdf) => {
  const handleOpenPdf = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.open(pdfUrl, '_blank');
  };

  return (
    <a
      className={styles.linkTxt}
      style={{ textDecoration: 'none' }}
      href={pdfUrl}
      onClick={handleOpenPdf}
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );
};

export default PdfLink;