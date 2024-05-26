import Image from "next/image"

export default function Logo() {
    return(
        <div className={`flex flex-col justify-center items-center mt-8`}>
            <div className={`flex flex-col gap-10 lg:flex-row lg:gap-14`}>
            <div className={`flex flex-col justify-center items-center w-80 h-64 bg-colFive rounded-lg shadow-xl lg:w-textW lg:h-80`}>
                <Image src={'/images/oldLogo1.svg'} alt="old logo" width={225} height={225} className={`lg:w-96 h-96`}/>
                <p className={`text-center font-bold mt-5 lg:text-lbase`}>First Iteration of Logo</p>
            <p className={`text-center p-1 mb-2 lg:text-lbase`}>This logo was meant to reflect the inward feelings and emotions of individual's when journaling.</p>
            </div>
            <div className={`flex flex-col justify-center items-center w-80 h-64 bg-colFive rounded-lg shadow-xl lg:w-textW lg:h-80`}>
                <Image src={'/images/oldLogo2.svg'} alt="old logo" width={225} height={225}  className={`lg:w-96 h-96`} />
                <p className={`text-center font-bold mt-5 lg:text-lbase`}>Second Iteration of Logo</p>
            <p className={`text-center p-1 mb-2 lg:text-lbase`}>This logo took in the new color scheme and typography change.</p>
            </div>
            </div>
            <div className={`flex flex-col justify-center items-center w-80 h-64 bg-colFive rounded-lg shadow-xl mt-10 lg:w-textW lg:h-80`}>
                <Image src={'/images/newLogo.svg'} alt="old logo" width={225} height={225} className={`lg:w-96 h-96`} />
                <p className={`text-center font-bold mt-5 lg:text-lbase`}>Final Design of Logo</p>
            <p className={`text-center p-1 mb-2 lg:text-lbase`}>This redesign incorporated the new color scheme as well as took a positive and uplifiting tone.</p>
            </div>
        </div>
    )
}