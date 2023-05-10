import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Collapse } from "react-collapse";
import AnimateHeight from "react-animate-height";

const FrequentlyAskedQuestionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      id: 1,
      question: "What are the available sizes for MS angles & channels?",
      answer:
        "We offer in a variety of sizes(mentioned above in the product description) to suit your needs. Please contact our sales team for more information.",
    },
    {
      id: 2,
      question: "What are the available sizes clamps and hinges?",
      answer:
        "We offer in a variety of sizes(mentioned above in the product description) to suit your needs. Please contact our sales team for more information.",
    },
    {
      id: 3,
      question: "What is the delivery time for orders?",
      answer:
        "The delivery time depends on the order size and availability of the products. Our team will provide you with an estimated delivery time when you place your order.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-indigo-600">
            Frequently Asked Questions
          </h2>
        </div>
        <AnimatePresence initial={false}>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                onClick={() => handleClick(index)}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-indigo-500">
                    {faq.question}
                  </h3>
                  <span
                    className={`${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300 text-purple-400`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
                <AnimateHeight
                  duration={300}
                  height={activeIndex === index ? "auto" : 0}
                >
                  <Collapse isOpened={activeIndex === index}>
                    <p className="mt-4 text-black">{faq.answer}</p>
                  </Collapse>
                </AnimateHeight>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestionsSection;
