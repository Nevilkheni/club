/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (

    <>
      <Header />


      <div className='bg-black md:max-w-full '>

        <div className=" mt-28 alt'bg1' bg-clubbg  bg-cover bg-center h-screen flex flex-col  justify-center items-center lg:m-auto  text-center lg:w-auto opacity-80  ">
          <div className='mb-80 lg:mb-44 '>
            <div className='flex   flex-col lg:mt-40 xs:w-56   '> <img src='img/heroboy.png' /></div>
            <button className="px-10 py-4 bg-[#78c135]  text-black font-semibold rounded-full hover:bg-green-600 xs:py-2  xs:p-8">BUY</button>
          </div>
        </div>




        <div className='max-w-7xl  px-5 mx-auto py-[38px]'>
          <div className='border rounded-[25px] flex justify-center items-center flex-col z-10 p-4  text-white px-4 relative '>
            <img src='/img/Ellipse.png' className='absolute  -z-10 object-cover inset-0 h-full w-full' />
            <div className='flex justify-center items-center text-white px-4 w-full '>
              <div className='flex justify-center items-center gap-10 lg:flex lg:flex-col '>
                <div className='text-center'>
                  <div className="text-6xl font-bold text-lime-400 mb-4  xs:text-3xl">$511,474.00</div>
                  <div className="text-5xl font-bold mb-4 xs:text-2xl">TOTAL MARKET CAP</div>
                  <div className="text-3xl font-semibold text-gray-400 mb-6  xs:text-2xl">TOKENOMICS</div>
                </div>
                <div><ul className="text-left text-lg font-medium space-y-2 text-gray-200">
                  <li>• FIXED SUPPLY: 420,690,000 (WOLF, ANDY, BDOG, BRETT)</li>
                  <li>• CONTRACTS RENOUNCED AND VERIFIED</li>
                  <li>• INITIAL LP'S BURNED WITH 100% OF SUPPLY</li>
                  <li>• ZERO BUY SELL TAXES</li>
                  <li>• RIBBETTING THESIS</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className=" px-5  bg-clubg  bg-cover my-20  w-auto bg-gray-950 bg-opacity-100   bg-center  flex flex-col justify-center items-center text-center">
            <div className='flex gap-20 max-w-[1300px]  w-full justify-between lg:flex lg:flex-col '>
              <div className="relative z-10 flex flex-col items-center text-center text-white px-6 ">
                <h1 className="text-[80px] font-extrabold text-left w-auto  xs:text-3xl xs:text-center ">WELCOME TO <br /> BOYS CLUB</h1>
                <div>
                  <img src='/img/club.png ' className='h-[400px] mt-4 xs:h-auto' />
                </div>
              </div>
              <div>
                <div className="mt-8 p-6 max-w-[450px] rounded-[30px] bg-opacity-20 backdrop-blur-sm bg-white lg:m-auto lg:max-w-full">
                  <p className="text-slate-50 p-[30px] text-lg leading-10 xs:p-[10px]">
                    Ah, Boy's Club, where to begin with this cultural phenomenon? Created by the illustrious Matt Furie, Boy's Club is the comic series that gave us Pepe the Frog, a character who went from comic relief to internet meme to a symbol of... well, let's just say his journey was more complicated than a soap opera plotline. Born from Furie's pen in the wild, lawless lands of the mid-2000s, this series is a deep dive into the lives of four roommates: Andy, Brett, Landwolf, and the infamous Pepe.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div>
        </div>


        <div className="px-5 max-w-[1300px] m-auto flex w-full h-full items-center justify-center gap-20 bg-black md:flex md:flex-col-reverse md:gap-0  ">
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






        <img className='absolute  ' src='/img/leftbg.png' />

        <div className="px-5 max-w-[1300px] m-auto flex w-full h-full items-center justify-center gap-20  bg-black md:flex md:flex-col md:gap-0  ">
          <div className="w-1/2 text-white text-left md:text-center md:w-full">
            <h1 className="text-[65px] font-bold md:text-3xl">BRETT</h1>
            <p className="text-[20px] font-bold mt-6 leading-relaxed md:text-lg relative ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur modi odit ipsa sit perferendis, labore ratione dicta libero aut atque quibusdam similique aliquid eius omnis a id, quidem nemo sint.
            </p>

          </div>
          <div className="w-1/2 flex justify-center">
            <img src="img/pink.gif" alt="Pepe 3D" className="h-auto w-auto mt-32 relative" />
          </div>
        </div>



        <div className="px-5 max-w-[1300px] m-auto flex w-full h-full items-center justify-center gap-20 bg-black md:flex md:flex-col-reverse md:gap-0  ">
          <div className="w-1/2 flex justify-center">
            <img src="/img/yellow.png" alt="Pepe 3D" className="h-auto w-auto relative z-10" />
          </div>
          <div className="w-1/2 text-white text-left  md:text-center relative md:w-full">
            <h1 className="text-[65px] font-bold md:text-3xl ">ANDY</h1>
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




        <div className="px-5 max-w-[1300px] m-auto flex w-full h-full items-center justify-center gap-20 bg-gray-950   md:flex md:flex-col md:gap-0  ">
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




        <div className="px-5 max-w-[1300px] m-auto flex w-full h-full items-center justify-center gap-20 bg-gray-950  md:flex md:flex-col-reverse md:gap-0 ">
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




        <div>
          <h1 className='text-[80px] text-white text-center p-20 font-extrabold md:text-5xl xxs:text-lg'>ROADMAP</h1>
        </div>


        <div className="px-5 max-w-[1300px] m-auto flex h-full gap-20 bg-gray-950  w-auto  ">

          <div className='flex text-left xs:flex-col'>
            <div>
              <h1 className=' text-white font-extrabold text-[65px] md:text-3xl	'>PHASE ONE</h1>
              <p className=' text-white text-[20px] font-extrabold mt-20'>
                <li> NFT LUNCH</li>
                <li> LIMK ALL TOKENS WITH THICK LIQUIDITY </li>
              
              </p>
            </div>
            <div>
              <img className='mt-8 m-auto md:hidden' src='img/LineL.png' />
            </div>
          </div>
        </div>






        <div className="px-5 max-w-[1300px]  m-auto flex h-ull justify-between bg-black  w-auto  ">

          <div className=' flex  flex-row md:flex-col  '>
          <img className='mt-8 m-auto hidden md:block' src='img/LineL.png' />
            <img src='img/greentwo.gif' className='md:h-[400px] md:w-[400px] md:m-auto' />
            <img className='mt-8 m-auto hidden md:block' src='img/LineR.png' />

            <div className='flex lg:flex-col'>
              <div>
                <img className='mt-10 md:hidden' src='img/LineR.png' />
              </div>
              <div>
                <h1 className=' text-white text-[65px]	 font-extrabold lg:text-[60px]'>PHASE TWO</h1>
                <p className=' text-white text-[20px] font-extrabold mt-20'>
                  <li> WEB3 GAME (CURRENTLY IN DEVELOPMENT)
                  </li>
                  <li> MEME HARDER
                  </li>

                </p>
              </div>
            </div>
          </div>
        </div>




        <div className='px-28 max-w-[1300px] m-auto  h-full bg-gray-950  w-auto xs:px-0 xs:w-auto '>
          <div className=' xs:px-5 text-white text-6xl  font-black	 md:text-4xl xs:text-3xl xs:text-center' >
            <div className='flex flex-row text-start   '>
              <h1 className=' opacity-30'>EXTRA ORDINERY</h1><img className='h-20 w-20 ' src='img/Y.gif' /></div>
            <div className='text-end '>
              <h1 className=' opacity-30'>NFT ART <span className='text-yellow-200'>COMING SOON...</span></h1>
            </div>
          </div>
        </div>



        <div className="flex max-w-[1300px] m-auto w-full h-full items-end   gap-20 bg-gray-950 px-32 xs:px-0 md:flex md:flex-col md:gap-0 ">


          <div class=" flex">
            <img src="img/bhuro.png" alt="Character" class="w-auto h-auto sm:w-[250px]  " />
          </div>

          <div className="mt-8 text-lg  ">
            <h1 className='font-extrabold text-white text-3xl text-left xs:px-5'>NFT COLLECTIONS</h1>

            <ul className="xs:px-5 list-disc text-1xl font-extrabold text-start list-inside mt-4 text-white  xs:text-2xl xs:text-start xs:w-full  ">
              <li>ART BY SLIMEWHALE (CONCEPT ARTIST FOR SQUANCH GAMES)</li>
              <li>DEVELOPED JOINTLY WITH OMNI LABZ AND SLIMELABZ</li>
            </ul>
            <a href="https://t.me/boysclubpulse" className="inline-block  xs:mx-1 bg-lime-400 text-black font-bold rounded-[20px] px-6 py-3 mt-10 transition duration-300 hover:bg-lime-500">
              JOIN TELEGRAM FOR UPDATES
            </a>
          </div>
        </div>


        <div className="bg-gray-950 text-white text-[80px] text-center font-black	py-28 lg:text-[50px]  xs:text-lg "   >
          <h1>GET IN TOUCH WITH US</h1>
        </div>

        <div className='flex flex-row h-16 gap-5 cursor-pointer bg-black   justify-center   xxs:h-14 xxs:gap-2'>

          <img src='img/cart.png' />
          <img src='img/store.png' />
          <img src='img/x.png' />
          <img src='img/images.png' />
          <img src='img/mail.png' />
        </div>
        <div className='bg-black w-auto h-20'></div>
      </div>
      <Footer />


    </>
  )
}

export default Home
