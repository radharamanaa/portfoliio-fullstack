import React from "react";
import { motion } from "framer-motion";
import linkedin from "../images/174857.png";

const ContactMe: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto md:max-w-5xl w-full justify-start items-center h-screen ">
      <div className="text-4xl lg:text-6xl font-playfair flex justify-center md:justify-start md:mt-32 ">
        Click to contact me
      </div>
      <div className="">
        <div className="text-lg font-playfair w-full mt-4 underline">
          <a
            href="https://www.linkedin.com/in/abhijeet-mishra-24a3b695/"
            target="_blank"
          >
            <div className="w-32 md:w-64">
              <img src={linkedin} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
