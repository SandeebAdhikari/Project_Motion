import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation } from "../animations/animations";
import GitHubImg from "../../assets/icons/github.svg";

interface ProjectCardProps {
  name: string;
  image: string;
  iconImage: string[];
  url: string;
  invertColor?: boolean;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  iconImage,
  url,
  invertColor,
  github,
}) => {
  return (
    <AnimatePresence>
      <div
        className="flex flex-col items-center p-6 shadow-3xl rounded-lg w-1/2 h-5/6 hover:scale-105 transition duration-300 ease-in-out
              border border-white/50 border-t-white/10 border-b-white/10"
      >
        <motion.img
          src={image}
          alt={name}
          className="w-fit h-3/4 rounded-md border hover:border-slate-600 hover:border-spacing-2 hover:scale-105 transition duration-300 ease-in-out"
          variants={fadeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <div className="mt-2 flex justify-center items-center w-full">
          {iconImage.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`${name} Icon ${index}`}
              className={` w-8 h-8 mr-2 ${invertColor ? "invert" : ""}`}
            />
          ))}
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white">{name}</h2>
        <div className="flex justify-between w-full items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-white underline hover:text-orange-200"
          >
            Visit Project
          </a>
          <img
            src={GitHubImg}
            rel="noopener noreferrer"
            className="mt-4 w-10 h-10 text-blue-500 hover:underline invert hover:border hover:border-orange-200 rounded-full hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => window.open(github)}
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectCard;
