import React from 'react'
import useTitle from '../hook/useTitle'

const BecomeTeacher = () => {

    useTitle('Become A Teacher')
  return (
    
    <div className='mb-[100px]'>
    <div>
    
    <div className="h-[300px]  bg-gradient-to-r from-[#4eb086] to-[#098b99]" >
              <div className="flex justify-center ">
                        <div className="hidden md:block relative md:w-[25%]"><img className='tree mx-auto absolute left-10 top-20' src="https://edmy-react.hibootstrap.com/images/page-banner-shape-1.svg" alt="" /></div>
                        <div className="md:w-[50%] text-center items-center pt-16">
                            
                            <h1 className='text-white  font-bold  text-[55px]'>Become A Teacher</h1>
                            <p className='text-white text-center text-[18px] py-4 font-semibold'><span className=''>Home</span> <span className='text-2xl font-extrabold px-2'>.</span> <span>Become A Teacher</span></p>
                        
                        </div>
                        <div className="hidden md:block md:w-[25%] pt-24"><img className='tree mx-auto' src="https://edmy-react.hibootstrap.com/images/page-banner-shape-2.svg" alt="" /></div>
                        
              </div>

          </div>
    

</div>


</div>
      
  )
}

export default BecomeTeacher