import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { useEffect, useState } from "react";



export default function PagePal() {

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
      <PageHeader/>
      </header>
      <div>
      <h2 className={`text-h2 pl-5 lg:pl-32 pt-20`}>Challenge:</h2>
      <p className={`pl-5 pr-5 lg:pl-32 lg:pr-32 mb-8 mt-4 lg:text-lbase`}>This project hopes to solve the organization and management of both physical books and e-books 
        in a single, unified platform. The aim was to address the needs of readers who want to effortlessly 
        organize their existing book collection, both in physical and digital formats, and also discover new books.</p>
     
     <div  className={`flex flex-col justify-center items-start mb-8 lg:flex-row lg:gap-10 `} >
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p className={`lg:text-lbase`}>The home page of the individual's library shows each shelf that they have created.</p>
      </div>
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p className={`lg:text-lbase`}>This simplistic search page allows individual's to quickly search by author, book title, or genre</p>
      </div>
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p className={`lg:text-lbase`}>The shelf page features the books that have been added, while allowing the individual to choose to add or remove books and change the name of the shelf.</p>
      </div>
     </div>
     <h2 className={`text-h2 pl-5 lg:pl-32 pt-10`}>Solution:</h2>
     <p className={`pl-5 pr-5 lg:pl-32 lg:pr-32 mb-8 mt-4 lg:text-lbase`}>PagePal, is a personal library management web app developed using React and powered by the Google Books API. 
        The application allows users to seamlessly organize and digitally track records for their books. It simplifies
         the process of adding and managing books, offering flexible search options by title or author, as well as convenient 
         filtering capabilities. Users can create customizable bookshelves, making it easy to categorize and locate books according to their preferences.</p>
      </div>
      <div className={`flex flex-col justify-center items-center gap-5 mt-10 lg:mt-18`}>
        <p className={`text-lbase`}>More Development Projects:</p>
        <Button 
        text="WeatherVial"
        link="/weathervial"
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