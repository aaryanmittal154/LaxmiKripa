import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">
              LaxmiKripa Ispat
            </h3>
            <p className="text-justify">
              Experience the best in high-quality mild steel products with
              LaxmiKripa Ispat - where quality meets reliability and customer
              satisfaction!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link legacyBehavior href="/">
                  <a className="hover:text-indigo-500 transition duration-300">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/about">
                  <a className="hover:text-indigo-500 transition duration-300">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/products">
                  <a className="hover:text-indigo-500 transition duration-300">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a className="hover:text-indigo-500 transition duration-300">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">
              Contact Information
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>Address:</strong> 578 & 598, Urla Industrial Area,
                Raipur, Chhattisgarh - 492003
              </li>
              <li>
                <strong>Phone:</strong> +91 7746877772
              </li>
              <li>
                <strong>Email:</strong> sales@laxmikripaispat.in
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} LaxmiKripa Ispat. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
