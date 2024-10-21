import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Brett = () => {
  return (
    <>
      <div className='bg-black h-screen '>
        <Header />


        <div className="px-5 max-w-[1300px] m-auto flex w-full h-full items-center justify-center gap-20  bg-black  md:flex md:flex-col-reverse md:gap-0  ">
          <div className="w-1/2 text-white text-left md:text-center md:w-full">
            <h1 className="text-[65px] font-bold md:text-3xl">BRETT</h1>
            <p className="text-[20px] font-bold mt-6 leading-relaxed md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur modi odit ipsa sit perferendis, labore ratione dicta libero aut atque quibusdam similique aliquid eius omnis a id, quidem nemo sint.
            </p>

          </div>
          <div className="w-1/2 flex justify-center">
            <img src="img/pink.gif" alt="Pepe 3D" className="h-auto w-auto mt-32" />
          </div>
        </div>
        <Footer />

      </div>
    </>
  )
}

export default Brett
