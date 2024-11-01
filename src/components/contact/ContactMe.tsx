import { motion } from "framer-motion";
import FadeRight from "../animations/FadeRight";
import { useDebounceValue } from "../../hooks/useDebounceValue";
import { useScreenBreakpoint } from "../../hooks/useScreenBreakpoint";

const ContactMe = () => {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
  return (
    <motion.div className="flex w-full min-h-screen">
      <FadeRight duration={0.4} delay={0.1} whileInView={!isMobileDebonced}>
        <motion.h1 className="text-7xl  font-bold text-center mt-6">
          Want to <br /> start <br /> a new <br />
          Project?
        </motion.h1>
        <motion.p>Or just say hello.</motion.p>
      </FadeRight>
    </motion.div>
  );
};

export default ContactMe;
