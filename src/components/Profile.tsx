import {
  useScroll,
  useTransform,
  AnimatePresence,
  motion,
} from "framer-motion";
import React from "react";
import { headTextAnimation, slideAnimation } from "../animations/animations";

const Profile: React.FC = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 200], [1, 0.1] as [number, number]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8] as [number, number]);
  return (
    <AnimatePresence>
      <motion.div
        className="p-5 rounded-lg bg-transparent"
        variants={slideAnimation("left")}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          variants={headTextAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1 className="lg:text-[8rem]">SANDEEB ADHIKARI</h1>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Profile;
