import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import BudgyHeader from "@/components/BudgyHeader";
import Carousel from "@/components/Carousel";
import BudgyColours from "@/components/BudgyWise/BudgyColours";
import BudgyCar from "@/components/BudgyWise/BudgyCar";


export default function BudgyWise() {

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
     <BudgyHeader/>
      </header>
      <div className={`pt-20`}>
        <h2 className={`text-h2 pl-5 lg:pl-32 pt-20`}>BudgyWise Branding</h2>
        <div className={`flex justify-center mt-10 gap-20`}>
          <div className={`flex flex-col justify-center items-center pt-5`}>
        <Image src={"/images/bwlogo.svg"} alt="BudgyWise Logo" width={300} height={100} className="lg:w-logoW rounded-md "/>
        <p>Logo</p>
        </div>
        <div className={`flex flex-col justify-center items-center pt-10`}>
                        <Image src={"/images/bwwordmark.svg"} alt="BudgyWise WordMark" width={500} height={300} className="lg:w-textW rounded-md "/>
                        <p>Wordmark</p>
                        </div>
                        </div>
                        <h2 className={`text-h2 pl-5 lg:pl-32 pt-20`}>Colour Palette</h2>
                        <BudgyColours/>
      <h2 className={`text-h2 pl-5 lg:pl-32 pt-20`}>Assests for BudgyWise</h2>
      <Carousel/>
      <h2 className={`text-h2 pl-5 lg:pl-32 pt-20`}>Marketing Snippets</h2>
      <BudgyCar/>
      </div>
      <div className={`flex flex-col justify-center items-center gap-5 mt-10 lg:mt-18`}>
        <p className={`text-lbase`}>Back to Design:</p>
        <Button 
        text="Design Projects"
        link="/design"
        />
      </div>
 
<ScrollTop/>
      <footer>
        <Footer/>
      </footer>
   
    </main>
    </div>
  );
}