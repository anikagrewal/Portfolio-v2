import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    imageSrc: string;
    alt: string;
    name: string;
    href: string;
}

export default function ProjectCard({ imageSrc, alt, name, href }: ProjectCardProps) {
    return (
        <Link href={href} className="relative group rounded-lg border-2 border-darkGreen shadow-darkGreen overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
           <div className="relative aspect-square  w-full sm:w-[300px] lg:w-[400px] bg-beige overflow-hidden">
            <Image 
            src={imageSrc}
            alt={alt}
            fill
            className="w-full h-full object-contain bg-beige group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold text-center px-2">{name}</p>
            </div>
            </div>
        </Link>
    )
}