import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CaseHeader from "@/components/CaseHeader";

export default function CaseStudy() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <header>
      <NavBar/>
      <CaseHeader/>
      </header>
      <div>
        <h2 className={`text-h2`}>Challenge:</h2>
        <div className={`flex flex-col justify-center items-center gap-10 mt-5`}>
          <hr className={`border-2 border-yellow w-80`}></hr>
          <div className={`flex flex-col gap-5 text-center`}>
          <h1 className={`text-h1 font-bold`}>24%</h1>
          <p>In just three years, drug claims in Canada for treating mental disorders among those aged 30 and under soared by a staggering 24%</p>
          </div>
          <hr className={`border-2 border-yellow w-80`}></hr>
        </div>
      </div>

      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}