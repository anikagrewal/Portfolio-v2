export default function Colours() {
    return(
        <div>
             <p className={`pl-5 lg:pl-32 mb-8 mt-4 lg:w-vidW lg:text-lbase`}>Monochromatic Purple ~ Emphasize the feeling of calmness. The purples are cooler with a little bit of contrast for one or two shades so that the loud colours aren't as evoked for the user and potentially stress them out when using the application.</p>
        <div className={`flex flex-col justify-center items-center gap-8 lg:flex-row lg:p-10`}>
            <div className={`flex flex-row gap-8`}>
                <div className={`w-32 h-32 rounded-lg bg-colOne lg:w-40 lg:h-40`}>
                    <p className={`flex justify-center items-center text-white lg:text-lbase`}>#525585</p>
                </div>
                <div className={`w-32 h-32 rounded-lg bg-colTwo lg:w-40 lg:h-40`}>
                <p className={`flex justify-center items-center text-white lg:text-lbase`}>#6164C3</p>
                </div>
            </div>
            <div className={`flex flex-row gap-8`}>
                <div className={`w-32 h-32 rounded-lg bg-colThree lg:w-40 lg:h-40`}>
                    <p className={`flex justify-center items-center lg:text-lbase`}>#88898C</p>
                </div>
                <div className={`w-32 h-32 rounded-lg bg-colFour lg:w-40 lg:h-40`}>
                <p className={`flex justify-center items-center lg:text-lbase`}>#C5C7F7</p>
                </div>
            </div>
            <div className={`flex flex-row gap-8`}>
                <div className={`w-32 h-32 rounded-lg bg-colFive lg:w-40 lg:h-40`}>
                    <p className={`flex justify-center items-center lg:text-lbase`}>#D5D7FF</p>
                </div>
                <div className={`w-32 h-32 rounded-lg bg-colSix lg:w-40 lg:h-40`}>
                <p className={`flex justify-center items-center lg:text-lbase`}>#F2F2FD</p>
                </div>
            </div>
        </div>
        </div>
    )
}