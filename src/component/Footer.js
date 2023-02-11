import React from 'react'
import letter from '../image/letter-s.png'

import { motion } from "framer-motion";

import './product.css'

const Footer = () => {
  return (
    <div  >
      <footer className="footer  p-20 bg-[#f6fafb] text-[#111111]">
  <div>
  <div className="flex   items-center"> 
              
            <img className=''  src={letter} alt="" />
            <p className='    text-2xl text-[#111111] text-center font-extrabold   text-shadow-lg'>
             SkyTech
                  </p>

          </div>
          <p className='text-[#646464] text-[16px]  leading-8'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Mattis mi suscipit <br /> bibendum sit amet, consectetur.</p>
  </div> 
  <div> 
          <span className="footer-title opacity-100 text-[#111111]">Quick ll</span> 
    <a className="text-[#646464] text-[16px] ll l">          Courses</a> 
    <a className="text-[#646464] text-[16px] ll l">About Us</a> 
    <a className="text-[#646464] text-[16px] ll l">Terms & Conditions</a> 
  </div> 
  <div>
          <span className="footer-title opacity-100 text-[#111111]">Help Center</span> 
          

    <a className="text-[#646464] text-[16px] ll l">Support</a> 
    <a className="text-[#646464] text-[16px] ll l">Get Help</a> 
    <a className="text-[#646464] text-[16px] ll l">Privacy Policy</a> 
  </div> 
  <div>
          <span className="footer-title opacity-100 text-[#111111]">Contact Info</span> 
    <a className="text-[#646464] text-[16px] ll l">       <span className='text-[#098b99]'>Call Us:</span>  1-885-665-2022</a> 
    <a className="text-[#646464] text-[16px] ll l">  <span className='text-[#098b99]'>Address:</span>  +7011 Vermont Ave, Los Angeles, <br /> CA 90044</a> 
    <a className="text-[#646464] text-[16px] ll l">  <span className='text-[#098b99]'>Mail Us:</span> hello@edmy.com</a>
  </div>
      </footer>
      <div className="border-t-[1px] bg-[#f6fafb] py-4 border-[#eee]">
        <p className='text-center text-[#111]'>© SkyTeck 2023 is Proudly Owned by <span className='text-[#098b99]'>Mahdi Hasan</span></p>
      </div>
    </div>
  ) 
}

export default Footer