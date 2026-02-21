import type { Metadata } from "next";
import { Rubik, Marcellus } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delhi World Public School, Greater Noida | CBSE Affiliated School",
  description:
    "Delhi World Public School, Greater Noida is a premier CBSE affiliated school offering holistic education with academic excellence, sports, arts, and values. Admissions open for 2025-26.",
  keywords:
    "DWPS Greater Noida, Delhi World Public School, CBSE school Greater Noida, best school Greater Noida, school admission 2025",
  openGraph: {
    title: "Delhi World Public School, Greater Noida",
    description:
      "Premier CBSE affiliated school with 18+ years of excellence in education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${marcellus.variable}`}>
      <body className="font-rubik bg-body-bg antialiased">{children}</body>
    </html>
  );
}
