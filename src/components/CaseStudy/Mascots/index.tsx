import Image from "next/image"

export default function Mascots() {
    return(
        <div>
            <p className={`pl-5 lg:pl-20 mb-8 mt-4 lg:w-imgW`}>The users have the option to customize their mascot so that they can feel that there is a personalized companion that is following and guiding them through their mental health journey.</p>
            <div className={`flex flex-col justify-center items-center gap-8 lg:flex-row`}>
            <div className={`flex flex-row p-5 gap-5 lg:gap-20`}>
            <div className={`ml-5`}>
                <Image src={'/images/panda.svg'} alt="panda" width={150} height={150} className={`lg:w-56 lg:h-56`}/>
                <p className={`text-center`}>Panda</p>
             <p className={`text-center`}>Represents peace and friendship </p>
            </div>
            <div>
                <Image src={'/images/sloth.svg'} alt="panda" width={150} height={150} className={`lg:w-56 lg:h-56`} />
                <p className={`text-center`}>Sloth</p>
             <p className={`text-center`}>Represents relaxation and patience</p>
            </div>
            </div>
            <div className={`flex flex-row p-5 gap-5 lg:gap-20`}>
            <div className={`ml-5`}>
                <Image src={'/images/frog.svg'} alt="panda" width={150} height={150} className={`lg:w-56 lg:h-56`}/>
                <p className={`text-center`}>Frog</p>
             <p className={`text-center`}>Represents kindness and family</p>
            </div>
            <div>
                <Image src={'/images/otter.svg'} alt="panda" width={150} height={150} className={`lg:w-56 lg:h-56`}/>
                <p className={`text-center`}>Otter</p>
             <p className={`text-center`}>Represents wisdom and good luck</p>
            </div>
            </div>
            </div>
        </div>
    )
}