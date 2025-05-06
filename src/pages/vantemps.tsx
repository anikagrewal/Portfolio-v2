import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import VanHeader from "@/components/VanHeader";



export default function VanTemps() {

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
      className={`flex min-h-screen flex-col items-center justify-between bg-beige  lg:pr-48 lg:pl-48 pr-10 pl-10`}
    >
      <header>
      <NavBar/>
     <VanHeader/>
      </header>
      <div>
      <h2 className={`text-h2 pl-5 lg:pl-5 pt-28`}>Imagining the Vancouver Tempest</h2>
        <div className={`flex flex-col justify-center items-center gap-10 mt-5`}>
          <hr className={`border-2 border-newGreen w-96 lg:w-siteW`}></hr>
          <div className={`flex flex-col gap-5 text-center`}>
          <p className={`lg:text-lbase lg:w-siteW`}>The PWHL has officially announced a Vancouver franchise!</p>
          <p className={`lg:text-lbase lg:w-siteW`}>With its primary color revealed as Pacific Blue and Cream, no official name or branding has yet been released. I have taken the liberty to envision what the identity of this west coast team could look like.</p>
          </div>
          <hr className={`border-2 border-newGreen w-80 lg:w-siteW`}></hr>
          </div>
      <div className="flex justify-center items-center mt-10">
    <p className={`lg:text-lbase lg:w-siteW`}>Under Creative Renovation, hold tight!</p>
      </div>
      <div className={`flex flex-col justify-center items-center gap-5 mt-10 lg:mt-18`}>
        <p className={`text-lbase`}>Back to Design:</p>
        <Button 
        text="Design Projects"
        link="/design"
        />
      </div>
   
 </div>
<ScrollTop/>
      <footer>
        <Footer/>
      </footer>
   
    </main>
    </div>
  );
}