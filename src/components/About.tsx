import {
  useScroll,
  useTransform,
  AnimatePresence,
  motion,
} from "framer-motion";
import React from "react";
import { slideAnimation } from "../animations/animations";

const About: React.FC = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [300, 600], [0, 1] as [number, number]);
  const scale = useTransform(scrollY, [300, 600], [0, 1] as [number, number]);

  return (
    <AnimatePresence>
      <motion.div
        {...slideAnimation("down")}
        className="p-5  text-white"
      ></motion.div>
    </AnimatePresence>
  );
};

export default About;
