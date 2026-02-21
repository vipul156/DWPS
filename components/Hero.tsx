"use client";

import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="showcase relative min-h-[85vh] lg:min-h-screen overflow-hidden bg-black">
      <div className="video-container absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="banner-video m-hide-1 w-full h-full object-cover opacity-70"
        >
          <source src="https://www.dwpsgrnoida.com/public/uploads/banner/1754364656842.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500"></div>

      <div className="container pbc-0 relative z-20 mx-auto px-4 sm:px-6 lg:px-8 h-[85vh] lg:h-screen flex items-center">
        <div className="banner-text max-w-2xl pl-4 md:pl-10">
          <h4 className="text-[#F5A623] font-bold text-sm tracking-[0.2em] mb-4 uppercase drop-shadow-md">
            OUR MOTTO
          </h4>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold text-white leading-[1.1] mb-8 font-sans drop-shadow-lg">
            Striving<br />
            Towards<br />
            Perfection
          </h1>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-white text-[#005331] font-bold px-8 py-3 rounded-md transition-all duration-300 shadow-xl uppercase tracking-wider text-sm group border-2 border-[#F5A623]"
          >
            Learn More <FaAngleDoubleRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
