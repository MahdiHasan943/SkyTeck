import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCentos } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { BsCartCheck,BsArrowRightShort } from "react-icons/bs";

import './header.css'


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
                    ? 'font-bold tracking-wide text-[#098b99]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-[##111111] transition-colors duration-200 hover:text-deep-purple-accent-400'
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
                    ? 'font-bold tracking-wide text-[#098b99]    transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-[#111111] transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Courses
              </NavLink>
    </li>
    <li className=' py-2 lg:py-0'>
              <NavLink
                to='/Dashboard'
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

    <li className=' py-2 lg:py-0'>
      <NavLink to={'/'}>
        <BsCartCheck className='text-[20px]'></BsCartCheck>
      </NavLink>
    </li>





  </React.Fragment>
  







   







  return (
    <>
      
      <div className=" sm:flex justify-between py-6 px-12 bg-[#0f6c76] text-center">
              <div className=""> <p className='text-[#e6f8fc]'>Keep learning with free resources during COVID-19.</p></div>
        <div className="flex justify-center items-center"><p className='text-[#e6f8fc]'>Become An Instructor</p>
          <p className='text-white mx-4'>|</p>
          <BsArrowRightShort className='text-white font-extrabold text-[24px]'></BsArrowRightShort>
          <Link to={'/'}><span className='text-white'>Signin</span></Link>
          
        </div>
  
          </div>
          
    <div className=' shadow-lg'>
              <div className='px-4   flex it py-5 lg:py-8 mx-auto  '>
             
                 
                  
  
            
                  
        
               
          <div className='flex  items-center justify-between'>
            <div className="flex  items-center"> 
              
            <img src={letter} alt="" />
            <p className='    text-2xl text-[#111111] text-center font-extrabold tracking-wide #302e2c text-shadow-lg'>
             SkyTech
                  </p>

            </div>
                  
                  <div className="pl-20 form-control hidden xl:block">
  <div className="input-group rounded-lg border-[1px] border-[#098b99]">
    <input type="text" placeholder="Search courses" className=" px-4 outline-none hover:shadow-none hover:bg-none  hover:border-none " />
    <button className="btn outline-none hover:bg-white bg-[white] border-none    btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#098b99"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
              </div>
              


</div>
                  </div>
                  

                  
                      
       
           
           
           
        
          <div className="ml-auto lg:px-[20px]">
          <ul className=' items-center hidden space-x-8 lg:flex '>
           
            
           {menu}
           <button className='regis text-white rounded-sm py-3 px-8'>Register Now</button>

         </ul>
         
                     
                      <div className='lg:hidden'>
                          
           
                          {isMenuOpen ? (
                            <button
                            aria-label='Close Menu'
                            title='Close Menu'
                            className=' px-3 py-2  -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <svg className='svg  w-8 text-white' viewBox='0 0 24 24'>
                                <path
                                fill='#098b99'
                                d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                />
                            </svg>
                  </button> 
                  
                      
                    
                          )
                              : (
                              
                      <button
                      aria-label='Open Menu'
                      title='Open Menu'
                      className='px-3 py-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline bg-gray-200'
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
                              )
                              
                              
                              
           }
                          
          
                      </div>
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
         
      </>
  )
}

export default Header