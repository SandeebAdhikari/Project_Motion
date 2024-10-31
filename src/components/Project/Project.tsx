import { AnimatePresence, motion, useInView } from "framer-motion";
import { slideAnimation } from "../animations/animations";
import { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "../../data/projects";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleLoop = () => {
    if (currentIndex === PROJECT_DATA.length) {
      setIsResetting(true);
      setTimeout(() => {
        setCurrentIndex(0);
        setIsResetting(false);
      }, 100);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleLoop, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const albertQuotes = [
    {
      quote:
        '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."',
      author: "Albert Einstein",
    },
  ];
  return (
    <AnimatePresence>
      <div className="mt-[225px] flex flex-col w-full h-[1024px]">
        {albertQuotes.map((quote, index) => (
          <motion.h1
            key={index}
            ref={ref}
            className="text-center font-bold text-5xl"
            variants={slideAnimation("up")}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            exit="exit"
          >
            {quote.quote}{" "}
            <motion.h1
              key={index}
              ref={ref}
              className="text-center font-bold text-5xl"
              variants={slideAnimation("up")}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              exit="exit"
            >
              - {quote.author}
            </motion.h1>
          </motion.h1>
        ))}
        <div className=" mt-10 border mb-10 overflow-hidden h-5/6">
          <motion.div
            className="flex h-full"
            animate={{ x: isResetting ? 0 : `-${currentIndex * 100}%` }}
            transition={{ duration: isResetting ? 0 : 1, ease: "easeInOut" }}
          >
            {[...PROJECT_DATA, ...PROJECT_DATA].map((project, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center border p-10 "
              >
                <ProjectCard
                  name={project.projectName}
                  image={typeof project.image === "string" ? project.image : ""}
                  iconImage={project.icon}
                  url={project.url}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Project;
