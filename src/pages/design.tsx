import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { useEffect, useState } from "react";



export default function Design() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'bg-dark-mode' : 'bg-light-mode'}>
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-beige`}
    >
      <header>
      <NavBar/>
      </header>
      <div className={`pr-64 mt-5 lg:pr-headP`}>
        <h2 className={`text-h2 lg:text-h1`}>Design</h2>
        </div>
        <div className={`flex flex-row justify-center items-end gap-14 mt-10 mb-10`}>
        <div>
      <Image src={'/images/rihannaport.png'} alt="rihanna poster" width={400} height={700} />
      <p className={`flex justify-center items-center lg:text-lbase`}>Rihanna Poster ~ Adobe Photoshop ~ Multiple tools</p>
      </div>
      <div>
      <Image src={'/images/paintingport.png'} alt="rihanna poster" width={400} height={700} />
      <p className={`flex justify-center items-center lg:text-lbase`}>Woman Portrait ~ Adobe Photoshop ~ Pen Tool</p>
      </div>
      <div>
      <Image src={'/images/radioport.png'} alt="rihanna poster" width={400} height={700} />
      <p className={`flex justify-center items-center lg:text-lbase`}>Radio Drawing ~ Adobe Illustrator</p>
      </div>
      </div>
      <ScrollTop />
      <footer>
        <Footer/>
      </footer>
    </main>
    </div>
  );
}