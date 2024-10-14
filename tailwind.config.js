import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `
        radial-gradient(circle at 0% 10%, rgba(255, 183, 0, 0.4), transparent 20%),
        radial-gradient(circle at 10% 0%, rgba(255, 0, 110, 0.3), transparent 20%),
        radial-gradient(circle at 80% 0%, rgba(131, 56, 236, 0.3), transparent 40%)
        `,
        "hero-gradient": `
        radial-gradient(circle at 70% 50%, rgba(255, 0, 110, 0.4), transparent 40%)`,
      },
    },
  },
  plugins: [daisyui],
};
