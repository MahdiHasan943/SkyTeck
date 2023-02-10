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

          <div className=" h-full" style={{ backgroundImage: `url("https://edmy-react.hibootstrap.com/images/banner/banner-bg.jpg")` }}>
              
              <div className="md:flex px-8 pt-[40px] bg-[#39a1ae] lg:bg-inherit	 ">
                  
              <div className="md:w-[50%] ">
                  <div className="bg-[#addcc4] overflow-hidden p-[20px] h-[350px] sm:h-[500px] w-[100%] md:h-[500px] lg:h-[600px] lg:w-[100%] xl:w-[100%] xl:h-[750px] rounded-[100%]">
                      <img className='h-[330px] w-[100%] girl animate-pop-in  sm:h-[400px] md:h-[400px] lg:h-[500px] xl:h-[600px]' src="https://edmy-react.hibootstrap.com/images/banner/banner-img-1.png" alt="" />
                  </div>
              </div>
              <div className="md:w-[50%] px-4 py-12">
                  
            <motion.img 
              className=' kham ml-[-30px] mt-[-30px]' src="https://edmy-react.hibootstrap.com/images/banner/shape-1.svg " alt="" />
                  <h1 className='text-white animate-pop-in title font-bold text-[30px]  lg:text-[46px] xl:text-[60px]'>Improve Your Online <br /> Learning Experience <br /> Better Instantly </h1>
                  {/* <h1 className='text-white font-bold  text-[60px]'>Improve Your Online   </h1>
                  <h1 className='text-white font-bold  text-[60px]'> Learning Experience   </h1>
                  <h1 className='text-white font-bold  text-[60px]'> Better Instantly    </h1> */}


                      <p className='text-white subtitle animate-pop-in font-semibold  text-[18px]'>We have <span className='text-[#fec400]'>40k+</span> Online courses & <span className='text-[#fec400]'> 500K++</span>  Online registered student. Find your <br /> desired Courses from them.</p>
                      

                      <div className="form-control py-8 w-full">
  <div className="input-group animate-pop-in group">
    <input type="text" placeholder="Search Courses" className="input placeholder-[#d6f0f2] w-full py-6  text-white bg-[#7dc2c4] input-bordered" />
                              <button className="flex   border-0 hover:outline-none hover:bg-[#f0bf79] capitalize text-black hover:border-none outline-none  btn bg-[#f0bf79] ">
                                  Search Now
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 sm:h-6 sm:mx-4 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
                      <div className="justify-center animate-pop-in little items-center sm:flex">
                      <div className="avatar-group justify-center mx-auto   pr-4 -space-x-6">
  <div className="avatar ">
    <div className="w-12">
      <img className='' src="https://edmy-react.hibootstrap.com/images/banner/client-3.jpg" />
    </div>
  </div>
  <div className="avatar ">
    <div className="w-12">
      <img src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg" />
    </div>
  </div>
  
</div>
                          
                      <p className='text-white py-4 sm:py-0 flex items-center font-semibold  text-[18px]'>500K+ People already trusted us.<span><Link to={'/'} className="underline p-1 text-[#fec400]  " >View Courses  </Link></span><BsArrowRightShort className='font-extrabold text-3xl mx-2 text-[#fec400]'></BsArrowRightShort> </p>

            </div>
            <div className="hidden  sm:flex sm:justify-end mt-8">
              <img className='book' src="https://edmy-react.hibootstrap.com/images/banner/shape-3.svg" alt="" />
            </div>
          </div>

        </div>
        
        <img className='hidden trophy lg:block ml-[200px] mb-[-50px]' src="https://edmy-react.hibootstrap.com/images/banner/shape-2.svg" alt="" />

     
      </div>
      
    </div>
  )
}

export default Hero