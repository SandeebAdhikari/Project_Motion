import { AnimatePresence } from "framer-motion";
import SkillBox, { type SkillBoxProps } from "./SkillBox";
import FadeRight from "../../animations/FadeRight";
import { useScreenBreakpoint } from "../../hooks/useScreenBreakpoint";
import { useDebounceValue } from "../../hooks/useDebounceValue";

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
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl">
          Skills
        </h2>
        {skills.map((section) => {
          console.log("Section:", section);
          return (
            <AnimatePresence key={section.sectionName}>
              <div className="mt-4">
                <span className="text-xs font-semibold text-foreground sm:text-sm">
                  {section.sectionName}
                </span>
                <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                  {section.skills.map((pill, index) => {
                    console.log("Skill:", pill);
                    return (
                      <FadeRight
                        key={`lang-${index}`}
                        duration={0.4}
                        delay={0.1 + index * 0.1}
                        whileInView={!isMobileDebonced}
                      >
                        <SkillBox {...pill} />
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
