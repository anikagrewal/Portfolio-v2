import { useState } from 'react';
import Image from 'next/image';

const tabs = [
    { name: 'Logo Branding', key: 'logo'},
    { name: 'Product Design', key: 'product'},
    { name: 'Vector Graphics', key: 'vector'},
    { name: 'Raster Graphics', key: 'raster'},
    { name: 'Artistic Approaches', key: 'artistic'},
];

export default function TabBar() {
    const [activeTab, setActiveTab] = useState('logo');

    const renderContent = () => {
        switch (activeTab) {
            case 'logo':
                return <div className={`flex flex-col justify-center w-full gap-20`}>
                    <div className={`flex flex-col`}>
                    <Image src={'/images/mmlogo.svg'} alt="Moose Motors Logo" width={400} height={700} />
                    <p className={`flex items-center justify-center lg:text-lbase text-darkGreen pt-4`}>Moose Motors Logo</p>
                    <p className={`flex justify-center`}>Adobe Illustrator</p>
                    </div>
                    <div className={`flex flex-col`}>
                    <Image src={'/images/bwlogo.svg'} alt="BudgyWise Logo" width={300} height={600} />
                    <p className={`flex items-center justify-center lg:text-lbase text-darkGreen pt-4`}>BudgyWise Logo</p>
                    <p className={`flex justify-center`}>Adobe Illustrator</p>
                    </div>
                    
                    </div>;
                    
            case 'product':
            return <div>In the process of creating...</div>;
            case 'vector':
                return <div className={`flex flex-col justify-center w-full gap-20`}>
                    <div className={`flex flex-col`}>
                    <Image src={'/images/radioport.png'} alt="rihanna poster" width={400} height={700} />
                    <p className={`flex items-center justify-center lg:text-lbase text-darkGreen pt-4`}>Radio Drawing</p>
                    <p className={`flex justify-center`}>Adobe Illustrator</p>
                    </div></div>;
            case 'raster':
                 return <div className={`flex flex-col justify-center w-full gap-20`}>
                    <div className={`flex flex-col`}>
                    <Image src={'/images/rihannaport.png'} alt="rihanna poster" width={400} height={700}/>
                    <div className={`flex flex-col justify-center`}>
                    <p className={`flex items-center justify-center lg:text-lbase text-darkGreen pt-4`}>Concert Promotional Graphic</p>
                    <p className={`flex justify-center`}>November 2023</p>
                    <p className={`flex justify-center`}>Adobe photoshop</p>
                    </div>
                   
                    </div>

                    <div className={`flex flex-col`}>
                    <Image src={'/images/paintingport.png'} alt="woman portrait" width={400} height={700} />
                    <div className={`flex flex-col`}>
                    <p className={`flex items-center justify-center lg:text-lbase text-darkGreen pt-4`}>Woman Portrait</p>
                    <p className={`flex justify-center`}>October 2023</p>
                    <p className={`flex justify-center`}>Adobe Photoshop using the Paint Brush Tool</p>
                    </div>
                    </div></div>;
            case 'artistic':
                return <div>In the process of creating...</div>;  
                
            default:
                return null;
        }
    };

    return (
        <div className={`min-h-screen flex flex-col`}>
            <div className={`sticky`}>
                <div className={`flex flex-wrap justify-center`}>
                    {tabs.map((tab) => (
                        <button 
                        key={tab.key}
                        className={`px-12 text-lg ${
                            activeTab === tab.key
                            ? 'border-b-4 border-newGreen text-darkGreen'
                            : 'text-black'
                        }`}
                        onClick={() => setActiveTab(tab.key)}>
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className={`pt-20 px-4 flex justify-center items-center`}>
                <div className={``}>{renderContent()}</div>
            </div>
           
        </div>
    )
}