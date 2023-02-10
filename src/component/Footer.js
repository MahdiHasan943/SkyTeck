import React from 'react'
import letter from '../image/letter-s.png'


const Footer = () => {
  return (
    <div>
      <footer className="footer  p-20 bg-[#f6fafb] text-[#111111]">
  <div>
  <div className="flex  items-center"> 
              
            <img src={letter} alt="" />
            <p className='    text-2xl text-[#111111] text-center font-extrabold tracking-wide #302e2c text-shadow-lg'>
             SkyTech
                  </p>

          </div>
          <p className='text-[#646464] text-[16px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Mattis mi suscipit <br /> bibendum sit amet, consectetur.</p>
  </div> 
  <div> 
          <span className="footer-title opacity-100 text-[#111111]">Quick Link</span> 
    <a className="text-[#646464] text-[16px] link link-hover">          Courses</a> 
    <a className="text-[#646464] text-[16px] link link-hover">About Us</a> 
    <a className="text-[#646464] text-[16px] link link-hover">Terms & Conditions</a> 
  </div> 
  <div>
          <span className="footer-title opacity-100 text-[#111111]">Help Center</span> 
          

    <a className="text-[#646464] text-[16px] link link-hover">Support</a> 
    <a className="text-[#646464] text-[16px] link link-hover">Get Help</a> 
    <a className="text-[#646464] text-[16px] link link-hover">Privacy Policy</a> 
  </div> 
  <div>
          <span className="footer-title opacity-100 text-[#111111]">Contact Info</span> 
    <a className="text-[#646464] text-[16px] link link-hover">       Call Us: 1-885-665-2022</a> 
    <a className="text-[#646464] text-[16px] link link-hover">Address: +7011 Vermont Ave, Los Angeles, <br /> CA 90044</a> 
    <a className="text-[#646464] text-[16px] link link-hover">Mail Us: hello@edmy.com</a>
  </div>
      </footer>
      <div className="border-t-[1px] bg-[#f6fafb] py-4 border-[#eee]">
        <p className='text-center text-[#7dc2c4]'>© SkyTeck 2023 is Proudly Owned by <span className='text-[#098ba2]'>Mahdi Hasan</span></p>
      </div>
    </div>
  ) 
}

export default Footer