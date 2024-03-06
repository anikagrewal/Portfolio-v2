export default function Sapc() {
    return(
        <div className={`flex flex-col justify-center items-center lg:flex-row`}>
          <div className={`flex flex-col justify-center items-center mb-8 lg:flex-row lg:gap-10`}>
            <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
              <div>
              <hr className={`h-56 border-yellow border-2`}></hr>
              </div>
              <div>
              <ul>
              <li>Sentiment Analysis is an AI-based technology that can determine the emotional undertone of a corpus of text. 
        Sentiment Analysis inspects the given text and identifies the prevailing emotional opinion within the text, 
        especially to determine a writer's attitude as positive, negative, or neutral. Also called "opinion mining", 
        it identifies and detects subjective information from the input text.</li>
              
              </ul>
              </div>
            </div>
            <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
              <div>
              <hr className={`h-32 border-yellow border-2`}></hr>
              </div>
              <div>
              <ul>
              
              <li>EdenAI services was used for sentiment analysis. EdenAI does not store data at all, and any data 
        (e.g., journal entries) are transmitted directly back to innersight.</li>
             
              </ul>
              </div>
            </div>
            <div className={`flex flex-row gap-3 justify-center items-center p-6 lg:w-textW`}>
              <div>
              <hr className={`h-20 border-yellow border-2`}></hr>
              </div>
              <div>
              <ul>
              
              
              <li>The data is managed using Google Firebase services, which stores the data in Belgium.</li>
             
              </ul>
              </div>
            </div>
          </div>
         
        </div>
      

    )
}