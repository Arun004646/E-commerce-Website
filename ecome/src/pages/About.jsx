import React from 'react'
import Title from '../components/Title.jsx'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum saepe quia aliquam natus ab! Consectetur cupiditate totam quidem molestiae, corporis ipsum reprehenderit voluptates doloremque soluta nisi necessitatibus maxime porro.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem voluptatum natus incidunt recusandae, nihil itaque excepturi officiis fuga? Reiciendis molestias alias reprehenderit itaque, illo ad ab omnis voluptatum pariatur.</p>
             <b className='text-gray-800'>our Mission</b>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem distinctio nisi labore pariatur dignissimos, assumenda nihil vel, saepe nostrum magni aut aspernatur neque molestias libero, dolorum molestiae aliquid cupiditate! Eius?</p>
         </div>
      </div>
      <div className='text-4x1 py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='boredr px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro voluptate, tempore molestias, magnam voluptates similique quia suscipit eaque ha</p>
             </div>
             <div className='boredr px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro voluptate, tempore molestias, magnam voluptates similique quia suscipit eaque ha</p>
             </div>
             <div className='boredr px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro voluptate, tempore molestias, magnam voluptates similique quia suscipit eaque ha</p>
             </div>
      </div>
      <Newsletterbox/>

    </div>
  )
}

export default About