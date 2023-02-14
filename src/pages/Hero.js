import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartCheck, BsArrowRightShort } from "react-icons/bs";
import './hero.css'



import { motion, useTime, useTransform } from "framer-motion";

const Hero = () => {


   const time = useTime();
  // const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (
      <div>
{/* https://edmy-react.hibootstrap.com/images/banner/shape-3.svg
https://edmy-react.hibootstrap.com/images/banner/shape-1.svg */}

          <div className="px-8  2xl:px-[100px]  bg-[#39a1ae]  lg:bg-gradient-to-r from-[#96d1a1] to-[#36a0ad] " >
        <div className="  relative 	">
          <div className="lg:flex  pt-[80px] herop pb-[150px]">
          {/* py-[30px] */}
                  
                  <div className="relative mx-auto pt-8 lg:w-[50%] ">
                      <div className="z-0  lg:m bg-gradient-to-l from-[#7cc3ad] bg to-[#b4dec2] overflow-hidden  opacity-bottom-40 rounded-[100%]">
                          {/* className='h-[330px] w-[100%] girl animate-pop-in  sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[600px]'         */}
              </div>
              <img className='absolute lg:mx-none  heroimg z-40 left-[30px] bottom-[50px] '  src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png" alt="" />

                  </div>
                  <div className="lg:w-[50%] text-center  lg:text-start px-8 py-12 ">
                      
                <motion.img 
                  className=' kham ml-[-40px] mt-[-50px]' src="https://edmy-react.hibootstrap.com/images/banner/shape-1.svg " alt="" />
                      <h1 className='text-white animate-pop-in lg:tracking-[-4px] py-3 title font-bold text-[30px]  lg:text-[46px]  2xl:text-[70px]'>Improve Your Online <br className='hidden lg:block' /> Learning Experience <br className='hidden lg:block'  /> Better Instantly </h1>
                      {/* <h1 className='text-white font-bold  text-[60px]'>Improve Your Online   </h1>
                      <h1 className='text-white font-bold  text-[60px]'> Learning Experience   </h1>
                      <h1 className='text-white font-bold  text-[60px]'> Better Instantly    </h1> */}
    
    
                          <p className='text-white subtitle animate-pop-in font-semibold  text-[18px]'>We have <span className='text-[#fec400]'>40k+</span> Online courses & <span className='text-[#fec400]'> 500K++</span>  Online registered student. Find your <br /> desired Courses from them.</p>
                          
    
                          <div className="form-control  py-8 w-full">
      <div className="input-group flex justify-center animate-pop-in group lg:pr-[100px]">
        <input type="text" placeholder="Search Courses" className="input sm:px-8 focus:outline-none placeholder-[#d6f0f2] py-7  text-white bg-[#7dc2c4] input-bordered" />
        
                                  <button className="flex  h-[57px]  border-0 hover:outline-none hover:bg-[#f0bf79] capitalize text-black hover:border-none outline-none  btn bg-[#f0bf79] ">
                                      Search Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 mx-2 sm:h-6 sm:mx-4 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </div>
                          <div className=" animate-pop-in lg:flex justify-center lg:justify-start little items-center sm:flex">
                          <div className="avatar-group justify-center  pr-5 -space-x-5">
      <div className="avatar ">
        <div className="w-11  	">
          <img className='' src="https://edmy-react.hibootstrap.com/images/banner/client-3.jpg" />
        </div>
      </div>
      <div className="avatar ">
        <div className="w-11">
          <img src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-11">
          <img src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg" />
        </div>
      </div>
      
    </div>
                              
                          <p className='text-white py-4 sm:py-0 sm:flex items-center font-semibold  text-[18px]'>500K+ People already trusted us.<p className='flex justify-center'><Link to={'/'} className="underline p-1 text-[#fec400]  " >View Courses  </Link> <BsArrowRightShort className='font-extrabold text-3xl mx-2 text-[#fec400]'></BsArrowRightShort></p> </p>
    
                </div>
              
              </div>
    
          </div>
          <div className="hidden absolute bottom-20 right-0  sm:flex sm:justify-end ">
                  <img className='book' src="https://edmy-react.hibootstrap.com/images/banner/shape-3.svg" alt="" />
          </div>
          <img className='hidden  trophy lg:block absolute mt-[-50px] bottom-90 left-20 ' src="https://edmy-react.hibootstrap.com/images/banner/shape-2.svg" alt="" />

            
             </div>
        

     
      </div>
      
    </div>
  )
}

export default Hero