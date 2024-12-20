import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css'


export default function NavBar() {
    const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };


    
    return(
        <div className={`top-0 z-50 bg-blue`}>
            <div data-testid="navbar" className={`flex flex-row h-16 w-screen bg-beige items-center justify-end pr-5 block md:hidden`}>
                <div className={`cursor-pointer flex justify-center`} onClick={toggleOverlay}>
                    <Image
                        src="/images/menu.svg"
                        alt="Menu"
                        width={50}
                        height={20}
                    />
                </div>
                {
                    isOverlayOpen && (
                        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-beige z-50`}>
                            <div className={`bg-beige p-8 rounded-lg`}>
                                <button className={`absolute top-2 right-2`} onClick={toggleOverlay}>
                                    <p>X</p>
                                </button>
                                <div className={`flex flex-col gap-4 justify-center items-center`}>
                                <Link href={'/'} > <Image src={'/images/anika_logo.svg'} alt='logo' width={90} height={98} /></Link>
                                    <Link href="/casestudy" className={`text-h2 text-textGreen`}>Case Study</Link>
                                    <Link href="/development" className={`text-h2 text-textGreen`}>Development</Link>
                                    <Link href="/design" className={`text-h2 text-textGreen`}>Design</Link>
                                    <Link href="#contact" className={`text-h2 text-textGreen`}>Contact</Link>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div data-testid="header" className={`flex flex-row h-10 w-screen bg-beige items-center justify-between pl-14 pr-20 hidden md:flex lg:h-40 lg:justify-between lg:text=h1` }>
              
               
                    <div>
                <Link href={'/'} > <Image src={'/images/anika_logo.svg'} alt='logo' width={90} height={98} /></Link>
                </div>
                <div className={`flex flex-row gap-4`}>
                <Link href="casestudy" className={`text-h2 text-textGreen`}>Case Study</Link>
                                    <Link href="/development" className={`text-h2 text-darkGreen`}>Development</Link>
                                    <Link href="/design" className={`text-h2 text-darkGreen`}>Design</Link>
                                    <Link href="#contact" className={`text-h2 text-darkGreen`}>Contact</Link>
                </div>
            </div>
        </div>
    )
}