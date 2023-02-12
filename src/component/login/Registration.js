import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './auth.css'
import Login from './Login'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Registration = () => {
  <div className="">
      <div className="card-body">
          

      <div className="form-control">
  <label className="label">
  </label>
  <input type="text" placeholder="First Name" className="input bg-[#f2f0ef] hover:bg-[white]  py-8 input-bordered" />
</div>
<div className="form-control">
  <label className="label">
  </label>
  <input type="text" placeholder="Last Name" className="input bg-[#f2f0ef] hover:bg-[white]  py-8 input-bordered" />
  
</div>
          



  <div className="form-control">
  <label className="label">
  </label>
  <input type="text" placeholder="Email" className="input bg-[#f2f0ef] hover:bg-[white]  py-8 input-bordered" />
</div>
<div className="form-control">
  <label className="label">
  </label>
  <input type="text" placeholder="Password" className="input bg-[#f2f0ef] hover:bg-[white]  py-8 input-bordered" />

</div>
<div className="form-control mt-6">
<button className="btn  bg-gradient-to-r from-[#6cc17e] to-[#098b99] outline-none  border-none text-[white] text-[15px] h-[60px]   rounded-md  px-10 ">Register Now </button>
</div>
</div>

  </div>

  const [text, setText] = useState('Create your account');

  return (
    <div>  
      <div>
          
          <div className="h-[300px] flex justify-center items-center bg-gradient-to-r from-[#4eb086] to-[#098b99]" >
              <div className="">
              <h1 className='text-white  font-bold  text-[55px]'>Authentication</h1>
              <p className='text-white text-center text-[18px] py-4 font-semibold'><span className=''>Home</span> <span className='text-2xl font-extrabold px-2'>.</span> <span>AddToCart</span></p>
              </div>

        </div>


        <div className="px-4 sm:flex sm:px-8 py-14">
        <div className=" sm:w-[50%]  ">
          <img className='mx-auto w-full' src="https://edmy-react.hibootstrap.com/images/register-img.png" alt="" />
        </div>
          <div className="sm:w-[50%] px-20  mx-auto">
            
         
            <h1 className='text-[#292a2d] text-[34px] px-8 font-bold  pb-10'>{text}</h1>
            <div>
              <div className="px-8">
              <div className="flex px-2 py-4 bg-[white] box  rounded-full  justify-between items-center  ">
                  
                  <Link to={'/register'}
                  className='bg-gradient-to-r from-[#6cc17e]  to-[#098b99] outline-none  border-none  text-[white] text-[20px] font-bold  rounded-full py-4 px-10'>
                  <div
                    onClick={() => setText('Create your account')}
                  >Register Now
</div></Link>

                  
                  <Link to={'/login'}
                   className='text-[20px] font-bold    rounded-full py-4 px-20'>
                  <div 
                  onClick={() => setText('Sign in to SkyTech')}
               >Login
</div></Link>

        
                  </div>
                  

                  <div className="">
      <div className="card-body">
          

      <div className="form-control">
  <label className="label">
  </label>
  <input type="text" placeholder="First Name" className="input bg-[#f2f0ef] hover:bg-[white]  py-8 input-bordered" />
</div>
<div className="form-control">
  <label className="label">
  </label>
  <input type="text" placeholder="Last Name" className="input bg-[#f2f0ef] hover:bg-[white]  py-8 input-bordered" />
  
</div>
          



  <div className="form-control">
  <label className="label">
  </label>
  <input type="text" placeholder="Email" className="input bg-[#f2f0ef] hover:bg-[white]  py-8 input-bordered" />
</div>
<div className="form-control">
  <label className="label">
  </label>
  <input type="text" placeholder="Password" className="input bg-[#f2f0ef] hover:bg-[white]  py-8 input-bordered" />

</div>
<div className="form-control mt-6">
<button className="btn  bg-gradient-to-r from-[#6cc17e] to-[#098b99] outline-none  border-none text-[white] text-[15px] h-[60px]   rounded-md  px-10 ">Register Now </button>
</div>
</div>

  </div>
              </div>
    
      <div>
              


</div>   
      
     
    </div>

        </div>

      </div>
        




        





          

    </div>
    </div>
  )
}

export default Registration