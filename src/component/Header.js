import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCentos } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { BsCartCheck,BsArrowRightShort } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

import './header.css'
import { motion } from "framer-motion"


import letter from '../image/letter-s.png'




const Header = () => {





  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
  const menu = <React.Fragment>
    <li className=' py-2 lg:py-0'>
              <NavLink
                to='/home'
                aria-label='Home'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold font1 tracking-wide text-[#098b99]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium font1 tracking-wide text-[##111111] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to='/Service'
                aria-label='Home'
                title='event'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[gold]   transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-[#e6e7e7] transition-colors duration-200 hover:text-deep-purple-accent-400'
                
                }
              >
                Services
              </NavLink>
            </li> */}
           
           <li className=' py-2 lg:py-0'>
              <NavLink
                to='/courses'
                aria-label='courses'
                title='courses'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold font1 tracking-wide text-[#098b99]    transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium font1 tracking-wide text-[#111111] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Courses
              </NavLink>
    </li>
    <li className=' py-2 lg:py-0'>
              <NavLink
                to='/becomeATecher'
                aria-label='courses'
                title='addToCart'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold font1 tracking-wide text-[#098b99]    transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium font1 tracking-wide text-[#111111] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
             Become An Instructor
              </NavLink>
    </li>


    {/* <li className=' py-2 lg:py-0'>
              <NavLink
                to='/'
                aria-label='Dashboard'
                title='Dashboard'
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold tracking-wide text-[#098b99]    transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-[#111111] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Dashboard
              </NavLink>
    </li>
     */}
    <div className=" hidden lg:grid gap-4 grid-cols-3">
      <div className="bg-[#dee2e6] h-[20px] w-[1px]">

      </div>
      <div className="flex justify-center">
      <NavLink to={'/'}>
        <BsCartCheck className='text-[20px]'></BsCartCheck>
      </NavLink>
    </div>
      <div className="bg-[#dee2e6] h-[20px] w-[1px]">

</div>
   </div>
 
   <NavLink className="lg:hidden " to={'/'}>
        <BsCartCheck className='text-[20px]'></BsCartCheck>
      </NavLink>
  

{/* 
    [#dee2e6]
    #adb5bd
    #e9ecef
    #dee2e6
    #6c757d */}



  </React.Fragment>
  







   







  return (
    <>
      
      <div className="lg:flex   justify-between py-[12px] px-8 2xl:px-[100px] bg-[#0f6c76] ">
        <div className=""> <p className='text-[#e6f8fc]  font flex justify-center items-center'>Keep learning with free resources during COVID-19.
          <span className='mx-1 tracking-wide	 text-[16px] font-bold'>Learn more</span>  <span className='text-white arrow text-[24px]'><BiRightArrowAlt/></span></p>
       
        </div>
        
        <div className="flex justify-center font items-center"><p className='font-bold text-[#e6f8fc]'>Become An Instructor</p>
        <div className="bg-[#8fc4ca] h-[20px] mx-6  w-[0.6px]">

</div>
          <BiRightArrowAlt className='text-white font-[900] text-[24px]'/>
          <Link to={'/login'}><span className='text-white font-bold'>Signin</span></Link>
          
        </div>
  
          </div>
          
    <div className='px-8  2xl:px-[100px]  nav  shadow-sm'>
              <div className='  flex it py-6 mx-auto  '>
             
                 
                  
  
            
                  
        
               
          <div className='flex    items-center justify-between'>
              <div className="flex  items-center"> 
              
            <img src="https://edmy-react.hibootstrap.com/images/logo.png" alt="" />
            {/* <p className='    text-2xl text-[#111111] text-center font-extrabold tracking-wide #302e2c text-shadow-lg'>
             SkyTech
                  </p> */}

            </div>
                  
            <div className="pl-16 form-control hidden xl:block">
            <label class="relative block">
  
  <input class=" bg-[#f2f0ef] h-[55px] px-4  placeholder:text-[16px] placeholder:text-[gray]  input  rounded-sm  shadow-sm focus:bg-[white] focus:outline-[#098b99] sm:text-sm" placeholder="Search Courses" type="text" name="search"/>
  
  <span class="sr-only">Search</span>
  <span class="absolute  inset-y-0 right-4 flex items-center pl-2">
                  <svg class="h-7 w-7 fill-slate-300" viewBox="0 0 20 20">

                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#098b99"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </svg>
  </span>
              </label>
            </div>
 
                 
                  </div>
                  

                  
                      
       
           
           
           
        
          <div className="ml-auto lg:px-[20px]">
          <ul className=' items-center hidden space-x-8 lg:flex '>
           
            
              {menu}
              <div className="flex items-center">
                
              <Link to={'/register'}>
              <button className='BT  bg-gradient-to-r from-[#6cc17e] to-[#098b99] text-white text-[16px]    rounded-md py-[15px] px-10'>Register Now</button>
              </Link>
             </div>
           

         </ul>
           
     
                     
                      <div className='lg:hidden'>
                          
           
              {isMenuOpen ? (
                
                <motion.button
                animate={{
                  // scale: [1,1.2,1.4,1],
                    rotate: [ 40, 30, 0 , 30 ,0],
                    
              
                  // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                            aria-label='Close Menu'
                            className=' px-3 py-2 retalive -mr-2  rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <svg className='svg   w-8 text-white' viewBox='0 0 24 24'>
                                <path
                                fill='#098b99'
                                d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                />
                            </svg>
                  </motion.button> 
                  
                      
                    
                          )
                              : (
                  <div className="flex items-center">

    <NavLink to={'/'} className='px-4'>
                              <BsCartCheck className='text-[20px]'></BsCartCheck>
                            </NavLink>
                       
                      <button
                      aria-label='Open Menu'
                      title='Open Menu'
                      className='open px-3 py-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline bg-gray-200'
                      onClick={() => setIsMenuOpen(true)}
                  >
                      <svg className='w-8 text-white' viewBox='0 0 24 24'>
                      <path
                          fill='#098b99'
                          d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                      />
                      <path
                          fill='#098b99'
                          d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                      />
                      <path
                          fill='#098b99'
                          d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                      />
                      </svg>
                                  </button>
                    
                    
                    
                             </div>
                               )
                              
                              
                              
           }
                          
          
                      </div>
                  </div>
                
                

                                      
       

                  
              </div>
           
              {isMenuOpen && (
              <div className='absolute bg-[white] shadow-xl  top-30 left-0 w-[100%] z-40'>
               
                          <div className=" m px-8 pb-4 ">
                              <ul className='block lg:hidden border-t-[1px] border-[#eee]'>
                {menu}
                
              </ul>
              
 
              
              
           
                        </div>
                          


              </div>
            )}
      </div>
       
         
      </>
  )
}

export default Header