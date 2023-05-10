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

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      type: "Phone",
      info: "+91 7746877772",
    },
    {
      type: "Email",
      info: "sales@laxmikripaispat.in",
    },
    {
      type: "Address",
      info: " 578 & 598, Urla Industrial Area, Raipur, Chhattisgarh - 492003",
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
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
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                  {contact.type}
                </h3>
                <p className="text-indigo-500">{contact.info}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
