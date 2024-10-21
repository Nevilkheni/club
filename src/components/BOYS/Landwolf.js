import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Landwolf = () => {
  return (
    <>
      <div className='bg-black h-screen '>
        <Header />



        <div className="px-5 max-w-[1300px]  flex w-full  items-center justify-between gap-20 bg-gray-950   md:flex md:flex-col-reverse md:mt-20 md:gap-0 xs:mt-16  ">
          <div className="w-1/2 text-white text-left md:text-center md:w-full">
            <h1 className="text-[65px] font-bold md:text-3xl">LANDWOLF</h1>
            <p className="text-[20px] font-bold mt-6 leading-relaxed md:text-lg">
              In the whimsical world of "Boy's Club," $WOLF stands as $PEPE's best friend. Through their shared antics and laughs, their friendship blossoms, painting a picture of camaraderie amidst delightful absurdity. Together, $WOLF and $PEPE navigate their unique, humorous journey, embodying the spirit of Matt Furie's imaginative creation.

            </p>
            <p className="text-[20px] font-bold mt-6 leading-relaxed md:text-lg">
              Official Landwolf on Pulsechain
            </p>

          </div>
          <div className="w-1/2 flex justify-center">
            <img src="img/orenge.png" alt="Pepe 3D" className="h-auto w-auto mt-32 md:mt-0" />
          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Landwolf
