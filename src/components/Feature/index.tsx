import Button from "../Button"
import Image from "next/image"

export default function Feature() {
    return(
        <div className={`flex flex-col gap-10 lg:flex-row lg:gap-20`}>
        <div className={`flex w-80 h-72 rounded-lg border-4 border-darkGreen shadow-xl shadow-darkGreen flex-col lg:w-96 lg:h-96`}>
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
        <div className={`flex w-80 h-80 rounded-lg border-4 border-darkGreen shadow-xl shadow-darkGreen flex-col lg:w-96 lg:h-96`}>
            <div className={`flex justify-center items-center`}>
                <Image src={'/images/rescueCover.png'} alt="rescueradar" width={600} height={70}/>
            </div>
            <div className={`flex justify-center mt-5`}>
            <Button
            text="Rescue Radar"
            link='/rescue'
            
          />
            </div>
        </div>
        </div>
   
        
    )
}