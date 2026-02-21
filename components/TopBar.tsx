"use client";

import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { siteConfig } from "@/data/site";

export default function TopBar() {
  return (
    <div className="bg-[#056a43] text-white py-2 hidden md:block">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 hover:text-yellow transition-colors"
            >
              <FaPhone className="text-orange text-[10px]" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-yellow transition-colors"
            >
              <FaEnvelope className="text-orange text-[10px]" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <FaClock className="text-orange text-[10px]" />
              <span>{siteConfig.timing}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <span className="text-white/70">Follow us:</span>
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                className="w-6 h-6 bg-white/10 hover:bg-orange rounded flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF className="text-[9px]" />
              </Link>
              <Link
                href={siteConfig.social.twitter}
                target="_blank"
                className="w-6 h-6 bg-white/10 hover:bg-orange rounded flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter className="text-[9px]" />
              </Link>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                className="w-6 h-6 bg-white/10 hover:bg-orange rounded flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="text-[9px]" />
              </Link>
              <Link
                href={siteConfig.social.youtube}
                target="_blank"
                className="w-6 h-6 bg-white/10 hover:bg-orange rounded flex items-center justify-center transition-all duration-300"
              >
                <FaYoutube className="text-[9px]" />
              </Link>
            </div>
            <Link
              href="/admissions/apply"
              className="bg-orange hover:bg-[#d4700f] text-white text-xs font-medium px-4 py-1.5 rounded transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
