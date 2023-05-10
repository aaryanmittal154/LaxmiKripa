import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiTarget,
  FiTool,
  FiUsers,
  FiCheckCircle,
  FiBox,
} from "react-icons/fi";
import Link from "next/link";

// Fade in up animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CapabilityItem = ({ icon, title, textColor }) => (
  <div className="capability-wrapper flex flex-col items-center">
    <motion.li
      variants={fadeInUpVariants}
      className="capability-item group flex flex-col items-center"
      role="listitem"
      tabIndex={0}
    >
      <div className="capability-icon text-5xl mb-2" aria-hidden="true">
        {React.cloneElement(icon, { className: textColor })}
      </div>
      <div className={`capability-title text-lg leading-relaxed ${textColor}`}>
        {title}
      </div>
    </motion.li>
  </div>
);

CapabilityItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

const ManufacturingCapabilitiesSection = ({
  capabilities = [
    {
      title: "Cutting-edge manufacturing facility",
      icon: <FiTarget />,
    },
    {
      title: "Superior machinery and tools",
      icon: <FiTool />,
    },
    {
      title: "Expert workforce",
      icon: <FiUsers />,
    },
    {
      title: "Rigorous quality control processes",
      icon: <FiCheckCircle />,
    },
    {
      title: "Flawless Products",
      icon: <FiBox />,
    },
  ],
  textColor = "text-indigo-600",
  iconColor = "text-indigo-600",
}) => {
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
            className={`text-4xl font-semibold mb-8 ${iconColor}`}
          >
            Our Manufacturing Capabilities
          </motion.h2>
          <motion.ul
            variants={fadeInUpVariants}
            className="capabilities-list grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            role="list"
          >
            {capabilities.map((capability) => (
              <CapabilityItem
                key={capability.title}
                icon={capability.icon}
                title={capability.title}
                textColor={textColor}
              />
            ))}
          </motion.ul>
        </motion.header>
      </div>
    </section>
  );
};

export default ManufacturingCapabilitiesSection;
