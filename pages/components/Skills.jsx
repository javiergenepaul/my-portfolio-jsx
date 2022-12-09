import { useEffect, useState,useRef,useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Skills() {
  
  // useEffect(() => {
  //   gsap.to("#box", {
  //     rotation: 360,
  //     x: 400,
  //     duration: 3,
  //     scrollTrigger: {
  //       trigger: "#box",
  //       start: "top center",
  //       end: "top 100px",  
  //       markers: true,
  //       scrub: 2,
  //       pinSpacing: false,
  //       pin: "#ghost"
  //     }
  //   });
  // }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to("#box", {
      //   rotation: "+=360"
      // });
      gsap.to("#box", {
        rotation: 360,
        x: 400,
        duration: 3,
        scrollTrigger: {
          trigger: "#box",
          start: "top top",
          end: "+=300px",  
          markers: true,
          scrub: 2,
          pinSpacing: false,
          pin: "#hero"
        }
      });

    })
    // gsap.to('#box', {
    //   scrollTrigger:"#box",
    //   toggleActions: "restart none none none",
    //   x:400,
    //   rotation:360, 
    //   duration:3
    // });


  
    return () => {
      ctx.revert();
    };
  }, []);

  // const onEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  // };
  // const onLeave = ({currentTarget}) => {
  //   gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  // };
  
  return (
    <div className='w-full h-full relative'>
      <div id='box' className="p-10 bg-primary inline-block cursor-pointer relative z-10">sample</div>
      <div id='ghost' className="p-10 bg-white text-black inline-block cursor-pointer absolute left-0">sample</div>
    </div>
  )
}

export default Skills