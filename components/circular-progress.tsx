// components/CircularProgressBar.js

import React from 'react';
import {motion } from "framer-motion"
interface Props {
    percentage: Number
}

const CircularProgressBar = ({ percentage }: Props) => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <div className="overflow-hidden flex justify-center items-center h-12 w-full border-2 border-gray-300">
        <motion.div className=" relative bg-blue-400 w-full h-full origin-left " style={{ scaleX: `${percentage}%`}}></motion.div>
        <div className=" absolute  flex items-center justify-center text-slate-950 font-bold text-2xl">
        {`${percentage.toFixed(0)}`}%
      </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
