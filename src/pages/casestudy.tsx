import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CaseHeader from "@/components/CaseHeader";
import Colours from "@/components/CaseStudy/Colours";
import Mascots from "@/components/CaseStudy/Mascots";
import Sapc from "@/components/CaseStudy/SAPC";
import Logo from "@/components/CaseStudy/Logo";
import SiteMap from "@/components/CaseStudy/SiteMap";
import Research from "@/components/CaseStudy/Research";

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
        <h2 className={`text-h2 pl-5 lg:pl-20 pt-10`}>Challenge:</h2>
        <div className={`flex flex-col justify-center items-center gap-10 mt-5`}>
          <hr className={`border-2 border-yellow w-80 lg:w-siteW`}></hr>
          <div className={`flex flex-col gap-5 text-center`}>
          <h1 className={`text-h1 font-bold`}>24%</h1>
          <p className={`lg:text-lbase`}>In just three years, drug claims in Canada for treating mental disorders among those aged 30 and under soared by a staggering 24%</p>
          </div>
          <hr className={`border-2 border-yellow w-80 lg:w-siteW`}></hr>
          <p className={`p-5 lg:text-lbase lg:pl-80 lg:pr-80`}>The project hopes to address the challenge of analyzing numerous journal entries to find correlations between the individual's activites and their mental health symptoms. Aiming to help individual's actively avoid or increase activities to improve their well-being.</p>
        </div>
        <h2 className={`text-tbase pl-5 lg:pl-20  pt-10`}>Research:</h2>
        <p className={`pl-5 lg:pl-20 mb-8 mt-4 lg:w-imgW`}>Findings from interview questions and secondary research:</p>
        <Research/>
        <h2 className={`text-tbase pl-5 lg:pl-20  pt-10`}>Persona:</h2>
        <h2 className={`text-tbase pl-5 lg:pl-20  pt-10`}>Site Map:</h2>
        <SiteMap src={"/images/sitemap.png"} alt={"sitemap"} width={300} height={500} className={`lg:w-siteW lg:h-siteH`} />
        <h2 className={`text-h2 pl-5 lg:pl-20 pt-10`}>Design Process:</h2>
        <h2 className={`text-tbase pl-5 lg:pl-20 pt-10`}>Logo:</h2>
        <Logo/>
        <h2 className={`text-tbase pl-5 lg:pl-20 pt-10`}>Colour:</h2>
        <Colours/>
        <h2 className={`text-tbase pl-5 lg:pl-20 pt-10`}>Mascots:</h2>
        <Mascots/>
        <h2 className={`text-tbase pl-5 lg:pl-20 pt-10`}>Lo-Fi | Hi-Fi:</h2>
        <h2 className={`text-tbase pl-5 lg:pl-20 pt-10`}>Coding:</h2>
        <h2 className={`text-tbase pl-5 lg:pl-20 pt-10`}>Sentiment Analysis | Privacy Concerns:</h2>
        <Sapc/>
        <h2 className={`text-h2 pl-5 lg:pl-20 pt-10`}>Solution:</h2>
      </div>

      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}