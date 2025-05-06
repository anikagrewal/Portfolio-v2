import Image from "next/image";
import YellowBtn from "../YellowBtn";

export default function VanHeader() {
    return(
        <div className={`flex justify-center mt-10`}>
        <div className={`flex bg-whlBlue lg:w-pW md:w-full flex-col rounded-md shadow-2xl shadow-darkGreen lg:h-header h-whl` }>
            
                <Image src={"/images/pwhlHeader.png"} alt="Vancouver Tempest" width={1000} height={800} className="lg:w-pW rounded-md "/>
            <div className="flex flex-col justify-center items-center mt-5">
            <h1 className={`text-h1 text-whlCream`}>Vancouver Tempest</h1>
                <p className={`text-whlCream text-center lg:text-lbase`}>The Storm Rises from the West</p>
                <p className={`text-whlCream text-center lg:text-lbase`}>Professional Women's Hockey League ~ Concept Brand Identity</p>
            </div>
        </div>
        </div>
    )
}