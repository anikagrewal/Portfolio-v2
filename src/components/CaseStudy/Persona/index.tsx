import Image from "next/image";

export default function Persona() {
    return (
        <div className={`mt-10`}>
            <div className="hidden lg:flex justify-center items-center">
                <Image src="/images/lgpersona.png" alt="persona" width={1000} height={800} />
            </div>
            <div className="lg:hidden">
                {/* This image will be hidden on large screens */}
                <div className="flex justify-center items-center sm:hidden md:hidden">
                    <Image src="/images/smpersona.png" alt="persona" width={300} height={500} />
                </div>
                {/* This image will be shown only on large screens */}
                <div className="hidden sm:flex md:flex md:flex-center md:justify-center">
                    <Image src="/images/smpersona.png" alt="persona" width={300} height={500} />
                </div>
            </div>
        </div>
    );
}