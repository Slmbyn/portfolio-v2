import React from 'react'
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem"}
}

const TabButton = ({ active, selectTab, children }) => {
    // const buttonClasses = 'text-white border-b border-purple-500'
    const buttonClasses = 'text-white'
    
  return (
    <div>
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        <motion.div
          animate= { active ? "active" :  "default"}
          variants={variants}
          className='h-1 bg-purple-500 mt-1 mr-3'
        >

        </motion.div>
        </button>
    </div>
  )
}

export default TabButton
