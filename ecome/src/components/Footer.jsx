import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
           <div>
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam dolor, sequi consequatur illum eligendi eveniet, pariatur magni sapiente distinctio rem quos architecto quam atque quaerat quo, eaque at numquam nulla!</p>
           </div>
           <div>
             <p className='text-x1 font-medium mb-5'>COMPANY</p>
             <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
             </ul>
           </div>
           <div>
             <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
                          <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>+919360155203</li>
                            <li>helloarun@gmail.com</li>
                        </ul>
           </div>
          
        </div>
         <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com-All Right Reserved</p>
           </div>
    </div>
  )
}

export default Footer