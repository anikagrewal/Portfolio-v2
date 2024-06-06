import Image from "next/image";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { useEffect, useState } from "react";



export default function Home() {

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
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <header>
      <NavBar/>
      <Header/>
      </header> 
      <div className={`pr-64 mt-5 lg:pr-headP`}>
        <h2 className={`text-h2 lg:text-h1`}>Projects</h2>
        </div>
       <div>
       <h3 className={`text-h4 mb-10 mt-5 lg:text-h2`}>Featured</h3>
       </div>
       <Feature/>
      
       <ScrollTop/>
<footer>

  <Footer/>
</footer>
   
    </main>
    </div>
  );
}
