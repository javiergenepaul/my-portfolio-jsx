import { useEffect, useState,useRef,useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SkillCard from './UI/SkillCard'

gsap.registerPlugin(ScrollTrigger);


function Skills() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to("#box", {
      //   rotation: "+=360"
      // });
      // gsap.to("#box", {
      //   rotation: 360,
      //   x: 400,
      //   duration: 3,
      //   scrollTrigger: {
      //     trigger: "#section ",
      //     start: "top 20%",
      //     end: "bottom 20%",  
      //     markers: true,
      //     scrub: 2,
      //     pinSpacing: false,
      //     // pinSpacer: false, 
      //     pin: "#hero"
      //   }
      // });

    })
    return () => {
      ctx.revert();
    };
  }, []);
  
  return (
    <div className='w-full flex flex-col gap-4'>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>  
    </div>
  )
}

export default Skills