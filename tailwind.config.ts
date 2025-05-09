import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', 
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
      colSix: '#F2F2FD',
      newBlue: "#A5CBD8",
      newPurple: "#B4A2CC",
      newGreen: "#72926b",
      beige: "#F0EEE9",
      darkBeige: "#d1cbbc",
      darkGreen: "#556451",
      textGreen: "#50664b",
      whlBlue: '#0F4777',
     whlCream: '#EEE9D8',
      background: {
        DEFAULT: '#ffffff',
        dark: '#000000',
      },
      text: {
        DEFAULT: '#000000',
        dark: '#ffffff',
      },
     },
     fontSize: {
      base: '16px',
      'lbase': '18px',
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
      imgH: '70rem',
      siteH: '50rem',
      vidH: '30rem',
      pageH: '30rem',
      headerH: "50rem",
      phH: '32rem',
      whl: '20rem',

     },
     width: {
      imgW: '40rem',
      textW: '25rem',
      siteW: '65rem',
      pW: '90rem',
      vidW: '45rem',
      pageW: '55rem',
      phW: '110rem'
     },
     padding: {
      headP: '80rem'
     }
    },
  },
  plugins: [],
};
export default config;
