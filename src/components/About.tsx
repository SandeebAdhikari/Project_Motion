import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { slideAnimation } from "../animations/animations";

const About: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div {...slideAnimation("down")} className="p-5  text-white">
        HElllo
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
