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
        radial-gradient(circle at 30% 70%, rgba(255, 0, 110, 0.2), transparent 40%)`,
        "dashboard-gradient": `
        radial-gradient(circle at 20% 90%, rgba(205, 180, 219, 0.8), transparent 40%),
        radial-gradient(circle at 90% 10%, rgba(131, 56, 236, 0.3), transparent 40%),
        radial-gradient(circle at 50% 20%, rgba(255, 175, 204, 0.5), transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(189, 224, 254, 0.9), transparent 40%),
        radial-gradient(circle at 10% 30%, rgba(162, 210, 255, 0.6), transparent 40%)`,
      },
    },
  },
  plugins: [daisyui],
};
