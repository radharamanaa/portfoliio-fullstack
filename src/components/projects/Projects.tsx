import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThisProject from "./ThisProject";
import TaskyProj from "./TaskyProj";
import DuitkuFinanceAppProject from "./DuitkuFinanceAppProject";

const Projects: React.FC = () => {
  const [articleNo, setArticleNo] = useState<number>(1);
  function moveRight() {
    setArticleNo((art) => {
      if (art == 3) {
        return 1;
      } else {
        return art + 1;
      }
    });
  }
  function moveLeft() {
    setArticleNo((art) => {
      if (art == 1) {
        return 3;
      } else {
        return art - 1;
      }
    });
  }
  return (
    <div className="">
      <div className="max-w-6xl mx-auto bg-slate-100 rounded-2xl p-4 shadow-md shadow-slate-400 mt-8">
        <div className="flex flex-col border-dashed border border-slate-800 rounded-lg w-11/12 mx-auto justify-start">
          <div className="grid grid-cols-12 text-sm md:text-lg p-2 text-slate-800 mx-auto first-letter:text-2xl relative">
            <div
              className="rounded-100 p-2 w-12 left-arr flex top-1/3 relative
              -left-6
            text-4xl  text-slate-900 cursor-pointer"
              onClick={moveLeft}
            >
              <div className="w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6  md:w-12 md:h-12"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <AnimatePresence>
              {articleNo == 1 && (
                <motion.div
                  className="col-span-8 main-content"
                  key={1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <ThisProject />
                </motion.div>
              )}
              {articleNo == 2 && (
                <motion.div
                  className="col-span-8 main-content"
                  key={2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  //   exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                  <TaskyProj />
                </motion.div>
              )}
              {articleNo == 3 && (
                <motion.div
                  className="col-span-8 main-content"
                  key={3}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  //   exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                  <DuitkuFinanceAppProject />
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className="px-2 py-2 right-arr flex top-1/3 relative
              -right-4
             text-4xl justify-start
             text-slate-900 cursor-pointer"
              onClick={moveRight}
            >
              <div className=" w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-12 md:h-12"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
