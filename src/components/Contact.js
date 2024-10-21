/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <>

      <Header />
      <div className='bg-black h-screen max-w-full items-center' >
        <h1 className=' text-white text-[80px] text-center items-center pt-44 md:text-[40px]'>GET IN TOUCH WITH US</h1>


        <div className='flex flex-row gap-5 w-auto h-14 m-8 bg-black  justify-center sm:gap-1'>

          <img src='img/cart.png' />
          <img src='img/store.png' />
          <img src='img/x.png' />
          <img src='img/images.png' />
          <img src='img/mail.png' />
        </div>

      </div>
      <Footer />

    </>

  )
}

export default Contact
