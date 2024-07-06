import React from "react";
import home1 from '../img/home1.png'
import { About,Description,Image, Hide } from "../styles";

import { easeOut, motion, stagger } from 'framer-motion'

const AboutSection = () => {
  // const titleAnim = {
  //   hidden: {opacity: 0},
  //   show: {opacity:1, transition: {duration: 2 }}
  // }
  // const container = {
  //   hidden: {x:100},
  //   show: {x: 0,
  //      transition:
  //      { duration: 1.5,
  //        ease: "easeOut",
  //        staggerChildren: 0.75,
  //        when:'beforeChildren'
  //          } }
  // }
  return(
    <About>
      <Description>
        <motion.div>

             <Hide>
              <motion.h2 >We work to make</motion.h2>
             </Hide>
             <Hide>
              <motion.h2 >your <span>dreams</span> come</motion.h2>
             </Hide>
             <Hide>
              <motion.h2 >true.</motion.h2>
             </Hide>

        </motion.div>
        <p>Contact Us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  )
}

//styled Components

export default AboutSection