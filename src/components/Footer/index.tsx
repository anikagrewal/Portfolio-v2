import PdfLink from "../PDF"
import EmailLink from "../Email"
import YellowBtn from "../YellowBtn";

export default function Footer() {
    const userEmail = 'a.grewal.work@gmail.com';
 const pdfUrl = '/resume.pdf';
    return(
        <div id="contact">

            <div className={`flex flex-row justify-center items-center lg:gap-56 bg-lightBlue w-screen p-4 mt-5 lg:p-10`}>
            <hr></hr>
                <div>
                <h2 className={`text-h4 font-bold lg:text-h2 `}>Contact Me</h2>
                </div>
                <div className={`flex flex-col gap-2 lg:mr-64`}>
                    <div className={`flex flex-row gap-3 justify-center items-center`}>
               
                <YellowBtn
            text="LinkedIn"
            link="https://www.linkedin.com/in/anika-grewal-516712262"
            />
             <YellowBtn
            text="Github"
            link="https://github.com/anikagrewal"
            />
              
              
                </div>
                <div className={`flex flex-row gap-3 justify-center items-center`}>
              
                <EmailLink email={userEmail} />
           <PdfLink pdfUrl={pdfUrl}/>
           </div>
         
                </div>
               
            </div>

        </div>
    )
}