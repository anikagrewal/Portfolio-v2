import Button from "../Button"
import Image from "next/image"

export default function Feature() {
    return(
        <div className={`flex flex-col gap-10 lg:flex-row lg:gap-20`}>
        <div className={`flex w-80 h-72 rounded-lg border-4 border-yellow flex-col lg:w-96 lg:h-96`}>
            <div className={`flex justify-center items-center mt-10 lg:mt-14`}>
                <Image src={'/images/innerFeat.svg'} alt="innersight" width={600} height={590} />
            </div>
            <div className={`flex justify-center mt-10 lg:mt-16`}>
            <Button
            text="InnerSight"
            link='/casestudy'
            
          />
            </div>
        </div>
        <div className={`flex w-80 h-80 rounded-lg border-4 border-yellow flex-col lg:w-96 lg:h-96`}>
            <div className={`flex justify-center items-center mt-10`}>
                <Image src={'/images/pagepall.png'} alt="innersight" width={600} height={590}/>
            </div>
            <div className={`flex justify-center mt-10`}>
            <Button
            text="PagePal"
            link='/pagepal'
            
          />
            </div>
        </div>
        </div>
   
        
    )
}