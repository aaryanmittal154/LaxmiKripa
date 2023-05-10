import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductionFacilitiesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl font-semibold text-indigo-600 mb-8"
          >
            Discover Our Products
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-indigo-500 text-lg mb-6"
          >
            Explore top-notch MS products, from hinges and clamps to angles and
            channels. Experience unparalleled quality, expert craftsmanship, and
            exceptional customer service for all your steel needs.
          </motion.p>
          {/* Add a visually appealing gallery or carousel of images/videos showcasing your production facilities */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionFacilitiesSection;
