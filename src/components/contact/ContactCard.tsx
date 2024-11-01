import Instagram from "../../assets/icons/socials/instagram.svg";
import YouTube from "../../assets/icons/socials/youtube.svg";
import Twitter from "../../assets/icons/socials/x.svg";
import Facebook from "../../assets/icons/socials/facebook.svg";
import { motion } from "framer-motion";

interface ContactCardProps {
  email: string;
}

const ContactCard = ({ email }: ContactCardProps) => {
  const icons = [Facebook, Instagram, YouTube, Twitter];
  const FADE_DOWN = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="flex flex-col items-center p-2 gap-8"
    >
      <motion.h1
        variants={FADE_DOWN}
        className="font-semibold text-2xl text-center underline hover:text-orange-200"
      >
        {email}
      </motion.h1>
      <motion.div variants={FADE_DOWN} className="flex items-center space-x-4">
        {icons.map((Icon, index) => (
          <motion.div
            key={`icon-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={Icon}
              alt={`icon-${index}`}
              className="h-6 w-9 hover:border-red-600 hover:scale-110 transition-transform duration-200"
              style={{ filter: "invert(1)" }}
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-col bg-black items-center gap-5 w-full">
        <motion.input
          variants={FADE_DOWN}
          type="text"
          placeholder="NAME"
          className="border-b p-2 w-full bg-black border-orange-200 hover:border-slate-600"
        />
        <motion.input
          variants={FADE_DOWN}
          type="email"
          placeholder="EMAIL"
          className="border-b p-2 w-full bg-black border-orange-200 hover:border-slate-600"
        />
        <motion.textarea
          variants={FADE_DOWN}
          placeholder="MESSAGE"
          className="border-b p-2 w-full  bg-black border-orange-200 hover:border-slate-600"
        />
      </div>
      <motion.div variants={FADE_DOWN} className=" flex justify-end w-full">
        <button className="border-b p-2 w-16  hover:border hover:border-orange-200">
          SEND
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ContactCard;
