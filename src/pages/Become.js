import React, { useRef } from 'react'
import { BsCartCheck, BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './hero.css'

import { motion, useScroll } from "framer-motion"


const Become = () => {
  
  const scrollRef = useRef(null)
  
  return (
      <>
      <div>
    <div className=" lg:flex sm:px-12 py-[100px] 	 "  >
       
      
   <div className="w-full lg:w-[50%] px-10 py-12"  initial={{ opacity: 0 }}
        whileInuiew={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
           
          >
       
       <h1 className=' text-black text-[40px] subtitle animate-pop-in font-bold'> Become An Instructor Today <br /> And Start Teaching </h1>
       
       <p className=' text-[16px] my-8 text-[#767676]'>Instructors from around the world teach millions of students on Edmy. We <br /> provide  the tools and skills to teach what you love. And you can also achieve <br /> your goal with us.</p>
      
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      
                          <motion.div whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="shadow  rounded-lg text-[13px] lg:text-[auto]  py-4 px-4 bg-[white] flex items-center"><img className='px-4' src="https://edmy-react.hibootstrap.com/images/icon/teaching-icon-1.svg" alt="" /> <h1>Expert Instruction</h1></motion.div>
                          <motion.div whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="shadow  rounded-lg text-[13px] lg:text-[auto]  py-4 px-4 bg-[white] flex items-center"><img className='px-4' src="https://edmy-react.hibootstrap.com/images/icon/teaching-icon-2.svg" alt="" />  <h1>Lifetime Access</h1></motion.div>
                          
                          <motion.div whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="shadow  rounded-lg text-[13px] lg:text-[auto] py-4 px-4 bg-[white] flex items-center"><img className='px-4' src="https://edmy-react.hibootstrap.com/images/icon/teaching-icon-3.svg" alt="" />  <h1>Remote Learning</h1></motion.div>
                          <motion.div whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="shadow  rounded-lg text-[13px] lg:text-[auto] py-4 px-4 bg-[white] flex items-center"><img className='px-4' src="https://edmy-react.hibootstrap.com/images/icon/teaching-icon-1.svg" alt="" /> <h1>Self Development</h1></motion.div>


                      </div>  
                      


       <button className='regis  BT text-white text-[10px] py-3 px-4 sm:text-[15px] font-bold  mt-8 rounded-lg sm:py-5 sm:px-12'>Become An Instructor</button>

           
      
   </div>
   


          <div className="lg:w-[50%] px-8  mx-auto">
            <div className="flex py-12 mb-[20px] sm:py-0 sm:mb-[0px] justify-center mx-auto">
            <img className='universe sm:mb-[-66px] mx-auto absolute z-40' src="https://edmy-react.hibootstrap.com/images/teaching-img-shape.png" alt="" />

            </div>
           <div className="bg-[#dbefe1] z-0  relative max-w-[100%] mx-auto h-auto sm:w-[500px] sm:h-[500px] lg:w-[450px] lg:h-[450px]   xl:w-[550px] xl:h-[550px]  rounded-[100%]">
               <img className='w-[100%] z-0 sm:absolute sm:bottom-0 sm:left-0   mt-[00px] h-[auto] ' src="https://edmy-react.hibootstrap.com/images/teaching-img.png" alt="" />
           </div>
       </div>
     </div>
          </div>
          <div className='bg-[white] px-2 sm:px-12 py-[100px]'>
               <div className="bg-[#f2f0ef] lg:flex py-6 sm:px-4 px-2 	 ">
                  
               <div className="lg:w-[50%] overflow-hidden sm:px-8 retalive mx-auto">
                      <div className="white  bg-[white]  mb-[-300px]   sm:mb-[-400px] md:mb-[-400px] lg:mb-[-300px] xl:mb-[-400px] z-[0] max-w-[100%] mx-auto w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] lg:w-[350px] lg:h-[350px]   xl:w-[400px] xl:h-[400px]  rounded-[100%]">
                      </div>
                                               <div className=" second  rounded-full"> <img className='w-[100%]  z-[100]   ' src="https://edmy-react.hibootstrap.com/images/business-img.png" alt="" /></div>

                  </div>
                  

              <div className="w-full lg:w-[50%]  py-12">
                  
                  <h1 className=' text-black text-[20px] text-center sm:text-start sm:text-[40px] subtitle animate-pop-in font-bold'> Be A Member Of SkyTech <br /> Business & Start Earning <br /> Limitless Today</h1>
                  
                  <p className=' text-[16px] my-8 text-[#767676] text-center sm:text-start'>Instructors from around the world teach millions of students on <br /> Edmy. We  provide  the tools and skills to teach what you love. And <br /> you can also achieve  your goal.</p>
                 
            <div className="mx-auto text-center sm:text-start">
            <button className='mx-auto   regis BT text-white text-[12px]  sm:text-[12px] font-bold  mt-4 rounded-lg py-4 px-12'> SkyTech Business</button>

                   </div>
                       
                      
                 
              </div>
              


         
                </div>
    </div>
       
          

      </>
  )
}

export default Become