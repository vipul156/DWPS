"use client";

import Link from "next/link";
import { HiPhone, HiMail, HiArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";

export default function EnrollSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-body-bg rounded-l-[80px] hidden lg:block" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA content */}
          <div>
            <span className="inline-block text-orange font-medium text-sm uppercase tracking-[3px] mb-3 font-rubik">
              Admissions 2025-26
            </span>
            <h2 className="font-marcellus text-3xl md:text-4xl text-dark-text leading-tight mb-5">
              Enroll Your Child in{" "}
              <span className="text-primary">Excellence</span> Today
            </h2>
            <p className="font-rubik text-gray-600 text-base leading-relaxed mb-8">
              Secure your child&apos;s future at Delhi World Public School,
              Greater Noida. Admissions are now open for classes Nursery to
              XII. Limited seats available — apply today!
            </p>

            {/* Quick contact */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-body-bg rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-rubik uppercase tracking-wide mb-0.5">
                    Call Us
                  </div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-rubik font-semibold text-dark-text hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-body-bg rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiMail className="text-orange text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-rubik uppercase tracking-wide mb-0.5">
                    Email Us
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-rubik font-semibold text-dark-text hover:text-orange transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium px-7 py-3.5 rounded transition-all duration-300 hover:shadow-lg font-rubik"
              >
                Apply Online <HiArrowRight />
              </Link>
              <a
                href="https://wa.me/919818234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-medium px-7 py-3.5 rounded transition-all duration-300 hover:shadow-lg font-rubik"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Admission form */}
          <div className="bg-white rounded-2xl shadow-card-hover p-8 border border-gray-100">
            <h3 className="font-marcellus text-2xl text-dark-text mb-1">
              Quick Enquiry
            </h3>
            <p className="font-rubik text-gray-500 text-sm mb-6">
              Fill the form and we&apos;ll get back to you soon
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5 font-rubik uppercase tracking-wide">
                    Parent Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-rubik text-dark-text placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5 font-rubik uppercase tracking-wide">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Child's name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-rubik text-dark-text placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5 font-rubik uppercase tracking-wide">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-rubik text-dark-text placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5 font-rubik uppercase tracking-wide">
                    Class Applying For *
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-rubik text-dark-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white">
                    <option value="">Select Class</option>
                    {[
                      "Nursery",
                      "KG",
                      "Class I",
                      "Class II",
                      "Class III",
                      "Class IV",
                      "Class V",
                      "Class VI",
                      "Class VII",
                      "Class VIII",
                      "Class IX",
                      "Class X",
                      "Class XI",
                      "Class XII",
                    ].map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5 font-rubik uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-rubik text-dark-text placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5 font-rubik uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Any specific questions or requirements..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-rubik text-dark-text placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg font-rubik text-sm"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
