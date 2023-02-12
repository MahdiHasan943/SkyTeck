import React from 'react'

import { BsCartCheck, BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './hero.css'

const TransForm = () => {
  return (
      <div>
               <div className="lg:flex sm:px-12 py-[100px] 	 ">
                  
                 
              <div className="w-full lg:w-[50%] px-10 py-12">
                  
                  <h1 className=' text-black text-[40px] subtitle animate-pop-in font-bold'> Transform Your Life Through <br /> Online Education</h1>
                  
                  <p className=' text-[16px] my-8 text-[#767676]'>Instructors from around the world teach millions of students on Edmy. We <br /> provide  the tools and skills to teach what you love. And you can also achieve <br /> your goal.</p>
                  <div className=" sm:flex items-center px-4 shadow-2xl py-4 rounded-xl ">
                      <div className="mx-auto sm:w-[20%]">
                          <img className='mx-auto lg:h-[100%]'  src="https://edmy-react.hibootstrap.com/images/courses/course-16.jpg" alt="" />
                          
                      </div>
                      <div className="sm:px-6 text-center sm:text-start py-6 sm:py-6 sm:w-[80%]">
                          <p className='xl:text-[17px] font-bold pb-1 text-[#111]'>Watch Video From the Community How Sky Change Their Life</p>
                           <p className='xl:text-[14px] text-[gray] pt-1 font-semibold'>My Courses</p>
                      </div>
                      
                  </div>
                       
                  <div className="flex find justify-center sm:justify-start">
                  <button className='regis  text-white text-[20px]   sm:text-[20px] font-bold  mt-8 rounded-lg py-5 px-12'>Find Out Now</button>

                  </div>
                      
                 
              </div>
              


              <div className="lg:w-[50%] px-8  mx-auto">
                      <div className="bg-[#dbefe1]  relative max-w-[100%] mx-auto h-auto sm:w-[500px] sm:h-[500px] lg:w-[450px] lg:h-[450px]   xl:w-[500px] xl:h-[500px]  rounded-[100%]">
                          <img className='w-[100%] sm:absolute sm:bottom-0 sm:left-0   mt-[00px] h-[auto] ' src="https://edmy-react.hibootstrap.com/images/transform-img.png" alt="" />
                      </div>
                  </div>
                </div>
    </div>
  )
}

export default TransForm