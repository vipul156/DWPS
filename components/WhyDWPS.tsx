"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const tabsData = [
    {
        id: "tab1",
        label: "Value Education",
        image: "https://www.dwpsgrnoida.com/public/uploads/our-differenc/175438387189.jpg",
        link: "/value-education",
    },
    {
        id: "tab2",
        label: "Learning Philosophy",
        image: "https://www.dwpsgrnoida.com/public/uploads/our-differenc/175438417963.jpg",
        link: "/learning-philosophy",
    },
    {
        id: "tab3",
        label: "Core Academics & Knowledge",
        image: "https://www.dwpsgrnoida.com/public/uploads/our-differenc/175438856720.jpg",
        link: "/core-academic-knowledge",
    },
    {
        id: "tab4",
        label: "Curriculum & Pedagogy",
        image: "https://www.dwpsgrnoida.com/public/uploads/our-differenc/175438865640.jpg",
        link: "/curriculum-and-pedagogy",
    },
];

export default function WhyDWPS() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const currentTab = tabsData.find((t) => t.id === activeTab) || tabsData[0];

    return (
        <section className="why-dwps-section py-20 bg-gray-50 overflow-hidden relative">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left - Text Content Area & Tabs */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="title-box mb-10 text-center lg:text-left">
                            <span className="text-[#00693E] font-bold tracking-widest text-sm uppercase mb-2 px-4 py-1 bg-white inline-block shadow-sm rounded border-l-4 border-[#F5A623]">
                                Our Difference
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#005331] uppercase mb-6 drop-shadow-sm">
                                Why DWPS?
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At DWPS, Greater Noida, we believe in quality education and holistic learning. It is the place to enrich your child with skills and knowledge to ace their future goals.
                            </p>
                        </div>

                        <div className="tabs flex flex-col gap-3">
                            {tabsData.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-left px-6 py-4 rounded shadow-sm border-l-4 font-bold text-lg transition-all duration-300 flex items-center justify-between group ${activeTab === tab.id
                                        ? "bg-[#00693E] text-white border-[#F5A623] ml-0 lg:ml-4"
                                        : "bg-white text-gray-700 hover:bg-gray-100 hover:text-[#00693E] border-transparent hover:border-[#F5A623]"
                                        }`}
                                >
                                    <span>{tab.label}</span>
                                    <FaAngleDoubleRight className={`transition-transform duration-300 ${activeTab === tab.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image Area */}
                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] flex items-center justify-center">
                        {/* Background abstract shape */}
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-[#F5A623]/20 rounded-full blur-3xl z-0"></div>

                        <div className="relative z-10 w-full h-full rounded-[30px] overflow-hidden shadow-[20px_20px_40px_rgba(0,0,0,0.1)] border-4 border-white group">
                            <Image
                                src={currentTab.image}
                                alt={currentTab.label}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 sm:p-10">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-md">
                                        {currentTab.label}
                                    </h3>
                                    <Link
                                        href={currentTab.link}
                                        className="inline-flex items-center gap-2 text-[#F5A623] font-bold uppercase tracking-wider hover:text-white transition-colors duration-300"
                                    >
                                        Learn more
                                        <FaAngleDoubleRight className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
