import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MissionItem = ({ title, textColor }) => (
  <div className="mission-wrapper flex flex-col items-center">
    <motion.div
      variants={fadeInUpVariants}
      className="mission-item group flex flex-col items-center"
      role="listitem"
      tabIndex={0}
    >
      <div className={`mission-title text-lg leading-relaxed ${textColor}`}>
        {title}
      </div>
    </motion.div>
  </div>
);

const CorePurpose = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <motion.header
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center"
          role="banner"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className={`text-5xl font-semibold mb-8 text-indigo-600`}
          >
            Core Purpose
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="mission-list grid grid-cols-1 gap-6 text-gray-500 text-2xl font-bold"
            role="list"
          >
            To create growth opportunity for people and to contribute towards
            global development.
          </motion.p>
        </motion.header>
      </div>
    </section>
  );
};

export default CorePurpose;
