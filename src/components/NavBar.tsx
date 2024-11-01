import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TypingEffect from "./animations/TypingEffect";
import logo from "/logo/logo512.png";
import { slideAnimation } from "./animations/animations";
import LinkedIn from "../assets/icons/socials/linkedin.svg";
import GitHub from "../assets/icons/socials/github.svg";
import Instagram from "../assets/icons/socials/instagram.svg";
import YouTube from "../assets/icons/socials/youtube.svg";
import Twitter from "../assets/icons/socials/x.svg";

const NavBar = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [lastNameComplete, setLastNameComplete] = useState(false);
  const [logoComplete, setLogoComplete] = useState(false);

  const icons = [
    {
      src: LinkedIn,
      url: "https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/",
    },
    { src: GitHub, url: "https://github.com/SandeebAdhikari" },
    { src: Instagram, url: "https://instagram.com" },
    { src: YouTube, url: "https://youtube.com" },
    { src: Twitter, url: "https://twitter.com" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex items-center h-[150px] w-full"
      >
        <div className="flex">
          <TypingEffect
            text="sandeeb"
            onComplete={() => setTypingComplete(true)}
          />

          {/* Last Name */}
          {typingComplete && (
            <motion.h1
              variants={slideAnimation("down")}
              initial="initial"
              animate="animate"
              exit="exit"
              onAnimationComplete={() => setLastNameComplete(true)}
              className="text-center font-display text-2xl tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem] text-slate-500"
            >
              adhikari
            </motion.h1>
          )}
        </div>

        <div className="flex flex-grow justify-center ">
          {lastNameComplete && (
            <motion.div
              variants={slideAnimation("down")}
              initial="initial"
              animate="animate"
              exit="exit"
              onAnimationComplete={() => setLogoComplete(true)}
            >
              <img src={logo} alt="logo" className="h-12 w-12" />
            </motion.div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {logoComplete &&
            icons.map((icon, index) => (
              <motion.div
                key={`icon-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={icon.src}
                    alt={`icon-${index}`}
                    className="h-6 w-9 hover:border-red-600 hover:scale-110 transition-transform duration-200"
                    style={{ filter: "invert(1)" }}
                  />
                </a>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBar;
