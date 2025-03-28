import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { slideAnimation } from "./animations";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.3, type: "spring", duration: 1.2, bounce: 0 },
      opacity: { delay: i * 0.3, duration: 0.2 },
    },
  }),
};

interface Event {
  title: string;
  school: string;
  description: string;
}

interface TimelineProps {
  index: number;
  event: Event;
  onComplete?: () => void;
}

const Timeline = ({ index, event, onComplete }: TimelineProps) => {
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);
  const [secondAnimationComplete, setSecondAnimationComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="timeline-container">
      <motion.svg
        width="100"
        height="200"
        viewBox="0 0 100 200"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Line Animation */}
        <motion.line
          x1="50"
          y1="0"
          x2="50"
          y2="100%"
          stroke="#00cc88"
          strokeWidth={6}
          variants={draw}
          custom={index}
          onAnimationComplete={() => setFirstAnimationComplete(true)}
        />

        {/* Circle Animation */}
        {firstAnimationComplete && (
          <motion.circle
            cx="50"
            cy="50"
            r="15"
            stroke="#00cc88"
            strokeWidth={6}
            fill="#475569"
            variants={draw}
            custom={index + 1}
            onAnimationComplete={() => {
              setSecondAnimationComplete(true);
              onComplete && onComplete(); // Triggering onComplete if provided
            }}
          />
        )}
      </motion.svg>

      {/* Event Details Animation */}
      {secondAnimationComplete && (
        <div className="flex flex-col items-center mt-4">
          <motion.h3
            variants={slideAnimation("up")}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-xl font-bold"
          >
            {event.title}
          </motion.h3>
          <motion.p
            variants={slideAnimation("up")}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {event.school}
          </motion.p>
          <motion.p
            variants={slideAnimation("up")}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {event.description}
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Timeline;
