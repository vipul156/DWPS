"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const galleryImages = [
  "https://www.dwpsgrnoida.com/public/uploads/event/176700787689.jpg",
  "https://www.dwpsgrnoida.com/public/uploads/event/176700787773.jpg",
  "https://www.dwpsgrnoida.com/public/uploads/event/176700787716.jpg",
  "https://www.dwpsgrnoida.com/public/uploads/event/176700787779.jpg",
  "https://www.dwpsgrnoida.com/public/uploads/event/176700787776.jpg",
  "https://www.dwpsgrnoida.com/public/uploads/event/176700787659.jpg"
];

export default function Gallery() {
  return (
    <section className="gallery-section-home py-20 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Top Header - Mobile Only (Hidden on Desktop per user HTML "m-hide") */}
        <div className="title text-center mb-10 w-full block md:hidden">
          <p className="text-[#00693E] font-bold tracking-widest text-sm uppercase mb-2">OPPORTUNITY AWAITS</p>
          <h2 className="text-4xl font-extrabold text-[#005331] uppercase mb-2 drop-shadow-sm">Gallery</h2>
          <p className="text-gray-500 font-semibold tracking-wide text-sm">35 Albums | 1548 Photos</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center w-full gap-10">

          {/* Left Column: Carousel */}
          <div className="w-full lg:w-[60%] order-2 lg:order-1 relative">

            <div className="gallery-box relative px-4">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: '.swiper-btn-next',
                  prevEl: '.swiper-btn-prev',
                }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                }}
                className="rounded-xl overflow-hidden shadow-2xl pb-4 pt-4 px-2"
              >
                {galleryImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="topper-block-two w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:-translate-y-2 transition-transform duration-300">
                      <img
                        src={src}
                        alt="Gallery Event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation buttons placed outside the Swiper block to float effectively */}
              <button className="swiper-btn-prev absolute top-1/2 left-0 md:-left-6 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-[#00693E] hover:bg-[#F5A623] hover:text-white transition-colors group">
                <FaChevronLeft className="w-5 h-5 group-hover:drop-shadow-sm" />
              </button>

              <button className="swiper-btn-next absolute top-1/2 right-0 md:-right-6 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-[#00693E] hover:bg-[#F5A623] hover:text-white transition-colors group">
                <FaChevronRight className="w-5 h-5 group-hover:drop-shadow-sm" />
              </button>

            </div>
          </div>

          {/* Right Column: Text & Stats */}
          <div className="w-full lg:w-[40%] order-1 lg:order-2">
            <div className="ach-text p-6 md:p-10 bg-[#FAF9F6] border-l-4 border-[#00693E] shadow-xl rounded-r-3xl">

              {/* Desktop Header */}
              <div className="title mb-8 pb-8 border-b border-gray-200 hidden md:block">
                <p className="text-[#00693E] font-bold tracking-widest text-sm uppercase mb-2">OPPORTUNITY AWAITS</p>
                <h1 className="text-5xl font-extrabold text-[#005331] uppercase mb-4 drop-shadow-sm">Gallery</h1>
                <p className="text-gray-600 font-medium tracking-wide">
                  <b className="text-[#F5A623] text-lg">35</b> Albums | <b className="text-[#F5A623] text-lg">1548</b> Photos
                </p>
              </div>

              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-[#F5A623] text-xs font-bold tracking-widest uppercase rounded mb-3">LATEST ALBUM</span>
                <h6 className="text-[#005331] text-2xl font-bold mb-2">Sports Day 2025</h6>

                <p className="text-gray-500 text-sm mb-4">Event on <span className="font-semibold text-gray-700">29th December 2025</span></p>
                <p className="text-gray-600 mb-6 italic border-l-2 border-gray-300 pl-3">"Sports Day 2025 highlights and celebration of athleticism and teamwork."</p>

                <p className="font-medium text-gray-700 mb-8 pb-6 border-b border-gray-200">
                  <b className="text-[#00693E] text-2xl">25</b> Photos
                </p>

                <Link
                  href="/photo-gallery/sports-day-2025"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-[#005331] hover:bg-[#005331] hover:text-white font-bold px-6 py-3 rounded transition-all duration-300 shadow-md uppercase tracking-wider text-sm"
                >
                  VIEW ALL PHOTOS <FaAngleDoubleRight />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAF9F6] -z-10 rounded-l-[100px]"></div>
    </section>
  );
}
