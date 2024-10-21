import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Birddog = () => {
  return (
    <>
      <div className='bg-black h-full '>
        <Header />


        <div className="px-5 max-w-[1300px]  flex w-full h-full items-center justify-center  pt-28 gap-20 bg-gray-950  md:flex md:flex-col md:gap-0 md:pt-18 md:pt-20 ">
          <div className="w-1/2 flex justify-center">
            <img src="/img/pink.gif" alt="Pepe 3D" className="h-auto w-auto" />
          </div>
          <div className="w-1/2 text-white text-left md:text-center md:w-full">
            <h1 className="text-[65px] font-bold md:text-3xl">BIRD DOG</h1>
            <p className="text-[20px] font-bold mt-6 leading-relaxed md:text-lg">
              In the whimsical world of "Boy's Club," Pepe and Bird Dog share a unique bond that goes beyond friendship. Bird-Dog, the enthusiastic fifth member of Pepe's gang of roommates, injects a vibrant energy into the group, complementing Pepe's laid-back demeanor. Their camaraderie is marked by shared adventures, laughter, and a mutual understanding that adds an extra layer of charm to Matt Furie's imaginative creation. Together, Pepe and Bird-Dog embark on a humorous journey filled with delightful absurdity, embodying the spirit of friendship amidst the surreal and comedic landscape of their world.
            </p>
            <p className="text-[20px] font-bold mt-4 leading-relaxed md:text-lg">
              The Official Bird Dog on Pulsechain
            </p>
          </div>
        </div>
        <Footer />

      </div>
    </>
  )
}

<Header />
export default Birddog

