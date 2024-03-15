import Image from "next/image";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";


export default function Home() {
  return (
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
      

<footer>
<ScrollTop/>
  <Footer/>
</footer>
   
    </main>
  );
}
