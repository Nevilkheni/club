/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-black  '>
                <div className="bg-lime-400   cursor-pointer -rotate-1 flex justify-between items-center px-10 ">
                    <div >
                        <a href='#'>
                            <img className='sm:w-[200px] xxs:w-[100px]' src='img/boysclub.png' />
                        </a>
                    </div>
                    <div className="flex space-x-6 text-[25px]  text-black ">
                        <a href="https://x.com/boysclubpls" className="flex items-center space-x-1 hover:text-gray-800 lg:text-lg sm:text-sm xxs:text-xs">
                            <img className='h-5 ' src='img/twitter (2).png' />
                            <span>TWITTER</span>
                        </a>
                        <a href="https://t.me/boysclubpulse" className="flex items-center space-x-1 hover:text-gray-800 lg:text-lg sm:text-sm xxs:text-xs">
                            <img className='h-5 ' src=' img/telegram.png' />
                            <span> TELEGRAM</span>
                        </a>

                    </div>
                </div>
                <div className='bg-black w-auto h-10'></div>
            </div>
        </>
    )
}

export default Footer
