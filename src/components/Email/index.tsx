import React, { useState, MouseEvent } from 'react';
import styles from '@/styles/Home.module.css';


const EmailLink = ({ email }: IEmail) => {
  const [copied, setCopied] = useState(false);

  const handleAction = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Open email client
    window.location.href = `mailto:${email}`;

    // Copy to clipboard
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Optionally, you can reset the copied state after a certain duration
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <a
      className={styles.linkTxt}
      style={{ textDecoration: 'none' }}
      href={`mailto:${email}`}
      onClick={handleAction}
    >
      {copied ? 'Copied to Clipboard!' : 'Email'}
    </a>
  );
};

export default EmailLink;