"use client";
import React, { useState, useEffect } from "react";

const YoutubePreview = ({ videoId }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call the function initially to set the state based on the initial viewport size

    // Add an event listener that calls handleResize when the window is resized
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-white p-10 rounded-lg shadow-md">
      <h2 className="mb-4 text-5xl font-bold text-center text-indigo-500">
        Our Environmental Pledge
      </h2>
      <p className="mb-6 text-center text-indigo-500 text-semibold text-xl">
        Join us on our journey towards a more sustainable future. Watch our
        Environmental Pledge below.
      </p>
      <iframe
        className="rounded-lg"
        width={isMobile ? "360" : "960"}
        height={isMobile ? "315" : "540"}
        src={`https://www.youtube.com/embed/xJaHZ6vhowA`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="mt-6 text-center text-indigo-500 text-semibold text-xl">
        We believe in taking decisive actions today for a better tomorrow!
      </p>
    </div>
  );
};

export default YoutubePreview;
