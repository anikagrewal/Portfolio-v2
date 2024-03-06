import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CaseHeader from "@/components/CaseHeader";
import Colours from "@/components/CaseStudy/Colours";
import Mascots from "@/components/CaseStudy/Mascots";

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
        <h2 className={`text-h2 pl-5`}>Challenge:</h2>
        <div className={`flex flex-col justify-center items-center gap-10 mt-5`}>
          <hr className={`border-2 border-yellow w-80`}></hr>
          <div className={`flex flex-col gap-5 text-center`}>
          <h1 className={`text-h1 font-bold`}>24%</h1>
          <p>In just three years, drug claims in Canada for treating mental disorders among those aged 30 and under soared by a staggering 24%</p>
          </div>
          <hr className={`border-2 border-yellow w-80`}></hr>
          <p className={`p-5`}>The project hopes to address the challenge of analyzing numerous journal entries to find correlations between the individual's activites and their mental health symptoms. Aiming to help individual's actively avoid or increase activities to improve their well-being.</p>
        </div>
        <h2 className={`text-tbase pl-5`}>Research:</h2>
        <div className={`flex flex-col justify-center items-center`}>
        <p className={`p-5`}>Findings from interview questions and secondary research:</p>
        <div className={`flex flex-col lg:flex-row`}>
          <div className={`flex flex-col justify-center items-center gap-5 mb-8`}>
            <h3 className={`text-h4`}>Pyschological Barriers</h3>
            <div className={`flex flex-row gap-3 justify-center items-center`}>
              <div>
              <hr className={`h-52 border-yellow border-2`}></hr>
              </div>
              <div>
              <ul>
              <li>Motivation & consistency</li>
              <li>Perceived usefulness</li>
              <li>Repetition</li>
              <li>Emotional challenges</li>
              <li>Writing challenges</li>
              <li>Time constraints</li>
              <li>Self-criticism & hesitation</li>
              <li>Lack of direction</li>
              </ul>
              </div>
            </div>
          </div>
          <div className={`flex flex-col justify-center items-center gap-5 mb-8`}>
            <h3 className={`text-h4`}>Technical/Functional Issues</h3>
            <div className={`flex flex-row gap-3 justify-center items-center`}>
              <div>
              <hr className={`h-28 border-yellow border-2`}></hr>
              </div>
              <div>
              <ul>
              <li>Lack of customization</li>
              <li>Simplistic features</li>
              <li>Receiving same generated responses</li>
              <li>Aesthetic concerns</li>
              </ul>
              </div>
            </div>
          </div>
          <div className={`flex flex-col justify-center items-center gap-5 mb-8`}>
            <h3 className={`text-h4`}>Privacy Concerns</h3>
            <div className={`flex flex-row gap-3 justify-center items-center`}>
              <div>
              <hr className={`h-10 border-yellow border-2`}></hr>
              </div>
              <div>
              <ul>
              <li>Data sharing through AI</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        <h2 className={`text-tbase pl-5`}>Persona:</h2>
        <h2 className={`text-tbase pl-5`}>Site Map:</h2>
        <h2 className={`text-h2 pl-5`}>Design Process:</h2>
        <h2 className={`text-tbase pl-5`}>Logo:</h2>
        <h2 className={`text-tbase pl-5`}>Colour:</h2>
        <Colours/>
        <h2 className={`text-tbase pl-5`}>Mascots:</h2>
        <Mascots/>
        <h2 className={`text-tbase pl-5`}>Lo-Fi | Hi-Fi:</h2>
        <h2 className={`text-tbase pl-5`}>Coding:</h2>
        <h2 className={`text-tbase pl-5`}>Sentiment Analysis | Privacy Concerns:</h2>
        <h2 className={`text-h2 pl-5`}>Solution:</h2>
      </div>

      <footer>
        <Footer/>
      </footer>
   
    </main>
  );
}