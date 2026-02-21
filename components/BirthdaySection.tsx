"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

export default function BirthdaySection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const birthdays = [
        {
            name: "Nikhil Kumar",
            class_sec: "VI B",
            date: "21st February",
            role: "Student",
            image: "https://www.dwpsgrnoida.com/public/assets/photo-not-available.jpg"
        },
        {
            name: "Aadya Singh",
            class_sec: "IV A",
            date: "23rd February",
            role: "Student",
            image: "https://www.dwpsgrnoida.com/public/assets/photo-not-available.jpg"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === birthdays.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? birthdays.length - 1 : prev - 1));
    };

    return (
        <section className="py-16 bg-white flex justify-center w-full">
            <div className="w-full max-w-lg">
                {/* Title Area */}
                <div className="text-center relative mb-8">
                    <div className="flex justify-center mb-2">
                        <Image src="https://www.dwpsgrnoida.com/public/assets/images/icons/birthday-flag.svg" alt="Birthday Flag" width={48} height={48} className="h-12 w-auto" />
                    </div>
                    <p className="text-[#00693E] font-bold tracking-widest text-sm uppercase">WISH YOU A VERY</p>
                    <h3 className="text-3xl font-extrabold text-[#005331] uppercase mt-1 mb-1">HAPPY BIRTHDAY</h3>
                    <p className="text-gray-500 font-medium uppercase text-sm">(February MONTH)</p>
                </div>

                {/* Carousel Area */}
                <div className="relative mx-auto" style={{ width: "300px" }}>

                    {/* Card Layout */}
                    <div className="bg-[#FAF9F6] border-2 border-[#00693E] rounded-2xl p-6 text-center shadow-xl relative z-10 mx-auto w-full">
                        <div className="relative w-24 h-24 mx-auto border-4 border-[#F5A623] rounded-full overflow-hidden mb-4 bg-white shadow-inner">
                            <Image
                                src={birthdays[currentIndex].image}
                                alt={birthdays[currentIndex].name}
                                fill
                                className="object-cover"
                                sizes="96px"
                            />
                        </div>
                        <h4 className="text-xl font-bold text-[#005331]">{birthdays[currentIndex].name}</h4>
                        <h5 className="text-[#00693E] font-semibold text-sm mb-2">{birthdays[currentIndex].class_sec}</h5>
                        <h3 className="text-[#F5A623] font-bold text-lg">{birthdays[currentIndex].date}</h3>
                        <p className="text-gray-500 text-sm mt-1">{birthdays[currentIndex].role}</p>
                    </div>

                    {/* Navigation Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20 hover:bg-[#F5A623] text-[#005331] hover:text-white transition-colors border border-gray-100 flex items-center justify-center w-10 h-10"
                    >
                        <FaChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20 hover:bg-[#F5A623] text-[#005331] hover:text-white transition-colors border border-gray-100 flex items-center justify-center w-10 h-10"
                    >
                        <FaChevronRight className="w-4 h-4" />
                    </button>

                    {/* Decorative Elements */}
                    <div className="absolute -left-16 -top-12 z-0 animate-bounce" style={{ animationDuration: '3s' }}>
                        <Image src="https://www.dwpsgrnoida.com/public/assets/images/icons/balloon-left.svg" alt="Balloon Left" width={80} height={100} className="w-20 h-auto" />
                    </div>
                    <div className="absolute -right-16 -top-8 z-0 animate-bounce" style={{ animationDuration: '3.5s' }}>
                        <Image src="https://www.dwpsgrnoida.com/public/assets/images/icons/balloon-right.svg" alt="Balloon Right" width={96} height={120} className="w-24 h-auto" />
                    </div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 transform -rotate-12">
                        <Image src="https://www.dwpsgrnoida.com/public/assets/images/icons/birthday-cap.svg" alt="Birthday Cap" width={48} height={48} className="w-12 h-auto" />
                    </div>

                </div>
            </div>
        </section>
    );
}
