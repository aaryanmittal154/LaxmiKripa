import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HingesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.2 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeInChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-indigo-500 mb-8">
              MS Hinges
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Discover premium selection of products, including MS Butt Hinges
              in assorted sizes (75mm, 100mm, 125mm, 150mm & 70mm Nut Bolt Hinges), MS
              Foot Buttons, MS C Clamps, and MS Latch Clamps - all available in
              a wide range of sizes to accommodate diverse industrial
              applications.
            </p>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  src: "/Product/Hinge/hinge.jpg",
                  alt: "75mm Hinge",
                  title: "MS BUTT HINGE",
                  desc: "Our hinges are made from high-quality materials and come in a variety of sizes and finishes.",
                  size: "75mm, 100mm, 125mm, 150mm & 70mm Nut Bolt Hinges",
                },
                {
                  src: "/Product/Hinge/foot_button.jpg",
                  alt: "100mm Hinge",
                  title: "MS FOOT BUTTON",
                  desc: "Our foot buttons are made with high-quality mild steel, ensuring durability and longevity.",
                  size: "ALL",
                },
                {
                  src: "/Product/Hinge/c_clamp.png",
                  alt: "125mm Hinge",
                  title: "MS C CLAMP",
                  desc: "Our clamps are made with precision and care, ensuring that you get the best quality.",
                  size: "ALL",
                },
                {
                  src: "/Product/Hinge/latch_clamp.jpg",
                  alt: "70mm Nut Bolt Hinge",
                  title: "MS LATCH CLAMP",
                  desc: "Our mild steel latch clamps are perfect for a variety of industrial applications.",
                  size: "63mm, 65mm, 75mm & many more sizes",
                },
              ].map(({ src, alt, title, desc, size }) => (
                <motion.div
                  key={title}
                  className="bg-white rounded-md shadow-md p-5"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgb(0, 0, 0, 0.5)",
                  }} // Add boxShadow effect here
                  transition={{ duration: 0.3 }}
                  variants={fadeInChild}
                >
                  <h1 className="text-red-500 mb-4">LAXMIKRIPA</h1>
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-xl font-semibold text-indigo-500 mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                  <p className="text-lg font-bold text-indigo-600 mt-4">
                    Sizes: {size}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HingesSection;
