import React from 'react'

import './hero.css'
import { motion, useScroll } from "framer-motion"


const Features = () => {

    const { scrollYProgress,scrollRef } = useScroll();

  return (
      <>
       <div className='pb-[110px] pt-20 bg-[#f1efee]'>
                    <img className='book hidden md:block mb-[-100px] mx-[150px]' src="https://edmy-react.hibootstrap.com/images/features/feature-shape-1.svg" alt="" />

          <div className="">
              

          <p className='text-center text-[#098b99] title  pb-4 font-semibold animate-pop-in   text-[16px]'>Our Features</p>
   <h1 className='text-center h1 pb-10 text-[25px] lg:text-[30px]  xl:text-[40px] subtitle animate-pop-in '>Why You Should Choose SkyTech</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 px-6 sm:px-12">
              
              <motion.div whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="cart get1 bg-[white] my-4 sm:my-0 shadow-2xl py-12 rounded-2xl text-center">
                  <img className='mx-auto' src="https://edmy-react.hibootstrap.com/images/features/feature-1.svg" alt="" />

                  <h1 className='text-[20px] py-6 font-bold'>Expert-Led Video <br /> Courses</h1>
                  <p className=''>Instructors from around the <br /> world teach millions of students <br /> on Edmy through video.</p>
              </motion.div>


              <motion.div whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="cart get1 bg-[white] my-4 sm:my-0 shadow-2xl py-12 rounded-2xl text-center">
                  <img className='mx-auto' src="https://edmy-react.hibootstrap.com/images/features/feature-2.svg" alt="" />

                  <h1 className='text-[20px] py-6 font-bold'>In-Demand Trendy Topics<br /> Courses</h1>
                  <p className=''>Instructors from around the <br /> world teach millions of students <br /> on Edmy through video.</p>
              </motion.div>


              <motion.div whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="cart get1 bg-[white] my-4 sm:my-0 shadow-2xl py-12 rounded-2xl text-center">
                  <img className='mx-auto' src="https://edmy-react.hibootstrap.com/images/features/feature-3.svg" alt="" />

                  <h1 className='text-[20px] py-6 font-bold'>Segment Your Learning <br /> Courses</h1>
                  <p className=''>Instructors from around the <br /> world teach millions of students <br /> on Edmy through video.</p>
              </motion.div>


              <motion.div whileHover={{
    x: 0,
    y: -7,
    scale: 1,
    rotate: 0,
  }}  className="cart get1 bg-[white] my-4 sm:my-0 shadow-2xl py-12 rounded-2xl text-center">
                  <img className='mx-auto' src="https://edmy-react.hibootstrap.com/images/features/feature-4.svg" alt="" />

                  <h1 className='text-[20px] py-6 font-bold'>Always Interactive Learning <br /> Courses</h1>
                  <p className=''>Instructors from around the <br /> world teach millions of students <br /> on Edmy through video.</p>
              </motion.div>
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

          <div ref={scrollRef} style={{ overflow: "scroll" }} className="pb-20 pt-20 bg-[#f1efee]">
              
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
                  <motion.img initial={{ opacity: 0, scale:0.2 }}
  whileInView={{ opacity: 20 , scale:1 }} className="sm:py-0 py-4" src="https://res.cloudinary.com/dev-empty/image/upload/v1674994827/j37ln6cye17aqjfgnisb.png" alt="" />
                  <motion.img className="sm:py-0 py-4" initial={{ opacity: 0,  scale: 0.2}}
                      whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ root: scrollRef }} src="https://res.cloudinary.com/dev-empty/image/upload/v1662220609/foaoty9yj8ztpyn3rygg.png" alt="" />
                  <motion.img className="sm:py-0 py-4" initial={{ opacity: 0,  scale: 0.2}}
                      whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ root: scrollRef }} src="https://res.cloudinary.com/dev-empty/image/upload/v1662220599/fw2vmnixtr8rwhb8jga8.png" alt="" />
                  <motion.img initial={{ opacity: 0,  scale: 0.2}}
                      whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ root: scrollRef }} src="https://res.cloudinary.com/dev-empty/image/upload/v1662220586/cmejwacwcz2ejxhv8wna.png" alt="" />
                  <motion.img initial={{ opacity: 0,  scale: 0.2}}
                      whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ root: scrollRef }} src="https://res.cloudinary.com/dev-empty/image/upload/v1662220578/sbwdmgrtzl0ttu3ntwt1.png" alt="" />
                  <motion.img initial={{ opacity: 0,  scale: 0.2}}
                      whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ root: scrollRef }} src="https://res.cloudinary.com/dev-empty/image/upload/v1662220570/fdsav9xalgcj6mjqs1rn.png" alt="" />

             </div>
          </div>
      </>
  )
}

export default Features