import React from "react";  
import Navbar from "./navbar";
import Link from "next/link";
export default function Home() {
  return (
    <>
<div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('imghero.PNG')" }}>
    <div className="flex justify-center lg:items-center items-start p-7 flex-col">
    <h1 className="text-white text-2xl lg:mt-52 mt-30 font-serif">Explore our apartments with immersive 360° views and find the space that suits your lifestyle.</h1>
      <p className="text-white text-2xl lg:mt-10 mt-2 font-serif">Explore every detail of your future home.</p>
      <Link href="/" className="font-semibold bg-white p-2 rounded text-black hover:text-blue-950 text-l lg:mt-10 mt-5">Services</Link>
      </div>
      </div>   
      </>);
}
