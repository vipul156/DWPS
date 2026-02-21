import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Sports & Activities", href: "/activities/sports" },
  { label: "Contact Us", href: "/contact" },
  { label: "Fee Structure", href: "/admissions/fee" },
  { label: "Results", href: "/academics/results" },
];

const importantLinks = [
  { label: "CBSE Official Website", href: "https://cbse.gov.in" },
  { label: "CBSE Results", href: "https://cbseresults.nic.in" },
  { label: "NCERT", href: "https://ncert.nic.in" },
  { label: "Mandatory Disclosure", href: "/about/disclosure" },
  { label: "School Management Committee", href: "/about/smc" },
  { label: "Annual Reports", href: "/about/reports" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main footer */}
      <div className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <div className="text-white font-marcellus text-base leading-none font-bold">
                      DW
                    </div>
                    <div className="text-yellow text-[7px] font-rubik font-medium leading-none">
                      PS
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-marcellus text-white text-base leading-tight">
                    Delhi World
                  </div>
                  <div className="font-marcellus text-white text-base leading-tight">
                    Public School
                  </div>
                  <div className="font-rubik text-orange text-xs">
                    Greater Noida
                  </div>
                </div>
              </div>
              <p className="font-rubik text-white/60 text-sm leading-relaxed mb-5">
                Committed to providing world-class education and holistic
                development for over 18 years. CBSE affiliated institution
                nurturing future leaders.
              </p>
              {/* Social links */}
              <div className="flex gap-2">
                {[
                  { icon: FaFacebookF, href: siteConfig.social.facebook, label: "Facebook" },
                  { icon: FaTwitter, href: siteConfig.social.twitter, label: "Twitter" },
                  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
                  { icon: FaYoutube, href: siteConfig.social.youtube, label: "YouTube" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="text-xs" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-marcellus text-white text-lg mb-5 pb-3 border-b border-white/10 relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange" />
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-white/60 hover:text-orange text-sm font-rubik transition-colors duration-300 group"
                    >
                      <HiChevronRight className="text-orange text-xs opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Important Links */}
            <div>
              <h4 className="font-marcellus text-white text-lg mb-5 pb-3 border-b border-white/10 relative">
                Important Links
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange" />
              </h4>
              <ul className="space-y-2.5">
                {importantLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-white/60 hover:text-orange text-sm font-rubik transition-colors duration-300 group"
                    >
                      <HiChevronRight className="text-orange text-xs opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="font-marcellus text-white text-lg mb-5 pb-3 border-b border-white/10 relative">
                Contact Us
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange" />
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-orange text-xs" />
                  </div>
                  <p className="text-white/60 text-sm font-rubik leading-relaxed">
                    {siteConfig.address}
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-orange text-xs" />
                  </div>
                  <div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="block text-white/60 hover:text-orange text-sm font-rubik transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone2}`}
                      className="block text-white/60 hover:text-orange text-sm font-rubik transition-colors"
                    >
                      {siteConfig.phone2}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-orange text-xs" />
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white/60 hover:text-orange text-sm font-rubik transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-orange text-xs" />
                  </div>
                  <p className="text-white/60 text-sm font-rubik">{siteConfig.timing}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-rubik text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Delhi World Public School, Greater Noida. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="font-rubik text-white/50 hover:text-orange text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-rubik text-white/50 hover:text-orange text-sm transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/sitemap"
                className="font-rubik text-white/50 hover:text-orange text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
