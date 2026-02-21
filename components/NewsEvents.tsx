"use client";

import Link from "next/link";
import Image from "next/image";
import { HiCalendar, HiArrowRight } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const news = [
  {
    id: 1,
    type: "news",
    date: "15 Feb 2025",
    category: "Achievement",
    title: "DWPS Students Win National Science Olympiad",
    excerpt:
      "Our students brought glory to the school by winning top positions at the National Science Olympiad 2025, held in New Delhi.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=70",
    href: "/news/science-olympiad-2025",
  },
  {
    id: 2,
    type: "event",
    date: "22 Feb 2025",
    category: "Upcoming Event",
    title: "Annual Sports Day 2025",
    excerpt:
      "Join us for the grand Annual Sports Day celebration. Parents and guardians are cordially invited to cheer for our young athletes.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=70",
    href: "/events/sports-day-2025",
    location: "School Ground",
  },
  {
    id: 3,
    type: "news",
    date: "10 Feb 2025",
    category: "Academic",
    title: "Board Exam Results 2024 — Outstanding Performance",
    excerpt:
      "Class X and XII students delivered outstanding performances in CBSE Board Exams 2024 with 100% pass rate and 30+ distinctions.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=70",
    href: "/news/board-results-2024",
  },
];

const upcomingEvents = [
  {
    date: "22",
    month: "Feb",
    title: "Annual Sports Day",
    time: "8:00 AM - 1:00 PM",
    location: "School Ground",
  },
  {
    date: "01",
    month: "Mar",
    title: "Parent-Teacher Meeting",
    time: "10:00 AM - 2:00 PM",
    location: "School Auditorium",
  },
  {
    date: "15",
    month: "Mar",
    title: "Science Exhibition",
    time: "9:00 AM - 4:00 PM",
    location: "School Premises",
  },
  {
    date: "25",
    month: "Mar",
    title: "Cultural Fest - Utsav",
    time: "5:00 PM - 9:00 PM",
    location: "School Auditorium",
  },
];

export default function NewsEvents() {
  return (
    <section className="py-20 bg-body-bg">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <SectionTitle
          subtitle="Latest Updates"
          title="News & Upcoming Events"
          description="Stay updated with the latest happenings at DWPS Greater Noida."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News cards - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {news.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex gap-0">
                  <div className="relative w-44 flex-shrink-0 hidden sm:block">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 0vw, 176px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-medium font-rubik px-2.5 py-1 rounded-full ${item.type === "event"
                            ? "bg-orange/10 text-orange"
                            : "bg-primary/10 text-primary"
                          }`}
                      >
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400 font-rubik">
                        <HiCalendar className="text-gray-300" />
                        {item.date}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1 text-xs text-gray-400 font-rubik">
                          <FaMapMarkerAlt className="text-gray-300 text-[10px]" />
                          {item.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-marcellus text-lg text-dark-text mb-2 group-hover:text-primary transition-colors leading-snug">
                      <Link href={item.href}>{item.title}</Link>
                    </h3>
                    <p className="font-rubik text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
                      {item.excerpt}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark font-rubik transition-colors"
                    >
                      Read More <HiArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
            <div className="text-center pt-2">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-7 py-3 rounded-full transition-all duration-300 font-rubik text-sm"
              >
                All News & Events
              </Link>
            </div>
          </div>

          {/* Events sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <div className="bg-primary px-6 py-4">
                <h3 className="font-marcellus text-white text-xl">
                  Upcoming Events
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.title}
                    className="flex gap-4 p-5 hover:bg-body-bg transition-colors group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex flex-col items-center justify-center group-hover:bg-primary transition-colors">
                      <span className="font-marcellus text-xl text-primary group-hover:text-white leading-none transition-colors">
                        {event.date}
                      </span>
                      <span className="text-[10px] text-primary/70 group-hover:text-white/80 font-rubik uppercase transition-colors">
                        {event.month}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-rubik font-semibold text-sm text-dark-text mb-1 group-hover:text-primary transition-colors leading-snug">
                        {event.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-rubik">
                        {event.time}
                      </p>
                      <p className="text-xs text-gray-400 font-rubik flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[9px]" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 border-t border-gray-100">
                <Link
                  href="/events"
                  className="block text-center bg-body-bg hover:bg-primary text-primary hover:text-white font-medium text-sm py-3 rounded-lg transition-all duration-300 font-rubik"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
