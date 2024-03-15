import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import WeatherHeader from "@/components/WeatherHeader";

export default function WeatherVial() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <header>
      <NavBar/>
      <WeatherHeader/>
      </header>
 
<ScrollTop/>
      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}