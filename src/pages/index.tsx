import Image from "next/image";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <header>
      <NavBar/>
      <Header/>
      </header> 
        <h2 className={`text-h4`}>Projects</h2>
       
       <div>
       <h3 className={`text-h4 mb-10`}>Featured</h3>
       </div>
       <Feature/>
      

<footer>
  <Footer/>
</footer>
   
    </main>
  );
}
