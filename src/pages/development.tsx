import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Development() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <header>
      <NavBar/>
      </header>


      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}