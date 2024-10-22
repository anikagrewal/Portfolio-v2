export default function Research() {
    return(
        <div className={`flex flex-col justify-center items-center`}>
       
        <div className={`flex flex-col lg:flex-row lg:gap-32 lg:justify-center lg:items-start`}>
          <div className={`flex flex-col justify-center items-center gap-5 mb-8`}>
            <h3 className={`text-h4 lg:text-tbase`}>Pyschological Barriers</h3>
            <div className="flex items-center gap-3">
              <hr className={`flex-grow border-newGreen border-2 h-52 lg:h-60`}></hr>
              <ul>
                <li className={`lg:text-lbase`}>Motivation & consistency</li>
                <li className={`lg:text-lbase`}>Perceived usefulness</li>
                <li className={`lg:text-lbase`}>Repetition</li>
                <li className={`lg:text-lbase`}>Emotional challenges</li>
                <li className={`lg:text-lbase`}>Writing challenges</li>
                <li className={`lg:text-lbase`}>Time constraints</li>
                <li className={`lg:text-lbase`}>Self-criticism & hesitation</li>
                <li className={`lg:text-lbase`}>Lack of direction</li>
              </ul>
            </div>
          </div>
          <div className={`flex flex-col justify-center items-center gap-5 mb-8`}>
            <h3 className={`text-h4 lg:text-tbase`}>Technical/Functional Issues</h3>
            <div className="flex items-center gap-3">
              <hr className={`flex-grow border-newGreen border-2 h-28 lg:h-32`}></hr>
              <ul>
                <li className={`lg:text-lbase`}>Lack of customization</li>
                <li className={`lg:text-lbase`}>Simplistic features</li>
                <li className={`lg:text-lbase`}>Receiving same generated responses</li>
                <li className={`lg:text-lbase`}>Aesthetic concerns</li>
              </ul>
            </div>
          </div>
          <div className={`flex flex-col justify-center items-center gap-5 mb-8`}>
            <h3 className={`text-h4 lg:text-tbase`}>Privacy Concerns</h3>
            <div className="flex items-center gap-3">
              <hr className={`flex-grow border-newGreen border-2 h-10`}></hr>
              <ul>
                <li className={`lg:text-lbase`}>Data sharing through AI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}