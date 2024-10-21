import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Pepe = () => {
  return (
    <>
      <div className='bg-black  '>
        <Header />


        <div className="px-5 max-w-[1300px] pt-28 m-auto flex w-full h-full items-center justify-center gap-20 bg-black md:flex md:flex-col md:gap-0  ">
          <div className="w-1/2 flex justify-center">
            <img src="/img/green.png" alt="Pepe 3D" className="h-auto w-auto relative z-10" />
          </div>
          <div className="w-1/2 text-white text-left  md:text-center md:w-full">
            <h1 className="text-[65px] font-bold md:text-3xl">PEPE</h1>
            <p className="text-[20px] font-bold mt-6 leading-relaxed md:text-lg">
              The most memeable memecoin in existence. Pepe had their day on ETH, it’s time for Pepe on Pulsechain to take reign.      </p>
            <p className="text-[20px] font-bold mt-4 leading-relaxed md:text-lg">
              Pepe is tired of watching everyone play hot potato with the endless derivative Shiba CumGMElonKishu TurboAss FlokiMoon Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the memes.

            </p>
            <p className="text-[20px] font-bold mt-4 leading-relaxed md:text-lg">
              Pepe is here to make memecoins great again. Forked from ETH to PLS on mainnet launch, $PEPE is a coin for the people, forever. Fueled by pure memetic power, let $PEPE show you the way.</p>
          </div>
        </div>



        <Footer />

      </div>
    </>
  )
}

export default Pepe
