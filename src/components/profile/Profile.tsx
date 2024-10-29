import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  fadeAnimation,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../../animations/animations";
import GradualSpacing from "../../animations/GradualSpacing";
import Profile_Pic from "../../../public/images/profile-pic.png";
import { SiReaddotcv } from "react-icons/si";
import RotateBetweenWords from "../../animations/RotateBetweenWords";

const Profile: React.FC = () => {
  const [firstGradualComplete, setFirstGradualComplete] = useState(false);
  const [secondGradualComplete, setSecondGradualComplete] = useState(false);
  const [firstBottonComplete, setFirstBottonComplete] = useState(false);

  return (
    <AnimatePresence>
      <div className="mt-[200px] min-h-screen flex justify-between w-full">
        <div className="flex flex-col mt-[40px]">
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
            <div className="mt-5 flex items-center justify-center">
              <motion.h1 variants={headTextAnimation} className="text-2xl">
                Hi, I'm Sandeeb, I am{" "}
              </motion.h1>
              <h1 className="mx-2 text-slate-600">
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
            <div className="mt-3 flex justify-center w-full">
              <motion.button
                variants={slideAnimation("up")}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                onAnimationComplete={() => setFirstBottonComplete(true)}
                className="w-32 flex mr-5 items-center h-12 px-5 border rounded-xl"
              >
                <SiReaddotcv />
                <motion.span className="ml-2 font-bold text-lg">
                  Resume
                </motion.span>
              </motion.button>
              {firstBottonComplete && (
                <motion.button
                  variants={slideAnimation("up")}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover={{ scale: 1.1 }}
                  className="w-32 bg-orange-200  flex items-center h-12 px-5 hover:border rounded-xl"
                >
                  <motion.span className="ml-2 font-bold text-black text-lg">
                    Contact
                  </motion.span>
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
            className="h-[400px] w-[350px] rounded-full hover:border border-spacing-0.5 border-orange-200"
          />
        )}
      </div>
    </AnimatePresence>
  );
};

export default Profile;
