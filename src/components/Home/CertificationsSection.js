import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const CertificationsSection = () => {
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

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", damping: 15 },
    },
    hidden: { opacity: 0, y: 50 },
  };

  const certifications = [
    {
      name: "IS 15911:2010",
      image: "/Home/iso.jpg",
      description: "IS Certification for our commitment to quality and safety.",
    },
    {
      name: "IS 2062:2011",
      image: "/Home/ism.jpg",
      description: "IS Certification for our commitment to quality and safety.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
          LaxmiKripa Ispat
        </h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Our Certifications
        </p>
        <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
          We are proud to hold internationally recognized certifications,
          demonstrating our commitment to quality, safety, and sustainability.
        </p>
      </div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
        {certifications.map((certification, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex-shrink-0">
              <Image
                className="object-cover"
                src={certification.image}
                alt={certification.name}
                width={600}
                height={400}
              />
            </div>
            <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-indigo-600">
                  {certification.name}
                </p>
                <p className="mt-2 text-base text-gray-500">
                  {certification.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificationsSection;
