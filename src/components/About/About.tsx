import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import MultiDirectionSlide from "../../animations/MultiDirectionSlide";
import AboutCard from "./AboutCard";

const About: React.FC = () => {
  const description =
    "I am a Full-Stack Developer with experience in building web applications using React, Next.js, and Node.js. I am also a freelance developer and open-source contributor.";
  return (
    <AnimatePresence>
      <div className="text-7xl w-full h-[660px]">
        <MultiDirectionSlide text1="About Me" />
        <div className="text-xl">
          <MultiDirectionSlide text2="Get To Know More" />
        </div>
        <div className="flex justify-between items-center w-full gap-5">
          <AboutCard title="Experience" description={description} />
          <AboutCard />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
