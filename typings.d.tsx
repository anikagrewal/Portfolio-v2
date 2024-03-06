interface ILargeButton {
    text: string;
    link: string;
    onClick?: (e: any) => void;
    id?: string;
    value?: string;
    disabled?: boolean;
}

interface IEmail {
    email: string,
    event?: string,
}

interface IPdf {
    pdfUrl: string,
}