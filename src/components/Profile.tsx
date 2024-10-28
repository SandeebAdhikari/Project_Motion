import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
} from "../animations/animations";

const Profile: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="p-5 rounded-lg bg-transparent"
        variants={headContainerAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1
          variants={headTextAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:text-[8rem]"
        >
          SANDEEB ADHIKARI
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Profile;
