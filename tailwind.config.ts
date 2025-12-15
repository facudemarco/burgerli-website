import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/layout.tsx",
    "./app/page.tsx",

  ],
  
  theme: {
  	extend: {
  		fontFamily: {
  			boomster: ['var(--font-boomster)']
  		},
  		colors: {
  			orangeMedium: '#F36C17',
  			orangeLight: '#F68E41',
  			creamBg: '#F7C8AA',
  			whiteBg: '#F9F9F9',
  			lightBlueBg: '#BDEDEB',
			opinionBg: '#11CABF42'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
};
export default config;