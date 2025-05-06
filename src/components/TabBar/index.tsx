'use client';
import { useState } from 'react';
import ProjectCard from '../ProjectCard/projectCard';

type TabKey = 'artistic' | 'logo' | 'product' | 'graphics';

const tabs: {name: string; key: TabKey }[] = [
    {name: 'Artistic Approaches', key: 'artistic'},
    {name: 'Logo Branding', key: 'logo'},
    {name: 'Product Design', key: 'product'},
    {name: 'Graphics', key: 'graphics'},
];

const projectData: Record<TabKey, { imageSrc: string; alt: string; name: string; href: string }[]> = {
    artistic: [
      {
        imageSrc: '/images/vtcard.png',
        alt: 'Vancouver Tempest Logo',
        name: 'Vancouver PWHL Branding Concepts',
        href: '/vantemps',
      },
    ],
    logo: [
      {
        imageSrc: '/images/mmlogo.svg',
        alt: 'Moose Motors Logo',
        name: 'Moose Motors',
        href: '/moosemotors',
      },
      {
        imageSrc: '/images/bwlogo.svg',
        alt: 'BudgyWise Logo',
        name: 'BudgyWise',
        href: '/budgywise',
      },
    ],
    product: [
      {
        imageSrc: '/images/matcha.png',
        alt: 'Milky Zen Matcha Can',
        name: 'Milky Zen Matcha Can',
        href: '/matcha',
      },
    ],
    graphics: [
      {
        imageSrc: '/images/rihannaport.png',
        alt: 'Rihanna Poster',
        name: 'Concert Promotional Graphic',
        href: '/concert',
      },
      {
        imageSrc: '/images/paintingport.png',
        alt: 'Woman Portrait',
        name: 'Paint Brush Tool Portrait',
        href: '/portrait',
      },
      {
        imageSrc: '/images/radioport.png',
        alt: 'Radio Drawing',
        name: 'Vector Radio Drawing',
        href: '/radio',
      },
    ],
  };
  
  export default function TabBar() {
    const [activeTab, setActiveTab] = useState<TabKey>('artistic');
  
    return (
      <div className="min-h-screen flex flex-col">
        {/* Tab Header */}
        <div className="sticky top-0 z-10">
          <div className="flex flex-wrap justify-center gap-4 p-4 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`px-6 py-2 text-base sm:text-lg transition-colors ${
                  activeTab === tab.key
                    ? 'border-b-4 border-newGreen text-darkGreen'
                    : 'text-black hover:text-newGreen'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
  
        {/* Tab Content */}
        <div className="pt-12 px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData[activeTab].map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </div>
    );
  }



































/* const tabs = [
    { name: 'Artistic Approaches', key: 'artistic'},
    { name: 'Logo Branding', key: 'logo'},
    { name: 'Product Design', key: 'product'},
    { name: 'Raster Graphics', key: 'raster'},
    { name: 'Vector Graphics', key: 'vector'},
];

export default function TabBar() {
    const [activeTab, setActiveTab] = useState('artistic');

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
                return <div className={`flex flex-col justify-center w-full gap-20`}>
                <div className={`flex flex-col`}>
                <Image src={'/images/milkyzen.png'} alt="Matcha Can" width={400} height={700} />
                <p className={`flex items-center justify-center lg:text-lbase text-darkGreen pt-4`}>Milky Zen Matcha Can Mockup</p>
                <p className={`flex justify-center`}>Adobe Illustrator & Photoshop</p>
                </div>
                
                </div>;
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
                return <div className={`flex flex-col justify-center w-full gap-20`}>
                <div className={`flex flex-col`}>
                <Image src={'/images/temps.svg'} alt="vancouver tempest logo" width={800} height={900} />
                <p className={`flex items-center justify-center lg:text-lbase text-darkGreen pt-4`}>Logo Variation Ideas ~ Vancouver Tempest PWHL</p>
                <p className={`flex justify-center`}>Adobe Illustrator</p>
                </div></div>;
                
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
    */ 