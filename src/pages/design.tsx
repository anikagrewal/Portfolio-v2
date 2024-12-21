import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { useEffect, useState } from "react";
import TabBar from "@/components/TabBar";



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
      className={`flex min-h-screen flex-col lg:flex-col items-center justify-between bg-beige`}
    >
      <header>
      <NavBar/>
      </header>
      <div className={`pr-64 mt-5 lg:pr-headP`}>
        <h2 className={`text-h2 lg:text-h1`}>Design</h2>
        </div>
        <TabBar/>
        <div className={`flex flex-row justify-center items-end gap-14 mt-10 mb-10`}>
        
      
      </div>
      <ScrollTop />
      <footer>
        <Footer/>
      </footer>
    </main>
    </div>
  );
}