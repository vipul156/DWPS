"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const achievements = [
    {
        id: 1,
        image: "https://www.dwpsgrnoida.com/public/uploads/achievement/175439229217.jpg",
        title: "Best Delicate Award at Sarvottam International School’s MUN held on 15 oct and 16 October’2024.",
        link: "https://www.dwpsgrnoida.com/achievement-image/VxJT6vCbqVm-8-WJLTyM6w"
    },
    {
        id: 2,
        image: "https://www.dwpsgrnoida.com/public/uploads/achievement/175439217013.jpg",
        title: "Inter-school Competition at KC International School, Greater Noida, on 10th August 2024.",
        link: "https://www.dwpsgrnoida.com/achievement-image/0Q8Ue9SfB92lYPDkdN_4rw"
    },
    {
        id: 3,
        image: "https://www.dwpsgrnoida.com/public/uploads/achievement/175438995970.jpg",
        title: "Best Delicate Award at Sarvottam International School’s MUN held on 15 oct and 16 October’2024.",
        link: "https://www.dwpsgrnoida.com/achievement-image/dDfzWxOWF5lWmAEOjG2wqw"
    }
];

const birthdays = [
    {
        id: 1,
        name: "Nikhil Kumar",
        class_sec: "VI B",
        date: "21st February",
        role: "Student",
        image: "https://www.dwpsgrnoida.com/public/assets/photo-not-available.jpg"
    },
    {
        id: 2,
        name: "Aadya Singh",
        class_sec: "IV A",
        date: "23rd February",
        role: "Student",
        image: "https://www.dwpsgrnoida.com/public/assets/photo-not-available.jpg"
    }
];

export default function AchievementsBirthdaySection() {
    return (
        <section className="achievements-birthday py-20 bg-[#FAF9F6]">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">

                    {/* Achievements Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="achievements bg-white p-8 md:p-10 rounded-3xl shadow-lg h-full border border-gray-100 flex flex-col justify-between">

                            <div>
                                <div className="title text-center mb-8">
                                    <p className="text-[#00693E] font-bold tracking-widest text-sm uppercase mb-2">STATE & NATIONAL LEVEL</p>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#005331] uppercase">Achievements</h3>
                                </div>

                                <div className="relative achievements-carousel-wrapper px-4">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        navigation={{
                                            nextEl: '.swiper-btn-achieve-next',
                                            prevEl: '.swiper-btn-achieve-prev',
                                        }}
                                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                                        loop={true}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        className="pb-4"
                                    >
                                        {achievements.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="achi-block-two rounded-2xl overflow-hidden shadow-md group border border-gray-100 relative">
                                                    <a href={item.link} className="block relative h-full">
                                                        <div className="h-[250px] overflow-hidden">
                                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                        </div>
                                                        <div className="absolute top-4 left-4 bg-[#F5A623] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-sm">
                                                            New
                                                        </div>
                                                        <div className="p-6 bg-white min-h-[100px] flex items-center justify-center border-t-4 border-[#00693E]">
                                                            <h6 className="text-[#005331] font-bold text-center leading-snug text-[15px]">
                                                                {item.title}
                                                            </h6>
                                                        </div>
                                                    </a>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Custom Navigation */}
                                    <button className="swiper-btn-achieve-prev absolute top-[125px] left-0 md:-left-4 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200 text-[#00693E] hover:bg-[#F5A623] hover:text-white transition-colors">
                                        <FaChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button className="swiper-btn-achieve-next absolute top-[125px] right-0 md:-right-4 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200 text-[#00693E] hover:bg-[#F5A623] hover:text-white transition-colors">
                                        <FaChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="ach-text text-center mt-8 pt-6 border-t border-gray-100">
                                <a href="https://www.dwpsgrnoida.com/achievements" className="inline-flex items-center gap-2 text-[#00693E] hover:text-[#F5A623] font-bold uppercase tracking-widest transition-colors text-sm">
                                    VIEW ALL ACHIEVEMENTS <FaAngleDoubleRight />
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Birthday Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg h-full border border-gray-100 relative overflow-hidden flex flex-col items-center">

                            {/* Title Area */}
                            <div className="title text-center mb-8 relative z-30">
                                <div className="flex justify-center mb-2">
                                    <img src="https://www.dwpsgrnoida.com/public/assets/images/icons/birthday-flag.svg" alt="Birthday Flag" className="h-10 w-auto" />
                                </div>
                                <p className="text-[#00693E] font-bold tracking-widest text-sm uppercase">WISH YOU A VERY</p>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#005331] uppercase mt-1 mb-1 drop-shadow-sm">HAPPY BIRTHDAY</h3>
                                <p className="text-gray-500 font-medium uppercase text-sm">(February MONTH)</p>
                            </div>

                            {/* Carousel Area */}
                            <div className="relative mx-auto w-full max-w-[300px]">

                                <div className="bg-[#FAF9F6] border-2 border-[#00693E] rounded-2xl p-6 text-center shadow-xl relative z-10 mx-auto w-full">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        navigation={{
                                            nextEl: '.swiper-btn-bday-next',
                                            prevEl: '.swiper-btn-bday-prev',
                                        }}
                                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                                        loop={true}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                    >
                                        {birthdays.map((bday, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="birthday-block-two">
                                                    <div className="w-24 h-24 mx-auto border-4 border-[#F5A623] rounded-full overflow-hidden mb-4 bg-white shadow-inner">
                                                        <img
                                                            src={bday.image}
                                                            alt={bday.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <h4 className="text-xl font-bold text-[#005331] mb-1">{bday.name}</h4>
                                                    <h5 className="text-[#00693E] font-semibold text-sm mb-2">{bday.class_sec}</h5>
                                                    <h3 className="text-[#F5A623] font-bold text-lg mb-1">{bday.date}</h3>
                                                    <p className="text-gray-500 text-sm">{bday.role}</p>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                {/* Navigation Controls */}
                                <button className="swiper-btn-bday-prev absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20 hover:bg-[#F5A623] text-[#005331] hover:text-white transition-colors border border-gray-100 flex items-center justify-center w-10 h-10">
                                    <FaChevronLeft className="w-4 h-4" />
                                </button>

                                <button className="swiper-btn-bday-next absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20 hover:bg-[#F5A623] text-[#005331] hover:text-white transition-colors border border-gray-100 flex items-center justify-center w-10 h-10">
                                    <FaChevronRight className="w-4 h-4" />
                                </button>

                                {/* Decorative Elements */}
                                <div className="absolute -left-16 -top-12 z-0 animate-[bounce_3s_infinite]">
                                    <img src="https://www.dwpsgrnoida.com/public/assets/images/icons/balloon-left.svg" alt="Balloon Left" className="w-20 opacity-80" />
                                </div>
                                <div className="absolute -right-16 -top-8 z-0 animate-[bounce_3.5s_infinite]">
                                    <img src="https://www.dwpsgrnoida.com/public/assets/images/icons/balloon-right.svg" alt="Balloon Right" className="w-24 opacity-80" />
                                </div>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 transform -rotate-12">
                                    <img src="https://www.dwpsgrnoida.com/public/assets/images/icons/birthday-cap.svg" alt="Birthday Cap" className="w-12 drop-shadow-lg" />
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
