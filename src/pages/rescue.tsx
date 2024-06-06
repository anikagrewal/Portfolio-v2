import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Develop from "@/components/Develop";
import ScrollTop from "@/components/ScrollTop";
import RescueHeader from "@/components/RescueHeader";
import Button from "@/components/Button";
import { useEffect, useState } from "react";



export default function Rescue() {

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
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white  lg:pr-48 lg:pl-48 pr-10 pl-10`}
    >
      <header>
      <NavBar/>
      <RescueHeader/>
      </header>
      <div>
      <h2 className={`text-h2 pl-5 lg:pl-32 pt-10`}>Challenge:</h2>
      <p className={`pl-5 pr-5 lg:pl-32 lg:pr-32 mb-8 mt-4 lg:text-lbase`}>This project hopes to solve the difficulty of finding dogs that are available for adoption. The aim was to address the needs of individuals find it difficult searching through many sites and not knowing what breed is the best match for them. </p>
     
     <div  className={`flex flex-col justify-center items-center mb-8 lg:flex-row lg:gap-10`} >
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p className={`lg:text-lbase`}>The view adoptable dogs page allows individuals to filter by breed, age, size, gender, and who the dog is good with. </p>
      </div>
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p className={`lg:text-lbase`}>The quiz has multiple questions allowing for the individual to find the best possible match to a breed that would work for both the breed and the individual.</p>
      </div>
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p className={`lg:text-lbase`}>The chart aids in showcasing the benefits of dog ownership.</p>
      </div>
     </div>
     <h2 className={`text-h2 pl-5 lg:pl-32 pt-10`}>Solution:</h2>
     <p className={`pl-5 pr-5 lg:pl-32 lg:pr-32 mb-8 mt-4 lg:text-lbase`}>Rescue Radar, is a adoptable dogs search and resource web app developed using Typescript and Tailwind, powered by the PetFinder API and Ninja Dogs API. This application allows individuals to search for all adoptable dogs in one go. It simplifies the process by allowing for filtering. Individuals are also able to take a quiz that will match them to the best breed fit for them, to allow for more ease on what breed they could look for.</p>
      </div>
      <div className={`flex flex-col justify-center items-center gap-5 mt-10 lg:mt-18`}>
        <p className={`text-lbase`}>More Development Projects:</p>
        <Button 
        text="PagePal"
        link="/pagepal"
        />
        <Button 
        text="WeatherVial"
        link="/weathervial"
        />
      </div>
 
<ScrollTop/>
      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}