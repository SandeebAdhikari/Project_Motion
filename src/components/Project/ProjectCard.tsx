// ProjectCard.tsx
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation } from "../animations/animations";

interface ProjectCardProps {
  name: string;
  image: string;
  iconImage: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  iconImage,
  url,
}) => {
  return (
    <AnimatePresence>
      <div className=" flex flex-col border items-center p-6 shadow-lg rounded-lg w-1/2 h-5/6">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-3/4  rounded-md border"
          variants={fadeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <img
          src={iconImage}
          alt={`${name} Icon`}
          className="w-8 h-8 mr-2 mt-2"
        />
        <h2 className="mt-4 text-2xl font-bold">{name}</h2>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-500 hover:underline"
        >
          Visit Project
        </a>
      </div>
    </AnimatePresence>
  );
};

export default ProjectCard;
