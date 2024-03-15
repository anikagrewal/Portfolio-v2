import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div>
      {isVisible && (
          <div className="fixed bottom-10 right-5 lg:bottom-20 lg:right-20 z-50">
          <Image 
            src={'/images/arrow.svg'}
            alt="Back to Top"
            onClick={scrollToTop}
            width={55}
            height={55}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}