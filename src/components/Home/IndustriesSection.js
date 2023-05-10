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

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const IndustriesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    {
      name: "Construction",
      description:
        "High-quality steel for building infrastructure and commercial projects.",
    },
    {
      name: "Electricity Board",
      description:
        "Best in class Manufactured steel components for use in electricity boards.",
    },
    {
      name: "Railways",
      description:
        "Durable and reliable steel products for railway infrastructure and manufacturing.",
    },
    {
      name: "Energy",
      description:
        "Perfect steel solutions for power plants and renewable energy projects.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
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
            className="text-4xl font-semibold text-indigo-600 mb-8"
          >
            Industries We Serve
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="bg-white shadow-md p-4 rounded-lg"
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                  {industry.name}
                </h3>
                <p className="text-indigo-500">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
