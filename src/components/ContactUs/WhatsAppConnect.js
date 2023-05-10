import React from "react";
import Image from "next/image";

const WhatsAppConnect = () => {
  const phoneNumber = "7746877772"; // Replace this with your phone number

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about your services."
    ); // Predefined message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-gray-100 p-2 text-center">
      <button
        onClick={handleClick}
        className="bg-green-500 text-white font-semibold px-16 py-3 rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out inline-flex items-center space-x-2"
      >
        <Image
          src="/ws.png" // Replace this with your local path or remote URL
          alt="WhatsApp logo"
          width={24}
          height={24}
          priority={true}
        />
        <span>Connect with us on WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppConnect;
