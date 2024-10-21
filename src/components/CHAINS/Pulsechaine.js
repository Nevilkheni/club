/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { chainData } from './Chain';

const Pulsechaine = () => {
    const [openchain, setOpenchain] = useState(null);

    const togglechain = (index) => {
        setOpenchain(openchain === index ? null : index);
    };

    return (
        <>
            <Header />
            <div className="bg-black w-full   relative  ">
                <div className='mx-96 xxl:mx-0 '>
                    <img src='/img/rightcircle.png' className='absolute w-full ' />
                    <div className="bg-black mt-28 py-10 w-auto xs:mt-0">
                        <h1 className="text-6xl text-left font-bold mx-5 text-white  lg:text-[40px]  xs:font-mono xs:text-2xl  bg-opacity-0 backdrop-blur-sm"  >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis eum tenetur aperiam ad.
                        </h1>
                    </div>




                    <div className=' bg-opacity-20 mx-5 backdrop-blur-sm bg-white p-5  rounded-[25px] '>
                        {/* js  */}
                        {chainData.map((item) => (
                            <div className="w-full " key={item.id}>
                                <div className=" m-3 bg-opacity-10 backdrop-blur-sm rounded-[25px] bg-white ">
                                    <button
                                        onClick={() => togglechain(item.id)}
                                        className="rounded-[25px] text-white   font-semibold text-2xl w-full text-left p-5 flex justify-between items-center">
                                        {item.name}
                                        <span className="chain-icon">
                                            {openchain === item.id ? "-" : "+"}
                                        </span>
                                    </button>
                                    <div className={`chain-content text-whit px-4 py-2 ${openchain === item.id ? "block" : "hidden"
                                        }`} >
                                        <div className="flex gap-4 text-white text-2xl justify-center  sm:flex-col">
                                            <button className="w-34 bg-opacity-30 backdrop-blur-sm bg-gray-400 px-5 text-center rounded-[25px] sm:text-lg">
                                                DEXSCREENER
                                            </button>
                                            <button className="w-auto bg-opacity-30 backdrop-blur-sm bg-gray-400 px-5 text-center rounded-[25px] sm:text-lg">
                                                PLUSEX
                                            </button>
                                        </div>
                                        <div className="bg-opacity-20 backdrop-blur-sm bg-gray-900 w-auto p-4 rounded-[25px] m-3">
                                            <div className="text-center font-extrabold text-lg text-white">
                                                CA:
                                            </div>
                                            <div className="bg-opacity-10 backdrop-blur-sm bg-gray-350 w-auto p-4 text-white rounded-[25px] m-3 text-center  ">
                                                {item.ca}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>





                    <div className="bg-black text-left text-white text-2xl py-10 mx-5 backdrop-blur-sm bg-opacity-0">
                        <h1 className="text-5xl  font-bold p-2">Top Text</h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis eum tenetur aperiam ad.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis eum tenetur aperiam ad.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis eum tenetur aperiam ad.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis eum tenetur aperiam ad.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis eum tenetur aperiam ad.lorem</p>
                    </div>

                    <div className=' xxs:px-0 px-5 mx-auto py-[38px] md:px-5 '>
                        <div className='border rounded-[25px] flex justify-center items-center flex-col z-10 p-4  text-white px-4   relative '>
                            <img src='/img/Ellipse.png' className='absolute -z-10 object-cover inset-0 h-full w-full' />
                            <div className='flex justify-center items-center text-white px-4 xxs:px-0 w-full  '>
                                <div className='flex justify-center items-center gap-10 lg:flex lg:flex-col '>
                                    <div className='text-center'>
                                        <div className="text-6xl font-bold text-lime-400 mb-4  xs:text-3xl">$543,823.00</div>
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

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Pulsechaine;
