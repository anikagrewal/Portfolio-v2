import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Develop from "@/components/Develop";
import ScrollTop from "@/components/ScrollTop";
import RescueHeader from "@/components/RescueHeader";

export default function Rescue() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <header>
      <NavBar/>
      <RescueHeader/>
      </header>
      <div>
      <h2 className={`text-h2 pl-5 lg:pl-32 pt-10`}>Challenge:</h2>
      <p className={`pl-5 pr-5 lg:pl-32 lg:pr-32 mb-8 mt-4`}>Text</p>
     
     <div  className={`flex flex-col justify-center items-center mb-8 lg:flex-row lg:gap-10`} >
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p>Text</p>
      </div>
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p>Text</p>
      </div>
      <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
      <p>Text</p>
      </div>
     </div>
     <h2 className={`text-h2 pl-5 lg:pl-32 pt-10`}>Solution:</h2>
     <p className={`pl-5 pr-5 lg:pl-32 lg:pr-32 mb-8 mt-4`}>Rescue Radar, text</p>
      </div>
 
<ScrollTop/>
      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}