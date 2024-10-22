export default function Sapc() {
    return(
        <div className={`flex flex-col justify-center items-center lg:flex-row lg:px-24 `}>
          <div className={`flex flex-col justify-center items-start mb-8 lg:flex-row lg:gap-6`}>
            <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
              <div>
              <hr className={`lg:h-80 border-newGreen border-2 md:h-28 h-64`}></hr>
              </div>
              <div>
              <ul>
              <li className={`lg:text-lbase`}>Sentiment Analysis is an AI-based technology that can determine the emotional undertone of a corpus of text. 
        Sentiment Analysis inspects the given text and identifies the prevailing emotional opinion within the text, 
        especially to determine a writer's attitude as positive, negative, or neutral. Also called "opinion mining", 
        it identifies and detects subjective information from the input text.</li>
              
              </ul>
              </div>
            </div>
            <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
              <div>
              <hr className={`lg:h-36 border-newGreen border-2 md:h-20 h-32`}></hr>
              </div>
              <div>
              <ul>
              
              <li className={`lg:text-lbase`}>EdenAI services was used for sentiment analysis. EdenAI does not store data at all, and any data 
        (e.g., journal entries) are transmitted directly back to innersight.</li>
             
              </ul>
              </div>
            </div>
            <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
              <div>
              <hr className={`lg:h-24 border-newGreen border-2 md:h-16 h-20`}></hr>
              </div>
              <div>
              <ul>
              
              
              <li className={`lg:text-lbase`}>The data is managed using Google Firebase services, which stores the data in Belgium.</li>
             
              </ul>
              </div>
            </div>
          </div>
         
        </div>
      

    )
}