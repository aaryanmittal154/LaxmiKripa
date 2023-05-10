import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: { opacity: 1, y: 0, rotate: 0 },
};

const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const timelineData = [
    {
      year: "2008",
      title: "Established LaxmiKripa Ispat Pvt. Ltd.",
      description:
        "Manufacturer a wide range of MS angles and MS channels that are used in various industries for different purposes.",
    },
    {
      year: "2012",
      title: "Established Agrawal Channel Pvt. Ltd.",
      description:
        "One-stop hub for light structural steel! Manufacturers of high-quality MS Angles, Channels, Rounds, and Flats.",
    },
    {
      year: "2016",
      title: "Established LaxmiKripa Steel & Power Pvt. Ltd.",
      description:
        "A premier manufacturer of MS Wire, Binding Wire, GI wire and other MS wire products",
    },
    {
      year: "2023",
      title: "Established LaxmiKripa Ispat (Unit II) Pvt. Ltd.",
      description:
        "Manufacturer of MS Butt Hinges, MS Foot Buttons, MS C Clamps, and MS Latch Clamps",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <h1 className="text-5xl font-bold text-indigo-600 mb-8">
        Our Sister Companies
      </h1>
      <ul className="w-full">
        {timelineData.map((item, index) => (
          <motion.li
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: [0.6, -0.05, 0.01, 0.99], // Cubic Bezier curve for a more dynamic easing
            }}
            key={index}
            className={`mb-8 p-4 border-l-4 border-indigo ${
              index % 2 === 0 ? "pl-8" : "pr-8 text-right"
            }`}
          >
            <h2 className="text-3xl font-bold text-indigo-600 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 text-xl">{item.description}</p>
            <p className="text-sm text-gray-700 text-indigo mt-2">
              {item.year}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineSection;
