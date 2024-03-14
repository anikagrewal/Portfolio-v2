import Image from "next/image";
import YellowBtn from "../YellowBtn";

export default function CaseHeader() {
    return(
        <div className={`flex bg-darkBlue w-full h-header flex-col justify-center items-center lg:flex-row lg:gap-32` }>
            <div>
                <Image src={"/images/innerSight.svg"} alt="innersight" width={300} height={400} className={`lg:w-imgW lg:h-imgH`}/>
            </div>
            <div className={`flex flex-col justify-content items-center gap-3`}>
            <h1 className={`text-h1 text-lightBlue`}>InnerSight</h1>
            <p className={`text-lightBlue text-center lg:w-96`}>Innersight is a journal app that utilizes artificial intelligence to help find problems in your day to day life and give insights on how to covercome these struggles.
Your personal mental health compaion.</p>
<div className={`flex flex-col gap-3 lg:flex-row lg:gap-10`}>
<p className={`text-lightBlue font-bold`}>Roles: Project Manager & Developer</p>
<p className={`text-lightBlue font-bold`}>Time Frame: Sept 2023 - Ongoing</p>
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
    )
}