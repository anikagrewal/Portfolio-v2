import Image from "next/image"

export default function Coding() {
    return(
        <div className={`flex flex-col justify-center items-center gap-8 mt-10 lg:flex-row lg:items-start `}>
            <div className={`flex flex-col justify-center items-center gap-5`}>
            <Image src={'/images/ai.svg'} alt="ai-sentiment" width={300} height={500} />
            <p className={`pl-5 pr-5 text-center lg:pl-32 lg:pr-32`}>The ai sentiment analysis which plays a fundamental role  in separating the app from competitors, will pull out key words in order to display prominent feelings and emotions within that journal entry. This feature further assists with analyzing past journal entries.</p>
            </div>
            <div className={`flex flex-col justify-center items-center gap-5 lg:mr-40`}>
            <Image src={'/images/chart.svg'} alt="chart" width={300} height={500} />
            <p className={`pl-5 pr-5 text-center`}>The chart pulls the emotions that most commonly show up in the journal entries and displays it for a week, month, or yearly view.</p>
            </div>
            <div className={`flex flex-col justify-center items-center gap-5 lg:mr-40`}>
            <Image src={'/images/rec.svg'} alt="reccomendations" width={300} height={500} />
           <p className={`pl-5 pr-5 text-center `}>The recommendations are based off the sentiment analysis and the emotions and key words that were identified. It will then give a recommendation based on that.</p>
            </div>
        </div>
    )
}