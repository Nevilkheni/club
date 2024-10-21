/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,png,jpg,}"],
  theme: {
    extend: {
      backgroundImage: {
        clubbg: "url('/public/img/bg1.png')",
        headlogo: "url('/public/img/boysclub.png')",
        clubg: "url('/public/img/bg2.png')",
        bennertwologo: "url('/public/img/club.png')",
        reghtlogo: "url('/public/img/rightcircle.png')"


      },
      screens: {
        xxl: { max: '1500px' },
        xl: { max: '1300px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' },
        xs: { max: '500px' },
        xxs: { max: '400px' },
        xxxs: { max: '376px' },
      },
    },
  },
  plugins: [],
}