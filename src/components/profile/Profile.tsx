import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  fadeAnimation,
  headTextAnimation,
  slideAnimation,
} from "../animations/animations";
import GradualSpacing from "../animations/GradualSpacing";
import RotateBetweenWords from "../animations/RotateBetweenWords";

import Profile_Pic from "/images/profile-pic.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Profile: React.FC = () => {
  const [firstGradualComplete, setFirstGradualComplete] = useState(false);
  const [secondGradualComplete, setSecondGradualComplete] = useState(false);
  const [firstBottonComplete, setFirstBottonComplete] = useState(false);

  return (
    <AnimatePresence>
      <div className="mt-[200px] h-auto md:h-[620px] flex flex-col md:flex-row justify-between w-full px-5 md:px-0">
        <div className="flex flex-col mt-10 md:mt-[40px] text-3xl md:text-6xl">
          <GradualSpacing
            text="Transforming Ideas Into"
            onComplete={() => setFirstGradualComplete(true)}
          />
          {firstGradualComplete && (
            <div className=" text-orange-200">
              <GradualSpacing
                text="Digital Reality"
                onComplete={() => setSecondGradualComplete(true)}
              />
            </div>
          )}
          {secondGradualComplete && (
            <div className="mt-5 flex flex-col md:flex-row items-center justify-center">
              <motion.h1
                variants={headTextAnimation}
                className="text-lg md:text-2xl"
              >
                Hi, I'm Sandeeb, I am{" "}
              </motion.h1>
              <h1 className="mx-2 text-slate-600 text-center md:text-left">
                <RotateBetweenWords
                  words={[
                    "Full-Stack Developer",
                    "Freelancer",
                    "OpenSource Contributor",
                  ]}
                />
              </h1>
            </div>
          )}
          {secondGradualComplete && (
            <div className="mt-5 flex flex-col md:flex-row justify-center w-full gap-3">
              <motion.button
                variants={slideAnimation("up")}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                onAnimationComplete={() => setFirstBottonComplete(true)}
                className="w-36 flex mx-auto md:mx-0 items-center h-12 px-5 border rounded-xl gap-2"
                onClick={() => (window.location.href = "/SandeebResume.pdf")}
              >
                <span className="ml-2 font-bold text-lg">
                  <GradualSpacing text="Resume" />
                </span>
                <FaArrowUpRightFromSquare size={16} />
              </motion.button>
              {firstBottonComplete && (
                <motion.button
                  variants={slideAnimation("up")}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover={{ scale: 1.1 }}
                  className="w-32 bg-orange-200 flex mx-auto md:mx-0 items-center h-12 px-5 hover:border rounded-xl"
                  onClick={() =>
                    (window.location.href = "mailto:sandeebadhikari@gmail.com")
                  }
                >
                  <span className="ml-2 font-bold text-black text-lg">
                    <GradualSpacing text="Contact" />
                  </span>
                </motion.button>
              )}
            </div>
          )}
        </div>
        {firstGradualComplete && (
          <motion.img
            variants={fadeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            src={Profile_Pic}
            alt="profile"
            className="h-[300px] w-[300px] md:h-[400px] md:w-[350px] rounded-full hover:border border-spacing-0.5 border-orange-200 mx-auto md:mx-0"
          />
        )}
      </div>
    </AnimatePresence>
  );
};

export default Profile;
