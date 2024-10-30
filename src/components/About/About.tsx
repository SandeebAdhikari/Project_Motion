import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React from "react";
import MultiDirectionSlide from "../../animations/MultiDirectionSlide";
import EducationImg from "../../../public/images/education.png";
import ExperienceImg from "../../../public/images/experience.png";
import AboutCard from "./AboutCard";

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const leftCardX = useTransform(scrollYProgress, [0, 0.6], ["-100%", "0%"]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"]);

  const description =
    "I am a Full-Stack Developer with experience in building web applications using React, Next.js, and Node.js. I am also a freelance developer and open-source contributor.";

  return (
    <AnimatePresence>
      <div className="text-7xl w-full h-[660px]">
        <MultiDirectionSlide text1="About Me" />
        <div className="text-xl mb-10">
          <MultiDirectionSlide text2="Get To Know More" />
        </div>

        <div className="flex justify-between items-center w-full gap-5">
          <motion.div style={{ x: leftCardX }} className="flex-1">
            <AboutCard
              title="Experience"
              description={description}
              image={ExperienceImg}
            />
          </motion.div>

          <motion.div style={{ x: rightCardX }} className="flex-1">
            <AboutCard
              title="Education"
              description={description}
              image={EducationImg}
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
