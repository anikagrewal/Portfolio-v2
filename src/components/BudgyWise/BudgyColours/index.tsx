export default function BudgyColours() {
    return(
        <div>
            <div className={`flex justify-center items-center`}>
             <p className={`pt-10 lg:w-pageW lg:text-lbase`}>Grounded Harmony ~ Moving away from high-stress financial reds, this palette uses earthy greens and serene blues to emphasize stability and growth. These nature-inspired tones are intentionally muted to transform financial management into an experience of calmness and trust, fostering a sophisticated environment for new beginnings.</p>
             </div>
        <div className={`flex flex-col justify-center items-center gap-8 lg:flex-row lg:p-10`}>
            <div className={`flex flex-row gap-8`}>
                <div className={`w-32 h-32 rounded-lg bg-bwGreen lg:w-40 lg:h-40`}>
                    <p className={`flex justify-center items-center text-white lg:text-lbase`}>#ABB36C</p>
                </div>
                <div className={`w-32 h-32 rounded-lg bg-bwBlue lg:w-40 lg:h-40`}>
                <p className={`flex justify-center items-center text-white lg:text-lbase`}>#7CBFD9</p>
                </div>
            </div>
            <div className={`flex flex-row gap-8`}>
                <div className={`w-32 h-32 rounded-lg bg-bwBeige lg:w-40 lg:h-40`}>
                    <p className={`flex justify-center items-center lg:text-lbase`}>#E7CD9C</p>
                </div>
            </div>
         
        </div>
        <div className={`flex flex-col justify-center items-center gap-8 lg:flex-row lg:p-10`}>
        <div className={`flex flex-row gap-8`}>
                <div className={`w-24 h-24 rounded-lg bg-bwLtGreen lg:w-32 lg:h-32`}>
                    <p className={`flex justify-center items-center lg:text-lbase`}>#BAC186</p>
                </div>
                <div className={`w-24 h-24 rounded-lg bg-bwDGreen lg:w-32 lg:h-32`}>
                <p className={`flex justify-center items-center text-white lg:text-lbase`}>#394A27</p>
                </div>
            </div>
            <div className={`flex flex-row gap-8`}>
                <div className={`w-24 h-24 rounded-lg bg-bwLtBlue lg:w-32 lg:h-32`}>
                    <p className={`flex justify-center items-center lg:text-lbase`}>#ABD7E5</p>
                </div>
                <div className={`w-24 h-24 rounded-lg bg-bwDBlue lg:w-32 lg:h-32`}>
                <p className={`flex justify-center items-center text-white lg:text-lbase`}>#20586F</p>
                </div>
            </div>
            <div className={`flex flex-row gap-8`}>
                <div className={`w-24 h-24 rounded-lg bg-bwDBeige lg:w-32 lg:h-32`}>
                    <p className={`flex justify-center items-center text-white lg:text-lbase`}>#C89656</p>
                </div>
                <div className={`w-24 h-24 rounded-lg bg-bwGrey lg:w-32 lg:h-32`}>
                <p className={`flex justify-center items-center text-white lg:text-lbase`}>3E3F42</p>
                </div>
            </div>
        </div>
        </div>
    )
}