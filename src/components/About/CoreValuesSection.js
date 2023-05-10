import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GiStairsGoal,
  GiReceiveMoney,
  GiMeshBall,
  GiLeafSkeleton,
} from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";

const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ValueCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={fadeInUpVariants}
    whileHover={{ scale: 1.05 }}
    className={clsx(
      "border",
      "rounded-lg",
      "p-4",
      "bg-gradient-to-br",
      "from-indigo-200",
      "to-indigo-400",
      "shadow-md",
      "flex",
      "flex-col",
      "h-full",
      "text-white",
      "transition",
      "duration-300",
      "ease-in-out"
    )}
  >
    <div className={clsx("flex-grow-0", "flex-shrink-0", "text-4xl", "mb-4")}>
      <Icon />
    </div>
    <h3
      className={clsx(
        "flex-grow-0",
        "flex-shrink-0",
        "text-2xl",
        "font-semibold",
        "mb-4"
      )}
    >
      {title}
    </h3>
    <p className="text-white flex-grow">{description}</p>
  </motion.div>
);

const CoreValuesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: GiStairsGoal,
      title: "Integrity",
      description:
        "We are committed to the highest standards of ethics and integrity in everything we do.",
    },
    {
      icon: GiReceiveMoney,
      title: "Passion",
      description:
        "We are passionate about our customers, our people, our business, and our products.",
    },
    {
      icon: GiMeshBall,
      title: "Commitment",
      description:
        "We are committed to delivering on our promises and to achieving the highest levels of customer satisfaction.",
    },
    {
      icon: GiLeafSkeleton,
      title: "Respect for all",
      description:
        "We treat our customers, our employees, our suppliers, and the public with fairness, honesty, and respect.",
    },
  ];

  return (
    <section
      className={clsx(
        "bg-gray-100",
        "py-12",
        "px-4",
        "bg-gradient-to-br",
        "from-gray-100",
        "to-gray-100",
        "bg-opacity-30"
      )}
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className={clsx(
              "text-4xl",
              "font-semibold",
              "text-indigo-600",
              "mb-8"
            )}
          >
            Our Core Values
          </motion.h2>
          <div className="flex flex-wrap justify-center">
            {values.map((value, index) => (
              <div
                key={index}
                className={clsx(
                  "text-black",
                  "w-full",
                  "sm:w-1/2",
                  "md:w-1/3",
                  "lg:w-1/4",
                  "p-4"
                )}
              >
                <ValueCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
