import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#307959",
      },
      backgroundImage: {
        login: "url('/assets/loginBG.png')",
        signup: "url('/assets/signin.svg')",
        logo: "url('/assets/logo-no-background.png')",
        back: "url('/assets/back.png')",
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1300px',
        '2xl': '1536px',
      },
    }
  },
  plugins: [require("daisyui")],
};
export default config;
