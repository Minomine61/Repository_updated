import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return 
  <div className="className="container font-inter h-screen  relative w-full  bg-gradient-to-r from-[#f5edff]  via-lime-100 to-[#bbdcfa]  "">

  <Component {...pageProps} />
  </div>
}

export default MyApp
