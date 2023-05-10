import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCogs, FaUserTie, FaMedal, FaIndustry } from "react-icons/fa";

const FeatureCard = ({ icon, title, description, delay }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, delay: delay } },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center md:text-left p-6 bg-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="mb-4">{icon}</motion.div>
      <h3 className="text-2xl text-indigo-500 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaIndustry size="3rem" />,
      title: "High-Quality Products",
      description:
        "We offer a wide range of high-quality steel products that meet international standards.",
    },
    {
      icon: <FaUserTie size="3rem" />,
      title: "Expertise & Experience",
      description:
        "Our team of experts brings years of experience and deep knowledge in the steel industry.",
    },
    {
      icon: <FaMedal size="3rem" />,
      title: "Excellent Customer Service",
      description:
        "We are committed to providing exceptional customer service and support at every stage.",
    },
    {
      icon: <FaCogs size="3rem" />,
      title: "Innovation & Technology",
      description:
        "We leverage cutting-edge technology to deliver innovative steel solutions to our clients.",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="bg-gray-100 py-16" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-500 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, transition: { duration: 1 } } : {}}
        >
          Why Choose LaxmiKripa Ispat
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
