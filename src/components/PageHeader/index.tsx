import Image from "next/image";
import YellowBtn from "../YellowBtn";

export default function PageHeader() {
    return(
        <div className={`flex bg-darkBlue w-full h-header flex-col justify-center items-center lg:flex-row lg:gap-32` }>
            <div>
                <Image src={"/images/pagepall.png"} alt="innersight" width={300} height={400} className={`lg:w-pageW lg:h-pageH`}/>
            </div>
            <div className={`flex flex-col justify-content items-center gap-3`}>
            <h1 className={`text-h1 text-lightBlue`}>PagePal</h1>
            <p className={`text-lightBlue text-center lg:w-96`}>PagePal is a React-based personal library management web app, providing individuals seamless book management, easy search options, and customizable bookshelves.</p>
<div className={`flex flex-col gap-3 lg:flex-row lg:gap-10`}>
<p className={`text-lightBlue font-bold`}>Roles: Developer</p>
<p className={`text-lightBlue font-bold`}>Time Frame: Sept 2023 - Dec 2023</p>
</div>
            
            <div className={`flex flex-row gap-7 mt-7`}>
            <YellowBtn
            text="Visit Live Site"
            link="https://pagepal-library-app.vercel.app/"
            />
             <YellowBtn
            text="Visit Code"
            link="https://github.com/Mariessa-Pinto/pagepal-library-app"
            />
            </div>
            </div>
        </div>
    )
}