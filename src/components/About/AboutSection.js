import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
          className="flex flex-wrap items-center"
        >
          <div className="w-full md:w-1/2">
            <motion.h2
              variants={fadeInLeftVariants}
              className="text-6xl font-semibold text-indigo-600 mb-4"
            >
              About Laxmi Kripa Ispat
            </motion.h2>
            <motion.p
              variants={fadeInLeftVariants}
              className="text-indigo-500 text-2xl mb-6 text-justify"
            >
              Laxmi Kripa Ispat is a steel manufacturing firm with a strong
              commitment to providing high-quality products and services.
              Established in 2008, we have been constantly evolving and
              growing to meet the demands of the industry.
            </motion.p>
            <motion.p
              variants={fadeInLeftVariants}
              className="text-indigo-500 text-2xl mb-6 text-justify"
            >
              Our state-of-the-art manufacturing facility is equipped with
              advanced technology and machinery, enabling us to produce a wide
              range of steel products, including mild steel angles, channels,
              latch clamps, and hinges. With a focus on innovation and customer
              satisfaction, we strive to exceed expectations and deliver
              unparalleled quality.
            </motion.p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <motion.div variants={fadeInRightVariants}>
              <img
                src="/lkipl.png" // Replace with the path to your image
                alt="Laxmi Kripa Ispat"
                className="rounded-md w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
