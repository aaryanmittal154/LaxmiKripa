import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const AboutUsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const textVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", damping: 15 },
    },
    hidden: { opacity: 0, y: 50 },
  };

  const learnMoreButtonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-justify">
        <div className="flex justify-start">
          <Image
            src="/lkipl.png"
            alt="LaxmiKripa Ispat"
            width={86}
            height={86}
            className="w-full h-auto"
            unoptimized={true}
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold tracking-tight text-indigo-600 sm:text-6xl">
            LaxmiKripa Ispat
          </h2>
          <motion.p
            className="mt-4 text-3xl text-gray-500 text-justify"
            variants={textVariants}
          >
            LaxmiKripa Ispat has been at the forefront of steel manufacturing
            for over 15 years, consistently delivering top-quality MS Superlight
            Channels, T-angles, Angles, Beams, Hinges, Latch Clamps, Foot
            Buttons. Our expertise and dedication to innovation have solidified
            our position as a leading industry partner, trusted by businesses
            worldwide.
          </motion.p>
          <Link href="/about">
            <motion.button
              className="mt-8 px-8 py-2 bg-indigo-600 text-white font-bold text-lg rounded-md shadow-md transition-all duration-150"
              variants={learnMoreButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsSection;
