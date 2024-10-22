import Image from "next/image";
import YellowBtn from "../YellowBtn";

export default function WeatherHeader() {
    return(
        <div className={`flex flex-center justify-center mt-10`}>
        <div className={`flex bg-newPurple lg:w-pW  md:w-full h-header flex-col rounded-md shadow-2xl shadow-darkGreen justify-center items-center lg:flex-row lg:gap-32` }>
            <div>
                <Image src={"/images/weather.svg"} alt="innersight" width={300} height={400} className={`lg:w-pageW lg:h-pageH`}/>
            </div>
            <div className={`flex flex-col justify-content items-center gap-3`}>
            <h1 className={`text-h1 text-black`}>WeatherVial</h1>
            <p className={`text-black text-center lg:w-96 lg:text-lbase`}>A current weather app created using Typescript and Tailwind, for any location. Includes 5 days of the week, for every 3 hours.</p>
<div className={`flex flex-col gap-3 lg:flex-row lg:gap-10`}>
<p className={`text-black font-bold lg:text-lbase`}>Roles: Developer</p>
<p className={`text-black font-bold lg:text-lbase`}>Time Frame: Feb 2024</p>
</div>
            
            <div className={`flex flex-row gap-7 mt-7`}>
            <YellowBtn
            text="Visit Live Site"
            link="https://weather-app-2024-beige.vercel.app/"
            />
             <YellowBtn
            text="Visit Code"
            link="https://github.com/anikagrewal/weather-app-2024"
            />
            </div>
            </div>
        </div>
        </div>
    )
}