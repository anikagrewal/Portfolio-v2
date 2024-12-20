import Link from "next/link";

const Button = ({ text, link }: ILargeButton) => {
    return (
        <Link href={link}>
            <button data-testid="large-button" className={`rounded-full border-2 w-32 h-10 border-newGreen hover:bg-newGreen text-base bg-white shadow-lg lg:w-64 lg:h-16 lg:text-h2`}>
                {text}
            </button>
        </Link>
    );
}

export default Button;