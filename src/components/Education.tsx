import React from "react";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto bg-slate-700/50 flex gap-4 flex-wrap 
    justify-center mb-8 mt-8 text-4xl text-white"
      initial={{ y: "200vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 40 }}
    >
      Education - In Progress
    </motion.div>
  );
};

export default Education;
