export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "School Profile", href: "/about/profile" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Infrastructure", href: "/about/infrastructure" },
      { label: "Mandatory Disclosure", href: "/about/disclosure" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Examination", href: "/academics/examination" },
      { label: "Results", href: "/academics/results" },
      { label: "Achievements", href: "/academics/achievements" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions/process" },
      { label: "Fee Structure", href: "/admissions/fee" },
      { label: "Apply Online", href: "/admissions/apply" },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    children: [
      { label: "Sports", href: "/activities/sports" },
      { label: "Cultural", href: "/activities/cultural" },
      { label: "Clubs", href: "/activities/clubs" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
