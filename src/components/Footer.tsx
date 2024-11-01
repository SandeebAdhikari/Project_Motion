import { motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "./animations/animations";

const Footer = () => {
  return (
    <div className="mt-[150px] border-t border-orange-200  h-[150px]">
      <div className="flex mt-10 justify-between w-full text-xl font-semibold">
        <motion.h1
          variants={slideAnimation("left")}
          initial="initial"
          whileInView="animate"
          exit="exit"
        >
          SANDEEB <strong className="text-slate-600">ADHIKARI</strong>
        </motion.h1>
        <motion.h1
          variants={slideAnimation("right")}
          whileInView="animate"
          initial="initial"
          exit="exit"
        >
          2024 © All Rights Reserved.
        </motion.h1>
      </div>
    </div>
  );
};

export default Footer;
