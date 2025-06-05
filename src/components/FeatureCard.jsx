import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({data, reference}) => {
  const {ref, inView} = useInView({ threshold: 0.2});
  return (
    <motion.div
    ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeIn" }}
     className='feature-card w-full sm:hover:scale-105 transition ease duration-200 rounded-2xl shadow-md bg-gradient-to-br from-[#101021] to-[#121244] md:w-auto text-center'>
        <div className='feature-content text-center px-3 py-12 md:py-14'>
          <span className='flex justify-center text-3xl text-sky-300'>{data.icon}</span>
          <h1 className='feature-heading text-xl sm:text-3xl md:text-2xl mt-4 mb-5 text-sky-600 font-anton'>{data.title}</h1>
          <p className='feature-description text-sm sm:text-xl md:text-lg font-sans'>{data.description}</p>
        </div>
    </motion.div>
  )
}

export default FeatureCard