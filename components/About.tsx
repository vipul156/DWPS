"use client";

import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section py-20 bg-gray-50 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="title text-center mb-16 relative">
          <span className="text-[#00693E] font-bold tracking-widest text-sm uppercase block mb-2 px-4 py-1 bg-white inline-block shadow-sm rounded border-l-4 border-[#F5A623]">
            Welcome to DWPS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#005331] uppercase mb-4 drop-shadow-sm">
            About Dwps
          </h2>
          <p className="text-gray-500 font-semibold tracking-widest text-sm uppercase flex items-center justify-center gap-4">
            <span className="w-12 h-0.5 bg-[#F5A623]"></span>
            DISCOVER THE JOURNEY AHEAD
            <span className="w-12 h-0.5 bg-[#F5A623]"></span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left - Video Images Area */}
          <div className="w-full lg:w-1/2 image-column relative">
            <div className="image-box relative h-[500px]">

              {/* Background abstract shape */}
              <div className="absolute top-10 -left-6 w-64 h-64 bg-[#00693E]/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute bottom-10 -right-6 w-64 h-64 bg-[#F5A623]/20 rounded-full blur-2xl z-0"></div>

              {/* Video 1 (Top Left) */}
              <div className="image image-1 absolute top-0 left-0 w-3/5 z-20 shadow-[-10px_-10px_30px_rgba(0,105,62,0.15)] rounded-[30px] overflow-hidden border-4 border-white transform hover:scale-105 transition-transform duration-500">
                <video
                  src="https://www.dwpsgrnoida.com/public/assets/images/videos/DWPS_about_video_02.mp4"
                  playsInline loop muted autoPlay
                  className="w-full h-full object-cover"
                ></video>
              </div>

              {/* Video 2 (Bottom Right) */}
              <div className="image image-2 absolute bottom-0 right-0 w-2/3 z-30 shadow-[20px_20px_40px_rgba(0,0,0,0.2)] rounded-[30px] overflow-hidden border-4 border-white transform -translate-y-4 hover:scale-105 transition-transform duration-500">
                <video
                  src="https://www.dwpsgrnoida.com/public/assets/images/videos/DWPS_about_video.mp4"
                  playsInline loop muted autoPlay
                  className="w-full h-full object-cover"
                ></video>
              </div>

              {/* Play Button Overlay */}
              <figure className="image image-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-2 shadow-[0_0_30px_rgba(245,166,35,0.4)] animate-pulse hover:animate-none hover:scale-110 transition-transform">
                <a href="https://www.youtube.com/watch?v=z7ZoVfex2LM" target="_blank" rel="noopener noreferrer" className="block w-16 h-16 md:w-20 md:h-20 bg-[#F5A623] rounded-full flex items-center justify-center">
                  <img
                    src="https://www.dwpsgrnoida.com/public/assets/images/icons/play-profile.svg"
                    alt="Play Video"
                    className="w-8 ml-2"
                  />
                </a>
              </figure>
            </div>
          </div>

          {/* Right - Text Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="content-box">
              <div className="text mb-8">
                <h2 className="quoit text-2xl md:text-3xl font-bold text-[#005331] leading-snug mb-6 border-l-4 border-[#F5A623] pl-4 bg-white py-2 shadow-sm">
                  Experience and Leadership in School Education
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Founded in 2016, we at Delhi World Public School are pioneers of holistic education. We encourage and enable expertise in teaching which cultivates learner progress.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  This leadership is driven by our esteemed principal madam, skilled teachers and proficient executive staff. We are the flagship school of Delhi World Foundation driven by Guru-Shishya philosophy. DWPS group has over 100 schools standing to achieve excellence in education.
                </p>
              </div>

              <ul className="space-y-4 mb-10 border-t border-gray-200 pt-8">
                <li className="flex items-center text-gray-700 font-medium">
                  <span className="w-8 h-8 rounded bg-[#00693E]/10 flex items-center justify-center mr-4 text-[#00693E]">✓</span>
                  Founded in 2016
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <span className="w-8 h-8 rounded bg-[#00693E]/10 flex items-center justify-center mr-4 text-[#00693E]">✓</span>
                  Affiliated to CBSE-2132580
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <span className="w-8 h-8 rounded bg-[#00693E]/10 flex items-center justify-center mr-4 text-[#00693E]">✓</span>
                  Located in Greater Noida, Knowledge Park III
                </li>
              </ul>

              <div>
                <Link
                  href="/about-us"
                  className="inline-flex flex-row items-center gap-2 text-[#F5A623] hover:text-[#005331] font-bold tracking-widest uppercase border-b-2 border-transparent hover:border-[#005331] transition-all group pb-1"
                >
                  LEARN MORE
                  <FaAngleDoubleRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
