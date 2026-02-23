"use client";

import Link from "next/link";
import { FaAngleDoubleRight, FaPhoneAlt } from "react-icons/fa";

export default function AdmissionSection() {
    return (
        <section className="admission-section relative py-20 overflow-hidden bg-[#005331]">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row items-center border-[6px] border-[#F5A623]/20">

                    {/* Left - 50% Off Highlight */}
                    <div className="w-full md:w-2/5 bg-[#F5A623] text-white p-10 md:p-14 flex flex-col items-center justify-center text-center h-full">
                        <h3 className="text-6xl md:text-7xl font-black mb-4 drop-shadow-md">
                            50%
                        </h3>
                        <p className="text-xl md:text-2xl font-bold uppercase tracking-wider leading-snug">
                            Off on Admission Fee<br />
                            <span className="text-sm md:text-base opacity-90 mt-2 block tracking-widest">
                                For First 50 Admissions
                            </span>
                        </p>
                    </div>

                    {/* Right - Admission Info */}
                    <div className="w-full md:w-3/5 p-10 md:p-12 text-center md:text-left flex flex-col items-center md:items-start bg-white">
                        <h2 className="text-4xl md:text-5xl font-black text-[#005331] uppercase tracking-wider mb-2 drop-shadow-sm">
                            Admission Open
                        </h2>
                        <h6 className="text-xl md:text-2xl font-bold text-gray-700 tracking-wide mb-2 md:mb-1">
                            (Pre-Nursery - IX and XI)
                        </h6>
                        <p className="text-xl font-extrabold text-[#F5A623] mb-8 bg-[#F5A623]/10 inline-block px-4 py-1.5 rounded shadow-sm">
                            2026 - 2027
                        </p>

                        <Link
                            href="https://sssgi.myclassboard.com/ApplicationForm_Custom/23192953-D881-47D5-A512-69CE2414B41B/1/0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-[#005331] text-white font-bold text-lg uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto text-center flex items-center justify-center gap-3 mb-6"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                ENROLL NOW
                                <FaAngleDoubleRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-[#F5A623] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                        </Link>

                        <div className="text-gray-600 font-medium text-lg flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
                            <span>For any queries call:</span>
                            <span className="font-bold text-[#005331] flex items-center justify-center gap-2 text-xl">
                                <FaPhoneAlt className="text-[#F5A623] text-lg" />
                                +91 9911673386
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
