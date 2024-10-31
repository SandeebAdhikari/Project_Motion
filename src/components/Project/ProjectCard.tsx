import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation } from "../animations/animations";

const ProjectCard = () => {
  return (
    <AnimatePresence>
      <div className="flex flex-col items-center justify-center w-full ">
        <motion.img
          //src={ProjectImg}
          alt="Project1"
          variants={fadeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </div>
    </AnimatePresence>
  );
};

export default ProjectCard;
