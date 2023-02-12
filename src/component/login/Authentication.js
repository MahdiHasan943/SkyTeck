// import React, { useState } from 'react'
// import { Tab } from '@headlessui/react'
// import Registration from './Registration'
// import Login from './Login'

// import './auth.css'
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


// const Authentication = () => {

  
//   const [text, setText] = useState('Create your account');

//   return (
//     <div>
//                 <div>
          
//           <div className="h-[300px] flex justify-center items-center bg-gradient-to-r from-[#4eb086] to-[#098b99]" >
//               <div className="">
//               <h1 className='text-white  font-bold  text-[55px]'>Authentication</h1>
//               <p className='text-white text-center text-[18px] py-4 font-semibold'><span className=''>Home</span> <span className='text-2xl font-extrabold px-2'>.</span> <span>AddToCart</span></p>
//               </div>

//         </div>
        


//         <div className="px-4 sm:flex sm:px-8 py-14">
//         <div className=" sm:w-[50%]  ">
//           <img className='mx-auto w-full' src="https://edmy-react.hibootstrap.com/images/register-img.png" alt="" />
//         </div>
//           <div className="sm:w-[50%] px-20  mx-auto">
            
         
//             <h1 className='text-[#292a2d] text-[34px] px-8 font-bold  pb-10'>{text}</h1>
//             <Tab.Group>
//               <div className="px-8">
//               <Tab.List className="flex px-2 py-4 bg-[white] box  rounded-full  justify-between items-center  ">
//                 <Tab
//                     onClick={() => setText('Create your account')}
//                   className={({ selected }) =>
                    
//                  classNames(
//                    '  text-[20px] font-bold border-none outline-none     rounded-full py-4 px-10',
//                    '',
//                    selected
//                      ? ' bg-gradient-to-r from-[#6cc17e] to-[#098b99] outline-none  border-none text-[white] text-[20px] font-bold   rounded-full py-4 px-10'
//                      : ''
//                  )
//                }>Register Now
// </Tab>
//                 <Tab 
//                   onClick={() => setText('Sign in to SkyTech')}
//                  className={({ selected }) =>
       
//                   classNames(
//                     '   text-[20px] outline-none border-none  font-bold rounded-full py-4 px-10',
//                     '',
//                     selected
//                       ? 'bg-gradient-to-r from-[#6cc17e]  to-[#098b99] outline-none  border-none  text-[white] text-[20px] font-bold  rounded-full  px-20'
//                       : ''
//                  )
//                }>Login
// </Tab>
        
//       </Tab.List>
//               </div>
    
//       <Tab.Panels>
//                 <Tab.Panel><Registration></Registration></Tab.Panel>
//         <Tab.Panel> <Login></Login> </Tab.Panel>
      
//       </Tab.Panels>
//     </Tab.Group>

//         </div>

//       </div>
          

//     </div>
//     </div>
//   )
// }

// export default Authentication