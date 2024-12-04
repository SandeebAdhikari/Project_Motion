import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React from "react";
import MultiDirectionSlide from "../animations/MultiDirectionSlide";
import SkillShowCase from "../skills/SkillShowCase";
import { SKILLS_DATA } from "../../data/skills";

import AboutImg from "/images/about_me.png";

import AboutCard from "./AboutCard";
import Education from "./Education";

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const leftCardX = useTransform(scrollYProgress, [0, 0.1], ["-100%", "10%"]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.1], ["100%", "-10%"]);

  const description =
    "Hi, I'm Sandeeb, a Full Stack Developer with a passion for blending technology and creativity to build meaningful digital experiences. I love creating everything from full-stack applications—like a banking management system and an e-commerce platform—to engaging visuals, from 3D animations in Blender to 2D designs in Procreate.AI excites me the most; I’m fascinated by its potential to empower people and drive innovation. My future goal is to start a company focused on discovering and nurturing talent worldwide, helping individuals realize their potential regardless of where they’re from. Driven by curiosity and creativity, I’m committed to building solutions that make a real impact. Let’s create something amazing together!";
  return (
    <AnimatePresence>
      <div className="text-7xl w-full h-[660px]">
        <MultiDirectionSlide text1="Passion Fuels Purpose!" />
        <div className="text-2xl ">
          <MultiDirectionSlide text2="Get To Know More" />
        </div>

        <div className="flex justify-between items-center w-full ">
          <motion.div style={{ x: leftCardX }} className="flex-1 max-w-[45%]">
            <img src={AboutImg} />
          </motion.div>

          <motion.div style={{ x: rightCardX }} className="flex-1 max-w-[45%]">
            <AboutCard title="BIOGRAPHY" description={description} />
          </motion.div>
        </div>
      </div>
      <SkillShowCase skills={SKILLS_DATA} />
      <Education />
    </AnimatePresence>
  );
};

export default About;
