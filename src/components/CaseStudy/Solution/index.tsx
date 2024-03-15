import Image from "next/image"


export default function Solution() {
    return(
        <div className={`flex flex-col justify-center items-center lg:flex-row lg:items-start`}>
            <div>
             <p className={`p-10 lg:w-siteW`}>InnerSight solves the problem by utilizing AI to analyize and generate the emotional undertone of all entries. Then by recording the data, InnerSight generates a visually pleasing pie chart for individuals to be able to see their overall conditions of their emotions at a quick glance. Lastly, InnerSight then provides the next step that individuals can take through personalized recommendations. </p>
             </div>
             <div>
            <video width={400} height={200} className={`lg:w-vidW lg:h-vidH`} controls>
<source src={'/images/innersightTechDemo.mp4'} type="video/mp4" />
</video>
</div>
        </div>
    )
}


