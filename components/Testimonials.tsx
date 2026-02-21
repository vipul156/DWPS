"use client";

import { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  const getVisible = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length);
    }
    return indices;
  };

  return (
    <section className="py-20 bg-body-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-8">
        <SectionTitle
          subtitle="Testimonials"
          title="What Parents Say About Us"
          description="Hear from our school community about their experience at Delhi World Public School, Greater Noida."
          align="center"
        />

        {/* Desktop: show 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {getVisible().map((idx, pos) => {
            const testimonial = testimonials[idx];
            const isCenter = pos === 1;
            return (
              <div
                key={testimonial.id}
                className={cn(
                  "bg-white rounded-2xl p-8 transition-all duration-500",
                  isCenter
                    ? "shadow-card-hover scale-105 border-t-4 border-primary"
                    : "shadow-card opacity-75 scale-95 hover:opacity-100 hover:scale-100 cursor-pointer"
                )}
                onClick={() => !isCenter && setCurrent(idx)}
              >
                <FaQuoteLeft
                  className={cn(
                    "text-3xl mb-4",
                    isCenter ? "text-primary" : "text-gray-200"
                  )}
                />
                <p className="font-rubik text-gray-600 text-sm leading-relaxed mb-6 line-clamp-5">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow text-sm" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-marcellus text-primary text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-rubik font-semibold text-dark-text text-sm">
                      {testimonial.name}
                    </div>
                    <div className="font-rubik text-xs text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-2xl p-7 shadow-card-hover border-t-4 border-primary">
            <FaQuoteLeft className="text-3xl text-primary mb-4" />
            <p className="font-rubik text-gray-600 text-sm leading-relaxed mb-5">
              {testimonials[current].content}
            </p>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow text-sm" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-marcellus text-primary text-lg font-bold">
                  {testimonials[current].name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-rubik font-semibold text-dark-text text-sm">
                  {testimonials[current].name}
                </div>
                <div className="font-rubik text-xs text-gray-400">
                  {testimonials[current].role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-300"
          >
            <HiChevronLeft className="text-xl" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current ? "w-7 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-300"
          >
            <HiChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
