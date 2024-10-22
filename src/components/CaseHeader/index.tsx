import Image from "next/image";
import YellowBtn from "../YellowBtn";

export default function CaseHeader() {
    return(
        <div className={`flex flex-center justify-center mt-10`}>
        <div className={`flex bg-newPurple lg:w-pW md:w-full rounded-md shadow-2xl shadow-darkGreen h-header flex-col justify-center items-center lg:flex-row lg:gap-32` }>
            <div>
                <Image src={"/images/innerSight.svg"} alt="innersight" width={300} height={400} className={`lg:w-imgW lg:h-imgH`}/>
            </div>
            <div className={`flex flex-col justify-content items-center gap-3`}>
            <h1 className={`text-h1 text-black`}>InnerSight</h1>
            <p className={`text-black text-center lg:w-96 lg:text-lbase`}>Innersight is a journal app that utilizes artificial intelligence to help find problems in your day to day life and give insights on how to covercome these struggles.
Your personal mental health compaion.</p>
<div className={`flex flex-col gap-3 lg:flex-row lg:gap-10`}>
<p className={`text-black font-bold lg:text-lbase`}>Roles: Project Manager & Developer</p>
<p className={`text-black font-bold lg:text-lbase`}>Time Frame: Sept 2023 - Ongoing</p>
</div>
            
            <div className={`flex flex-row gap-7 mt-7`}>
            <YellowBtn
            text="Visit Live Beta"
            link="https://play.google.com/store/apps/details?id=ca.innersightapp.app&pcampaignid=web_share"
            />
             <YellowBtn
            text="Visit Code"
            link="https://github.com/Mariessa-Pinto/innersight"
            />
            </div>
            </div>
        </div>
        </div>
    )
}