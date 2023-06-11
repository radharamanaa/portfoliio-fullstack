import React from "react";
import { motion } from "framer-motion";

const RightHeader: React.FC = () => {
  return (
    <motion.div className="flex justify-around items-center gap-4 flex-wrap mt-8 md:mt-0">
      <motion.div className="cursor-pointer text-white font-raleway">
        Experience
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway">
        Skills
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway">
        Projects
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway">
        Education
      </motion.div>
      <motion.div className="cursor-pointer text-white font-raleway">
        Contact Me
      </motion.div>
    </motion.div>
  );
};

export default RightHeader;
