/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}", 
  "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'purple': '#392c42',
        'blue': '#0058ff',
        'yellow' : '#fccf6d',
        'pamaskomu-blue' : '#b0d1e4',
        'gray' : '#767676',
      },
      height: {
        '550': '550px',
        '350': '350px',
      },
      backgroundSize: {
        '550': '550px',
        '350': '350px',
        '700': '700px',
        '250': '250px',
      },
      fontFamily: {
        'futura': ['futura', 'bold'],
      },
      backgroundImage: {
        'logoBlack': "url('/src/images/logo.png')",
        'logoWhite': "url('/src/images/logo_white.png')",
        'emailBlack': "url('/src/images/email.png')",
        'emailWhite': "url('/src/images/email_white.png')",
        'phoneBlack': "url('/src/images/phone-call.png')",
        'phoneWhite': "url('/src/images/phone-call_white.png')",
        'hero2': "url('/src/images/statue2.png')",
      },
    },
  },
  plugins: [],
}
