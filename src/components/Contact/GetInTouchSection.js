import React from "react";
import Link from "next/link"; // Import Link component from Next.js

const GetInTouchSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center text-indigo-500">
          <h2 className="text-4xl font-semibold mb-8">
            Ready to place an order or have any questions?
          </h2>
          <p className="text-2xl mb-8">
            Our team is there to assist you on working hours(Mon to Sat). Get in
            touch with us today!
          </p>
          <Link href="/contact">
            {" "}
            {/* Set the href prop to "/contact" */}
            <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-md hover:bg-indigo-200 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
