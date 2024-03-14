import { useState } from 'react';
import Image from 'next/image';


const SiteMap = ({ src, alt, width, height, className }: ZoomProps) => {
    const [isZoomed, setIsZoomed] = useState(false);
  
    const toggleZoom = () => {
      setIsZoomed(!isZoomed);
    };
  
    return (
      <div className={`flex justify-center items-center`} style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }} onClick={toggleZoom}>
        <div>
          <Image src={src} alt={alt} width={isZoomed ? width * 2 : width} height={isZoomed ? height * 2 : height} className={className}/>
        </div>
      </div>
    );
  };
  
  export default SiteMap;