import Link from "next/link";

const YellowBtn = ({ text, link }: ILargeButton) => {
    return (
        <Link href={link}>
            <button data-testid="large-button" className={`cursor-pointer rounded-full border-2 w-32 h-10 border-yellow text-base text-yellow shadow-lg lg:w-64 lg:h-16 lg:text-h2`}>
                {text}
            </button>
        </Link>
    );
}

export default YellowBtn;