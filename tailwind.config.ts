import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lora': ['lora', 'sans-serif'],
      },
     colors: {
      lightBlue: '#DDECF9',
      darkBlue: '#4E738A',
      yellow: '#ffdd93',
      colOne: '#525585',
      colTwo: '#6164C3',
      colThree: '#88898C',
      colFour: '#C5C7F7',
      colFive: '#D5D7FF',
      colSix: '#F2F2FD'
     },
     fontSize: {
      base: '16px',
      'h1': '36px',
      'h2':'28px',
        'h4':'20px',
        'th1': '58px',
        'tbase': '24px',
        'wh1': '48px',
        'wh2': '32px',
     },
     height: {
      header: '40rem',
      imgH: '70rem'
     },
     width: {
      imgW: '40rem',
      textW: '30rem'
     }
    },
  },
  plugins: [],
};
export default config;
