import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Develop from "@/components/Develop";
import ScrollTop from "@/components/ScrollTop";

export default function Rescue() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <header>
      <NavBar/>
      </header>
 
<ScrollTop/>
      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}