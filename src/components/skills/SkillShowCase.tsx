import { AnimatePresence } from "framer-motion";
import SkillBox, { type SkillBoxProps } from "./SkillBox";
import FadeRight from "../animations/FadeRight";
import { useScreenBreakpoint } from "../../hooks/useScreenBreakpoint";
import { useDebounceValue } from "../../hooks/useDebounceValue";
import BlurIn from "../animations/BlurIn";

export interface SkillShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillBoxProps[];
  }[];
}

export default function SkillShowcase({ skills }: SkillShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);

  return (
    <section className="overflow-hidden mt-[150px]">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-3xl text-center sm:text-3xl">
          <BlurIn word="Skills" />
        </h2>
        {skills.map((section) => {
          console.log("Section:", section);
          return (
            <AnimatePresence key={section.sectionName}>
              <div className="mt-4">
                <span className=" font-bold text-xl text-center">
                  {section.sectionName}
                </span>
                <div className="mt-2 flex flex-wrap gap-4 text-lg ">
                  {section.skills.map((box, index) => {
                    console.log("Skill:", box);
                    return (
                      <FadeRight
                        key={`lang-${index}`}
                        duration={0.4}
                        delay={0.1 + index * 0.1}
                        whileInView={!isMobileDebonced}
                      >
                        <SkillBox {...box} />
                      </FadeRight>
                    );
                  })}
                </div>
              </div>
            </AnimatePresence>
          );
        })}
      </div>
    </section>
  );
}
