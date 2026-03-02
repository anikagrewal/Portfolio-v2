import Image from "next/image";
import YellowBtn from "../YellowBtn";

export default function BudgyHeader() {
    return(
        <div className={`flex justify-center mt-10`}>
        <div className={`flex bg-bwGreen lg:w-pW md:w-full flex-col rounded-md shadow-2xl shadow-darkGreen lg:h-head h-whl` }>
            
            <div className={`flex justify-center mt-5`}>
                <Image src={"/images/bwcover.png"} alt="BudgyWise Cover" width={900} height={700} className="lg:w-siteW rounded-md "/>
                </div>
            <div className="flex flex-col justify-center items-center mt-5">
            <h1 className={`text-h1 text-bwBlack`}>BudgyWise</h1>
                <p className={`text-bwBlack text-center lg:text-lbase`}>Personalized Budgeting Startup</p>
                <p className={`text-bwBlack text-center lg:text-lbase`}>Digital Experience Officer ~ Brand Identity and Web Experience</p>
                <div className={`pt-10`}>
                <YellowBtn
            text="Visit Live Site"
            link="https://budgywise.ca/"
            />
            </div>
            </div>
           
        </div>
        </div>
    )
}