import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Andy = () => {
  return (
    <>
      <div className='bg-black h-screen '>
        <Header />

        <div className="flex w-full  items-center max-w-[2000px] justify-center m-auto gap-20 bg-gray-950 mt-24 lg:mt-10 p-5 md:flex-col md:flex md:mt-20 md:gap-0 ">

          <div className=" max-w-[1300px] m-auto flex w-full h-full items-center justify-center gap-20 bg-black xxl:my-0 md:flex md:flex-col md:gap-0 my-64  ">
            <div className="w-1/2 flex justify-center ">
              <img src="/img/yellow.png" alt="Pepe 3D" className="h-auto w-auto relative z-10 md:mt-10" />
            </div>
            <div className="w-1/2 text-white text-left  md:text-center  md:w-full">
              <h1 className="text-[65px] font-bold md:text-3xl lg:mt-12">ANDY</h1>
              <p className="text-[20px] font-bold mt-6 leading-relaxed md:text-lg">
                Matt Furie's Boy's Club series introduces a quirky ensemble of characters, including Landwolf, Brett, Andy, Bdog, and Pepe the Frog          </p>
              <p className="text-[20px] font-bold mt-4 leading-relaxed md:text-lg">
                This group of teenage monster friends navigates a world filled with psychedelic adventures, childlike wonder, and mischievous antics.             </p>
              <p className="text-[20px] font-bold mt-4 leading-relaxed md:text-lg">
                $PEPE $WOLF $ANDY $BDOG $BRETT</p>
              <p className="text-[20px] font-bold mt-4 leading-relaxed md:text-lg">
                The Original Boys Club on Blockchain.</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  )
}

export default Andy
