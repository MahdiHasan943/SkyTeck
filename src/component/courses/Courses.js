import React from 'react'
import gas from '../../image/gas.png'
import './courses.css'
import CoursesContent from './CoursesContent'

const Courses = () => {

    
    return (
        <>
         
      <div >
          
          <div className="h-[300px] flex justify-center items-center bg-gradient-to-r from-[#4eb086] to-[#098b99]" >
              <div className="">
              <h1 className='text-white  font-bold  text-[55px]'>Courses</h1>
              <p className='text-white text-center text-[18px] py-4 font-semibold'><span className=''>Home</span> <span className='text-2xl font-extrabold px-2'>.</span> <span>Courses</span></p>
              </div>

          </div>
          
          

      </div>
            <CoursesContent></CoursesContent>
            
        </>
  )
}

export default Courses