"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTrophy,
  FaSchool,
} from "react-icons/fa";

const stats = [
  {
    icon: FaUserGraduate,
    number: 3500,
    suffix: "+",
    label: "Students Enrolled",
    desc: "Active learners on campus",
  },
  {
    icon: FaChalkboardTeacher,
    number: 150,
    suffix: "+",
    label: "Expert Faculty",
    desc: "Qualified & dedicated teachers",
  },
  {
    icon: FaTrophy,
    number: 50,
    suffix: "+",
    label: "Awards Won",
    desc: "National & state recognition",
  },
  {
    icon: FaSchool,
    number: 18,
    suffix: "+",
    label: "Years of Excellence",
    desc: "Serving the community",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-marcellus text-5xl text-yellow leading-none">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #056a43 0%, #033d27 100%)",
      }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/30"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-white/20 transition-colors duration-300">
                <stat.icon className="text-yellow text-2xl" />
              </div>
              <Counter target={stat.number} suffix={stat.suffix} />
              <div className="font-rubik font-semibold text-white text-base mt-2 mb-1">
                {stat.label}
              </div>
              <div className="font-rubik text-white/60 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
