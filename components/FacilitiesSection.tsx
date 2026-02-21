"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const facilities = [
    {
        id: "1",
        title: "Laboratories",
        tagline: "#Laboratories",
        href: "laboratories",
        image: "https://www.dwpsgrnoida.com/public/uploads/facility/175438219069.jpg"
    },
    {
        id: "2",
        title: "Library",
        tagline: "#Library",
        href: "library",
        image: "https://www.dwpsgrnoida.com/public/uploads/facility/175438231916.jpg"
    },
    {
        id: "3",
        title: "Smart Class",
        tagline: "#Smartclass",
        href: "smart-class",
        image: "https://www.dwpsgrnoida.com/public/uploads/facility/175438837719.jpg"
    },
    {
        id: "4",
        title: "Shooting Range",
        tagline: "#Shootingrange",
        href: "shooting-range",
        image: "https://www.dwpsgrnoida.com/public/uploads/facility/175438846543.jpg"
    },
    {
        id: "5",
        title: "Swimming Pool",
        tagline: "#Swimmingpool",
        href: "swimming-pool",
        image: "https://www.dwpsgrnoida.com/public/uploads/facility/175438906761.jpg"
    },
    {
        id: "6",
        title: "Safety & Security",
        tagline: "#Safety&security",
        href: "safety-security",
        image: "https://www.dwpsgrnoida.com/public/uploads/facility/175438942171.jpg"
    },
    {
        id: "7",
        title: "CCTV Surveillance",
        tagline: "#Cctvsurveillance",
        href: "cctv-surveillance",
        image: "https://www.dwpsgrnoida.com/public/uploads/facility/175438952187.jpg"
    },
    {
        id: "8",
        title: "Transport",
        tagline: "#Transport",
        href: "transport",
        image: "https://www.dwpsgrnoida.com/public/uploads/facility/175438968293.jpg"
    }
];

export default function FacilitiesSection() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h6 className="text-[#00693E] font-bold tracking-widest text-sm uppercase mb-2">Our Facilities</h6>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#005331] uppercase mb-4">DWPS INFRASTRUCTURE</h3>
                    <p className="text-gray-500 font-semibold tracking-widest text-sm uppercase">THE BEST OF FACILITIES & LATEST TEACHING AIDS</p>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: '.swiper-button-next-fac',
                            prevEl: '.swiper-button-prev-fac',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="pb-12"
                    >
                        {facilities.map((fac) => (
                            <SwiperSlide key={fac.id}>
                                <Link href={`/${fac.href}`} className="block group/card h-[400px] relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            src={fac.image}
                                            alt={fac.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                        />
                                    </div>
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#005331]/90 via-[#005331]/30 to-transparent"></div>

                                    {/* Content Area */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300">
                                        <div className="text-4xl font-black text-white/30 absolute right-6 bottom-16 -z-10 transition-colors group-hover/card:text-[#F5A623]/40">
                                            {fac.id.padStart(2, '0')}
                                        </div>
                                        <div className="w-10 h-1 bg-[#F5A623] mb-4 group-hover/card:w-20 transition-all duration-300"></div>
                                        <h4 className="text-2xl font-bold mb-1">{fac.title}</h4>
                                        <p className="text-[#F5A623] text-sm font-semibold tracking-wider">{fac.tagline}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button className="swiper-button-prev-fac absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-[#00693E] hover:bg-[#00693E] hover:text-white transition-colors">
                        <FaChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="swiper-button-next-fac absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-[#00693E] hover:bg-[#00693E] hover:text-white transition-colors">
                        <FaChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Explore All Button */}
                <div className="text-center mt-8">
                    <Link
                        href="/facilities"
                        className="inline-flex items-center gap-2 text-[#00693E] hover:text-[#005331] font-bold uppercase tracking-widest border-b-2 border-[#00693E] pb-1 hover:border-[#F5A623] transition-colors"
                    >
                        Learn More <FaAngleDoubleRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
