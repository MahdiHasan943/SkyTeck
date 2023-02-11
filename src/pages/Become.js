import React from 'react'
import { BsCartCheck, BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './hero.css'

const Become = () => {
  return (
      <>
      <div>
    <div className=" lg:flex sm:px-12 py-[100px] 	 ">
       
      
   <div className="w-full lg:w-[50%] px-10 py-12">
       
       <h1 className=' text-black text-[40px] subtitle animate-pop-in font-bold'> Become An Instructor Today <br /> And Start Teaching </h1>
       
       <p className=' text-[16px] my-8 text-[#767676]'>Instructors from around the world teach millions of students on Edmy. We <br /> provide  the tools and skills to teach what you love. And you can also achieve <br /> your goal with us.</p>
      
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      
                          <div className="shadow  rounded-xl py-5 px-4 bg-[white]"><h1>Expert Instruction</h1></div>
                          <div className="shadow  rounded-xl py-5 px-4 bg-[white]"> <h1>Lifetime Access</h1></div>
                          
                          <div className="shadow  rounded-xl py-5 px-4 bg-[white]"><h1>Remote Learning</h1></div>
                          <div className="shadow  rounded-xl py-5 px-4 bg-[white]"><h1>Self Development</h1></div>


                      </div>  
                      


       <button className='regis  BT text-white text-[10px] py-3 px-4 sm:text-[15px] font-bold  mt-8 rounded-lg sm:py-5 sm:px-12'>Become An Instructor</button>

           
      
   </div>
   


   <div className="lg:w-[50%] px-8  mx-auto">
           <div className="bg-[#dbefe1]  relative max-w-[100%] mx-auto h-auto sm:w-[500px] sm:h-[500px] lg:w-[450px] lg:h-[450px]   xl:w-[500px] xl:h-[500px]  rounded-[100%]">
               <img className='w-[100%] sm:absolute sm:bottom-0 sm:left-0   mt-[00px] h-[auto] ' src="https://edmy-react.hibootstrap.com/images/teaching-img.png" alt="" />
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
                  
                  <h1 className=' text-black text-[20px] sm:text-[40px] subtitle animate-pop-in font-bold'> Be A Member Of SkyTech <br /> Business & Start Earning <br /> Limitless Today</h1>
                  
                  <p className=' text-[16px] my-8 text-[#767676]'>Instructors from around the world teach millions of students on <br /> Edmy. We  provide  the tools and skills to teach what you love. And <br /> you can also achieve  your goal.</p>
                 
                  <button className='regis BT text-white text-[10px] py-3 px-4 sm:text-[12px] font-bold  mt-4 rounded-lg sm:py-4 sm:px-12'> SkyTech Business</button>

                      
                 
              </div>
              


         
                </div>
    </div>
       
          

      </>
  )
}

export default Become