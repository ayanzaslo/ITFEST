import React from "react";  
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative w-full h-screen mt-0">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover" >
        <source src="videohr.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative flex justify-center lg:items-center items-start p-7 flex-col h-full z-10 ">
        <h1 className="text-white text-2xl lg:mt-0 mb-4 font-serif">
          Explore our apartments with immersive 360° views and find the space that suits your lifestyle.
        </h1>
        <p className="text-white text-2xl lg:mt-10 mt-2 font-serif">
          Explore every detail of your future home.
        </p>
        <Link href="services" className="font-semibold bg-white p-2 rounded text-black hover:text-blue-950 text-l lg:mt-10 mt-5">
          Services
        </Link>
      </div>
    </div>
  );
}
