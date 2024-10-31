import { AnimatePresence, motion, useInView } from "framer-motion";
import { headTextAnimation, slideAnimation } from "../animations/animations";
import { useRef } from "react";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const albertQuotes = [
    {
      quote:
        '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."',
      author: "Albert Einstein",
    },
  ];
  return (
    <AnimatePresence>
      <div className="mt-[225px] flex flex-col w-full h-[600px]">
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
      </div>
    </AnimatePresence>
  );
};

export default Project;
