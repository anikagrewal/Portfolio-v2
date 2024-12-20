import { useState } from 'react';
import Image from 'next/image';

const tabs = [
    { name: 'Product Design', key: 'product'},
    { name: 'Logo Branding', key: 'logo'},
    { name: 'Vector Graphics', key: 'vector'},
    { name: 'Raster Graphics', key: 'raster'},
    { name: 'Artistic Approaches', key: 'artistic'},
];

export default function TabBar() {
    const [activeTab, setActiveTab] = useState('product');

    const renderContent = () => {
        switch (activeTab) {
            case 'product':
            return <div>Content for Product Design</div>;
            case 'logo':
                return <div className={`flex flex-col justify-center w-full`}>
                    <div className={`flex flex-col`}>
                    <Image src={'/images/mmlogo.svg'} alt="Moose Motors Logo" width={400} height={700} />
                    <p className={`flex justify-center items-center lg:text-lbase pt-8`}>Moose Motors Logo Branding ~ Adobe Illustrator</p>
                    </div></div>;
            case 'vector':
                return <div className={`flex flex-col justify-center w-full`}>
                    <div className={`flex flex-col`}>
                    <Image src={'/images/radioport.png'} alt="rihanna poster" width={400} height={700} />
                    <p className={`flex justify-center items-center lg:text-lbase pt-8`}>Radio Drawing ~ Adobe Illustrator</p>
                    </div></div>;
            case 'raster':
                 return <div className={`flex flex-col justify-center w-full gap-20`}>
                    <div className={`flex flex-col`}>
                    <Image src={'/images/rihannaport.png'} alt="rihanna poster" width={400} height={700}/>
                    <div className={`flex flex-col justify-center`}>
                    <p className={`flex items-center justify-center lg:text-lbase text-darkGreen pt-4`}>Rihanna Poster</p>
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
                return <div>Content for Artistic Approaches</div>;  
                
            default:
                return null;
        }
    };

    return (
        <div className={`min-h-screen flex flex-col`}>
            <div className={`sticky`}>
                <div className={`flex justify-center`}>
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