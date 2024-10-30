import { motion, AnimatePresence } from "framer-motion";

interface WavyTextProps {
  word: string;
}

const WavyText: React.FC<WavyTextProps> = ({ word = "default text" }) => {
  const variants1 = {
    hidden: { y: 10 },
    visible: { y: -10 },
  };

  return (
    <div className="flex space-x-2 justify-center">
      <AnimatePresence>
        {word.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants1}
            transition={{ yoyo: Infinity, duration: 0.5, delay: i * 0.2 }}
            className="text-center font-display font-bold tracking-[-0.2em] drop-shadow-sm  md:leading-[5rem]"
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default WavyText;
