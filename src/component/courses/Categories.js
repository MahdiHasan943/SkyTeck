import React from 'react'
import './courses.css'
import { BsCartCheck, BsArrowRightShort,BsJournalCode } from "react-icons/bs";

const Categories = () => {

    const button = [
        {
            search:"Search"
        },
        {
            search:"Qna"
        },
        {
            search:"Node.js"
        },
        {
            search:"Javascript"
        },
        {
            search:"reac.js"
        },
        {
            search:"wordpress"
        },
        {
            search:"Computer&science"
        },
        {
            search:"Search"
        }
        ,
        {
            search:"php"
        },
        {
            search:"Mongodb"
        },
        {
            search:"Tailwind"
        },
        {
            search:"bootstrap"
        }
    ]

  return (
      <div className='py-20 overflow-hidden'>
          
          <div className="">
              
          <p className='text-center text-[#098b99] title  pb-2 font-semibold animate-pop-in   text-[16px]'>Top Categories</p>

<h1 className='text-center text-black text-[40px] subtitle animate-pop-in font-bold'>Browse Top Categories</h1>
              <div className="overflow-hidden grid mx-auto grid-cols-1 px-6 py-4  sm:grid-cols-2 lg:grid-cols-3  gap-4">
                  
                  {
                      button.map(but => ( 
                          <div className="mx-auto py-8 w-full ">
                              <button className='button w-full  hover:border-[#098b99] btn gap-2 shadow-5xl outline-none bg-none hover:outline-none'>
                                  {but.search} 
                                  <BsJournalCode className='ml-[90px] text-[20px] outline-none bg-none hover:outline-none flat text-[#098b99]'></BsJournalCode>

                              </button>

                          </div>
                      ))
                  }
                 
              </div>
              <p className='text-center flex items-center justify-center text-[#111] text-[15px]'>Browse All <span className='text-[#057fa8] flex justify-center mx-2 items-center'>Courses <BsArrowRightShort></BsArrowRightShort></span> </p>
              
         </div>
    </div>
  )
}

export default Categories