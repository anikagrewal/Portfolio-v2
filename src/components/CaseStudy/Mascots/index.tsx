import Image from "next/image"

export default function Mascots() {
    return(
        <div>
            <p className={`pl-5 lg:pl-32 mb-8 mt-4 lg:w-vidW lg:text-lbase`}>The users have the option to customize their mascot so that they can feel that there is a personalized companion that is following and guiding them through their mental health journey.</p>
            <div className={`flex flex-col justify-center items-center lg:flex-row`}>
            <div className={`flex flex-row p-5 gap-5 lg:gap-20`}>
            <div className={`ml-5`}>
                <Image src={'/images/panda.svg'} alt="panda" width={150} height={150} className={`lg:w-56 lg:h-56`}/>
                <p className={`text-center lg:text-lbase`}>Panda</p>
             <p className={`text-center lg:text-lbase`}>Represents peace and friendship </p>
            </div>
            <div>
                <Image src={'/images/sloth.svg'} alt="panda" width={150} height={150} className={`lg:w-56 lg:h-56`} />
                <p className={`text-center lg:text-lbase`}>Sloth</p>
             <p className={`text-center lg:text-lbase`}>Represents relaxation and patience</p>
            </div>
            </div>
            <div className={`flex flex-row p-5 gap-5 lg:gap-20`}>
            <div className={`ml-5`}>
                <Image src={'/images/frog.svg'} alt="panda" width={150} height={150} className={`lg:w-56 lg:h-56`}/>
                <p className={`text-center lg:text-lbase`}>Frog</p>
             <p className={`text-center lg:text-lbase`}>Represents kindness and family</p>
            </div>
            <div>
                <Image src={'/images/otter.svg'} alt="panda" width={150} height={150} className={`lg:w-56 lg:h-56`}/>
                <p className={`text-center lg:text-lbase`}>Otter</p>
             <p className={`text-center lg:text-lbase`}>Represents wisdom and good luck</p>
            </div>
            </div>
            </div>
        </div>
    )
}