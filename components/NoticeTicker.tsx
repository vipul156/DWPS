"use client";

import { FaBullhorn } from "react-icons/fa";

const notices = [
  "Admissions open for Session 2025-26 — Apply Now!",
  "Annual Sports Day on 15th March 2025 — All parents are invited",
  "CBSE Board Examination schedule announced — Visit academic section",
  "Result of Class X & XII declared — Congratulations to all students!",
  "School will remain closed on 26th January 2025 for Republic Day",
  "Parent-Teacher Meeting scheduled for 1st February 2025",
];

export default function NoticeTicker() {
  return (
    <div className="bg-white border-b border-gray-200 py-2.5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 flex items-center gap-2 bg-primary text-white text-xs font-medium px-3 py-1.5 rounded font-rubik whitespace-nowrap">
            <FaBullhorn className="text-yellow text-xs" />
            <span>NOTICE</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="ticker-content flex items-center gap-10 text-sm text-dark-text font-rubik">
              {notices.map((notice, i) => (
                <span key={i} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-orange font-bold">■</span>
                  {notice}
                </span>
              ))}
              {notices.map((notice, i) => (
                <span key={`dup-${i}`} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-orange font-bold">■</span>
                  {notice}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
