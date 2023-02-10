import React from 'react'

import './hero.css'

const Features = () => {
  return (
      <>
       <div className='pb-20 pt-20 bg-[#f1efee]'>
                    <img className='book hidden md:block mb-[-100px] mx-[150px]' src="https://edmy-react.hibootstrap.com/images/features/feature-shape-1.svg" alt="" />

          <div className="">
              

          <p className='text-center text-[#098b99] title  pb-4 font-semibold animate-pop-in   text-[16px]'>Our Features</p>
   <h1 className='text-center h1 pb-10 text-[25px] lg:text-[30px]  xl:text-[40px] subtitle animate-pop-in '>Why You Should Choose SkyTech</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 px-6 sm:px-12">
              
              <div className="cart bg-[white] shadow-2xl py-8 rounded-2xl text-center">
                  <img className='mx-auto' src="https://edmy-react.hibootstrap.com/images/features/feature-1.svg" alt="" />

                  <h1 className='text-[20px] py-6 font-bold'>Expert-Led Video <br /> Courses</h1>
                  <p className='py-4'>Instructors from around the <br /> world teach millions of students <br /> on Edmy through video.</p>
              </div>


              <div className="cart bg-[white] shadow-2xl py-8 rounded-2xl text-center">
                  <img className='mx-auto' src="https://edmy-react.hibootstrap.com/images/features/feature-2.svg" alt="" />

                  <h1 className='text-[20px] py-6 font-bold'>Expert-Led Video <br /> Courses</h1>
                  <p className='py-4'>Instructors from around the <br /> world teach millions of students <br /> on Edmy through video.</p>
              </div>


              <div className="cart bg-[white] shadow-2xl py-8 rounded-2xl text-center">
                  <img className='mx-auto' src="https://edmy-react.hibootstrap.com/images/features/feature-3.svg" alt="" />

                  <h1 className='text-[20px] py-6 font-bold'>Expert-Led Video <br /> Courses</h1>
                  <p className='py-4'>Instructors from around the <br /> world teach millions of students <br /> on Edmy through video.</p>
              </div>


              <div className="cart bg-[white] shadow-2xl py-8 rounded-2xl text-center">
                  <img className='mx-auto' src="https://edmy-react.hibootstrap.com/images/features/feature-4.svg" alt="" />

                  <h1 className='text-[20px] py-6 font-bold'>Expert-Led Video <br /> Courses</h1>
                  <p className='py-4'>Instructors from around the <br /> world teach millions of students <br /> on Edmy through video.</p>
              </div>
          </div>
      </div>
      
          <div className="py-8">
              <div className="sm:flex ">
                  

                  <div className="sm:w-[50%]">
                      
                      <img src="https://edmy-react.hibootstrap.com/images/testimonials/testimonial-1.png" alt="" />
                  </div>

                  <div className="sm:w-[50%] flex justify-center items-center">
                      <h1 className='py-6 sm:py-0 text-center h1 pb-10 text-[25px] lg:text-[30px]  xl:text-[40px] subtitle animate-pop-in'>Our Students Are Our Strength. <br /> See What They Say About Us</h1>
                      
                  </div>


              </div>
          </div>
      </>
  )
}

export default Features