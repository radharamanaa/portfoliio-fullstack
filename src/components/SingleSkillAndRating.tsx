import React from "react";
import { SkillRating } from "../types/types";
import { AnimatePresence, motion } from "framer-motion";

interface SkillAndRatingProps {
  skillrating: SkillRating;
  i: number;
  expanded: false | number;
  setExpanded: (a: false | number) => void;
}
const style = {
  background: "#0055ff",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
  height: "40px",
};
const SingleSkillAndRating: React.FC<SkillAndRatingProps> = ({
  skillrating,
  i,
  expanded,
  setExpanded,
}) => {
  const isOpen = i === expanded;

  return (
    <motion.div
      className="flex flex-col w-64"
      initial={{ y: "-150vh" }}
      animate={{ y: 0 }}
      transition={{ delay: i * 0.25 }}
    >
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="w-64 p-2"
        style={style}
      >
        <div className="flex justify-around">
          <div className="pr-2">{skillrating.skill}</div>
          <div className="ratings flex items-center">
            <Ratings no={skillrating.rating} />
          </div>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="bg-slate-200 p-8 rounded-lg mt-4"
          >
            <ContentPlaceholder para={skillrating.info} />
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
const ContentPlaceholder: React.FC<{ para: string }> = ({ para }) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="max-w-sm text-slate-900 justify-center font-raleway"
  >
    {para}
  </motion.div>
);
export default SingleSkillAndRating;

const Ratings: React.FC<{ no: number }> = ({ no }) => {
  let arr: number[] = [];
  for (let index = 0; index < 5; index++) {
    arr.push(index + 1);
  }
  return (
    <div className="rating flex items-center">
      {arr.map((item) => {
        function doIt() {
          if (item <= no) {
            return (
              <div className="w-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <polygon
                    points="50,0 65,35 100,35 70,60 80,95 50,75 20,95 30,60 0,35 35,35"
                    fill="yellow"
                  />
                </svg>
              </div>
            );
          } else {
            return (
              <div className="w-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <polygon
                    points="50,0 65,35 100,35 70,60 80,95 50,75 20,95 30,60 0,35 35,35"
                    stroke="black"
                    fill="none"
                    stroke-width="4"
                  />
                </svg>
              </div>
            );
          }
        }
        return doIt();
      })}
    </div>
  );
};
