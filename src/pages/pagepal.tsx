import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import PageHeader from "@/components/PageHeader";

export default function PagePal() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <header>
      <NavBar/>
      <PageHeader/>
      </header>
 
<ScrollTop/>
      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}