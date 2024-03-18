import Image from "next/image";
import YellowBtn from "../YellowBtn";

export default function RescueHeader() {
    return(
        <div className={`flex bg-darkBlue w-full h-header flex-col justify-center items-center lg:flex-row lg:gap-32` }>
            <div>
           
            </div>
            <div className={`flex flex-col justify-content items-center gap-3`}>
            <h1 className={`text-h1 text-lightBlue`}>Rescue Radar</h1>
            <p className={`text-lightBlue text-center lg:w-96`}>Rescue Radar is Typescript-based web app, providing individuals the chance to explore all adoptable dogs and take a quiz to find their best breed match.</p>
<div className={`flex flex-col gap-3 lg:flex-row lg:gap-10`}>
<p className={`text-lightBlue font-bold`}>Roles: Developer</p>
<p className={`text-lightBlue font-bold`}>Time Frame: Feb 2024 - Current</p>
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
    )
}