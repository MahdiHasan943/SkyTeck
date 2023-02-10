import React from 'react'

const Registration = () => {
  return (
      <div>
          
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
        <button className="btn  bg-gradient-to-r from-[#6cc17e] to-[#098b99] outline-none  border-none text-[white] text-[15px]   rounded-md py-8 px-10 ">Register Now </button>
        </div>
      </div>

          </div>
    </div>
  )
}

export default Registration