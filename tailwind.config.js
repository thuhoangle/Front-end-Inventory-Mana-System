/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#DEDEDE',
        blue: '#1977F2',
        lightBlue: '#DAEAFF',
        graySearch: '#667085',
        yellow: '#E39840',
        red: '#DA3E33',
        green: '#10A760',
        background: '#ececec',

      }
    },

  },
  plugins: [
      require("daisyui"),
    require ("tailwindcss-radix")({
      variantPrefix: false,
    }),
    require('flowbite/plugin'),
  ]
}