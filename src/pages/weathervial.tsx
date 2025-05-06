import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import WeatherHeader from "@/components/WeatherHeader";
import Button from "@/components/Button";
import { useEffect, useState } from "react";



export default function WeatherVial() {

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
      <WeatherHeader/>
      </header>
      <div>
      <h2 className={`text-h2 pl-5 lg:pl-32 pt-20`}>Challenge:</h2>
      <p className={`pl-5 pr-5 lg:pl-32 lg:pr-32 mb-8 mt-4 lg:text-lbase`}>This project hopes to solve the all in one weather forecast of both current and the next five days for every three hours
        in a single, unified platform. The aim was address the needs of an individual who would like to know the weather of any city that they choose to search for.</p>
     
   
     <h2 className={`text-h2 pl-5 lg:pl-32 pt-10`}>Solution:</h2>
     <p className={`pl-5 pr-5 lg:pl-32 lg:pr-32 mb-8 mt-4 lg:text-lbase`}>WeatherVial, is a weather app developed using Typescript and Tailwind in NextJS and powered by the Open Weather API. It integrates two API's together to get both current and the five day forecast.
       Using vector images and UI/UX design, a simple and unique layout was created for easy accessibility and a weather vial ambiance.</p>
      </div>
        <div  className={`flex flex-col items-start justify-center mb-8 lg:flex-row lg:gap-10`} >
            <div className={`flex flex-col gap-3 justify-center items-center p-6 lg:w-textW`}>
            <Image src={'/images/weat1.png'} alt="chart" width={350} height={350} className={`rounded-lg shadow-2xl shadow-darkGreen`} />
            <p className={`pt-8 lg:text-lbase`}>The scroll function allows individuals to be able to see the weather forecast for the next 5 days, every 3 hours. This showcases the time, temperature, a description of the weather, and the wind speed.</p>
            </div>
            <div className={`flex flex-col gap-3 justify-center items-center p-6 lg:w-textW`}>
            <Image src={'/images/weat2.png'} alt="chart" width={350} height={350} className={`rounded-lg shadow-2xl shadow-darkGreen`}/>
            <p className={`pt-8 lg:text-lbase`}>Type in any location and the weather will be display for the current day, showcasing the temperature, a description of the weather, and the wind speed.</p>
            </div>
            </div>
      <div className={`flex flex-col justify-center items-center gap-5 mt-10 lg:mt-18`}>
        <p className={`text-lbase`}>More Development Projects:</p>
        <Button 
        text="PagePal"
        link="/pagepal"
        />
        <Button 
        text="Rescue Radar"
        link="/rescue"
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