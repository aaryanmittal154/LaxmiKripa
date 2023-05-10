import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnglesSection = () => {
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
              MS Superlight Channels & MS Angles
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              We manufacture a wide range of MS Superlight Channels & MS Angles
              that are used in various industries for different purposes. Our
              products are made from high-quality materials and are available in
              a variety of sizes and finishes.
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
                  src: "/Product/Angle/channel.png",
                  alt: "75mm Hinge",
                  title: "MS SUPERLIGHT CHANNEL",
                  desc: "With a variety of sizes available, our MS channels are perfect for use in building, bridges, machinery, fabrication, solar and more.",
                  size: "70x35 & 95x45 (Size in mm)",
                },
                {
                  src: "/Product/Angle/t-angle.png",
                  alt: "100mm Hinge",
                  title: "MS T ANGLE",
                  desc: "Available in a variety of sizes and thicknesses, our T angles are perfect for use in buildings, bridges, machinery, and more.",
                  size: "60x40 (Size in mm)",
                },
                {
                  src: "/Product/Angle/beam.png",
                  alt: "125mm Hinge",
                  title: "MS SUPER LIGHT BEAM",
                  desc: "Our beams are ideal for use in long-span structures such as roofs and bridges, and are also resistant to corrosion and wear and tear. ",
                  size: "95x45 (Size in mm)",
                },
                {
                  src: "/Product/Angle/angle.png",
                  alt: "70mm Nut Bolt Hinge",
                  title: "MS ANGLES",
                  desc: "With a wide range of sizes, we have a perfect MS Angle for all types of construction and engineering needs.",
                  size: "35x4/5, 40x4/5/6, 50x4/5/6 & 65x5/6/8 (Size in mm)",
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

export default AnglesSection;
