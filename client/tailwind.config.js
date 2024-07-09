/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(0deg, rgba(237,229,225,1) 0%, rgba(215,238,251,1) 10%, rgba(220,238,251,1) 35%, rgba(233,236,233,1) 93%)',
      }),
    },
  },
  plugins: [],
}

