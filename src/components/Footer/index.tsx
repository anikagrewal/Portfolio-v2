import PdfLink from "../PDF"
import EmailLink from "../Email"

export default function Footer() {
    const userEmail = 'agrewal117@my.bcit.ca';
 const pdfUrl = '/resume.pdf';
    return(
        <div id="contact">

            <div className={`flex flex-row justify-between justify-center items-center gap-5 bg-lightBlue w-screen p-4 mt-5 lg:p-10`}>
            <hr></hr>
                <div>
                <h2 className={`text-h2 font-bold`}>Contact Me</h2>
                </div>
                <div className={`flex flex-col gap-2 lg:flex-row lg:mr-64`}>
                    <div className={`flex flex-row gap-3 justify-center items-center`}>
                <a href="https://www.linkedin.com/in/anika-grewal-516712262">LinkedIn</a>
                <a href="https://github.com/anikagrewal">Github</a>
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