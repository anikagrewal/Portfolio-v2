import Button from "../Button"
import Image from "next/image"

export default function Develop() {
    return(
        <div> 
            <p className={`text-h2 mb-14 mt-5`}>Development Projects</p>
        <div className={`flex flex-col gap-10 lg:flex-row lg:gap-20`}>
           
        <div className={`flex w-80 h-80 rounded-lg border-4 border-newGreen shadow-xl shadow-darkGreen flex-col lg:w-96 lg:h-96`}>
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
        <div className={`flex w-80 h-96 rounded-lg border-4 border-newGreen shadow-xl shadow-darkGreen flex-col lg:w-96 lg:h-96`}>
            <div className={`flex justify-center items-center mt-10`}>
                <Image src={'/images/weather.svg'} alt="weather vial" width={200} height={400}/>
            </div>
            <div className={`flex justify-center mt-5`}>
            <Button
            text="WeatherVial"
            link='/weathervial'
            
          />
            </div>
        </div>
        <div className={`flex w-80 h-80 rounded-lg border-4 border-newGreen shadow-xl shadow-darkGreen flex-col lg:w-96 lg:h-96`}>
            <div className={`flex justify-center items-center mt-5`}>
            <Image src={'/images/rescueCover.png'} alt="rescue radar" width={1000} height={1000}/>
            </div>
            <div className={`flex justify-center`}>
            <Button
            text="Rescue Radar"
            link='/rescue'
            
          />
            </div>
        </div>
      
        </div>
        </div>
        
    )
}