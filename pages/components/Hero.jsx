import React from 'react'
import { Icon } from '@iconify/react';
// import { Skills, Projects, Contacts } from "./";
import Skills from './Skills'

function Hero() {
  return (
    <div id="hero" className='flex flex-row gap-16 h-full py-16'>
      <div className="flex flex-col justify-between basis-2/5">
        <div className="flex flex-col gap-4">
          <h1 className='text-7xl font-bold '>Hello, I'm <br /> <span className='hover:text-primary transition duration-150 cursor-pointer'>Paul Javier</span></h1>
          <p>Do exercitation qui labore enim. Occaecat consectetur mollit minim non velit nulla nisi non. Pariatur deserunt mollit ullamco ullamco culpa pariatur deserunt sunt anim ipsum. Officia proident tempor et ea cupidatat proident aute anim. Ea sunt anim consequat voluptate consectetur minim sint proident magna exercitation ullamco occaecat. </p>
        </div>
        <div className="flex flex-row gap-10">
          <button className="flex flex-row gap-2 items-center hover:text-primary transition duration-150">
            <Icon icon="mdi:github" width="26" height="26"/>
            <span>Github</span>
            <Icon icon="fa6-solid:arrow-up-right-from-square" />
          </button>
          <button className="flex flex-row gap-2 items-center hover:text-primary transition duration-150">
            <Icon icon="mdi:linkedin" width="26" height="26" />
            <span>LinkedIn</span>
            <Icon icon="fa6-solid:arrow-up-right-from-square" />
          </button>
          <button className="flex flex-row gap-2 items-center hover:text-primary transition duration-150">
            <Icon icon="ic:baseline-facebook" width="26" height="26" />
            <span>Facebook</span>
            <Icon icon="fa6-solid:arrow-up-right-from-square" />
          </button>
        </div>
      </div>
      <div className="basis-3/5 w-full h-full">
        <Skills/>
      </div>
    </div>
  )
}

export default Hero