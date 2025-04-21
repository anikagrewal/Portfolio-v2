import Image from "next/image";
import YellowBtn from "../YellowBtn";

export default function RescueHeader() {
    return(
        <div className={`flex flex-center justify-center mt-10`}>
        <div className={`flex bg-newPurple lg:w-pW  md:w-full h-header flex-col justify-center items-center rounded-md shadow-2xl shadow-darkGreen lg:flex-row lg:gap-8` }>
            <div>
           <Image src={"/images/rescueCover.png"} alt="rescue Radar" width={1000} height={1000} className={`lg:w-rhW lg:h-rhH`}/>
            </div>
            <div className={`flex flex-col justify-content items-center gap-3`}>
            <h1 className={`text-h1 text-black`}>Rescue Radar</h1>
            <p className={`text-black text-center lg:w-96 lg:text-lbase`}>Rescue Radar is Typescript-based web app, providing individuals the chance to explore all adoptable dogs and take a quiz to find their best breed match.</p>
<div className={`flex flex-col gap-3 lg:flex-row lg:gap-10`}>
<p className={`text-black font-bold lg:text-lbase`}>Roles: Developer</p>
<p className={`text-black font-bold lg:text-lbase`}>Time Frame: Feb 2024 - Current</p>
</div>
            
            <div className={`flex flex-row gap-7 mt-7`}>
            <YellowBtn
            text="Visit Live Site"
            link="https://rescue-radar-tawny.vercel.app/"
            />
             <YellowBtn
            text="Visit Code"
            link="https://github.com/Mariessa-Pinto/rescue-radar"
            />
            </div>
            </div>
        </div>
        </div>
    )
}