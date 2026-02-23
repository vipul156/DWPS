"use client";

import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";

const testimonialsData = [
  {
    id: 1,
    name: "Mr. & Mrs. Kunwar Parvez Ali Khan",
    role: "Parent",
    image: "https://www.dwpsgrnoida.com/public/uploads/testimonial/175440242415.jpg",
    content: "I'm Asra, mother of Saqib and Sumaira, studying at DWPS. We are very happy that our children are in such a good environment where the Principal is kind and nurturing. The teachers teach with love and affection, and the academics are excellent. The school offers a great environment with music, computer classes, and labs. Our daughter, studying in 12th, always praises the practical and lab facilities. Extracurricular and curricular activities are well-balanced here. Children are growing more active and everything is handled professionally. We really appreciate and recommend DWPS to all parents looking for a school that puts their children on a professional track. Thank you so much.",
  },
  {
    id: 2,
    name: "Dr. Mohammad Siddique",
    role: "Parent",
    image: "https://www.dwpsgrnoida.com/public/uploads/testimonial/175440249815.jpg",
    content: "Hello and very good afternoon. My name is Dr. Mohammad Siddique. I am an Associate Professor in Galgotias University and also the core research faculty. My two daughters, Noor Al Hayaa (2nd standard) and Hania (Prep), are studying in this school. We have seen a transformation in our kids with a lot of activities and cultural programs happening in the school. We hope this continues in the future. We would also like to emphasize the importance of language skills for our children and request the management to take extra care in this area. That's all from our side. We wish the school all the best and hope all children shape their careers here. Thank you.",
  },
  {
    id: 3,
    name: "Mrs. Prasanna",
    role: "Teacher",
    image: "https://www.dwpsgrnoida.com/public/uploads/testimonial/175440257137.jpg",
    content: "Hello everyone, I am Prasanna Kondapalli and I have been a part of Delhi World Public School Greater Noida for the past 8 years. It has been an incredible journey filled with learning, growth and wonderful memories. I have had a wonderful opportunity to work with amazing management, wonderful principals and very cooperative teachers. Here, our students develop not only physical fitness but very essential life skills like teamwork, discipline and perseverance. We encourage our students to push their limits, strive for excellence, enjoy the experience of victory and the grace of defeat. Looking forward for more meaningful contributions in the coming years. Thank you.",
  },
  {
    id: 4,
    name: "Mrs. Candice Marica Stevens",
    role: "Parent",
    image: "https://www.dwpsgrnoida.com/public/uploads/testimonial/175439530291.jpg",
    content: "Namastey, My name is Mrs. Stevens, and my son Ronan is in Class 9A at Delhi World Public School, Greater Noida. This is truly a fantastic school. The teachers, principal, sports, and academics are all excellent. The environment is clean, and students get many opportunities to grow through various activities and functions. The staff is very supportive and cooperative with both students and parents. If any issue arises, parents are called and guided properly. Hema ma’am and the other teachers are wonderful and always encourage the children. I’m very happy with the school and want my son to continue here till Class 12. I truly hope the school continues to grow and shine. Thank you.",
  },
  {
    id: 5,
    name: "Ms. Vandana Sharma",
    role: "Teacher",
    image: "https://www.dwpsgrnoida.com/public/uploads/testimonial/175440226438.jpg",
    content: "नमस्कार, मेरा नाम वंदना शर्मा है। मैं Delhi World Public School, Greater Noida में लगभग चार वर्ष से कार्यरत हूँ। मैं यहाँ पर हिंदी विषय के लिए अध्यापन पद पर कार्यरत हूँ। यहाँ की प्रबंधन समिति, प्रधानाचार्या और सभी शिक्षकगण भावनात्मक रूप से जुड़े हुए हैं। यही भावनात्मक जुड़ाव हमें दृढ़ता प्रदान करता है। हम यहाँ विद्यार्थियों के सर्वांगीण विकास के लिए सर्वप्रथम उनकी बुनियादी शिक्षा पर विशेष ध्यान देते हैं। बच्चों के अंदर हिंदी भाषा को लेकर उनके भाषा कौशल, व्याकरण, लेखन और संवाद संबंधी कौशल के विकास के लिए हम विविध शिक्षा विधियों का प्रयोग करते हैं। छात्रों के साथ जुड़कर हम उन्हें आत्मविश्वास के साथ हिंदी पढ़ने और बोलने में सक्षम बनाते हैं। धन्यवाद।",
  },
  {
    id: 6,
    name: "Dr. Rakhi Mishra",
    role: "Parent",
    image: "https://www.dwpsgrnoida.com/public/uploads/testimonial/175440233153.jpg",
    content: "Hello my dear friends, myself Dr. Rakhi Mishra, mother of Parth Raj Mishra, studying in Prey B at Delhi World Public School, Greater Noida. As a working woman, I always look for a school with supportive staff to help my child grow. This school is truly wonderful. The Principal Madam, admission staff Miss Sweta, and class teacher Miss Sapna are all very supportive and motivating. They provide great opportunities to enhance my child’s knowledge and skills. The infrastructure is well maintained, and the daycare facility from 9:00 to 5:30 gives me peace as a mother. I feel lucky to have found this school and highly recommend it to other parents. Thank you so much.",
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p === 0 ? testimonialsData.length - 1 : p - 1));
  const next = () =>
    setCurrent((p) => (p === testimonialsData.length - 1 ? 0 : p + 1));

  return (
    <section className="testimonial-section py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F5A623]/20 rounded-full blur-[40px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#005331]/10 rounded-full blur-[50px] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title Section */}
        <div className="text-center mb-16 relative">
          <span className="text-[#00693E] font-bold tracking-widest text-sm uppercase mb-2 px-4 py-1 bg-white inline-block shadow-sm rounded border-l-4 border-[#F5A623]">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#005331] uppercase mb-4 drop-shadow-sm">
            DWPS REVIEWS
          </h2>
          <p className="text-gray-500 font-semibold tracking-widest text-sm uppercase flex items-center justify-center gap-4">
            <span className="w-12 h-0.5 bg-[#F5A623]"></span>
            WHAT PEOPLE SAY ABOUT DWPS, GREATER NOIDA
            <span className="w-12 h-0.5 bg-[#F5A623]"></span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative min-h-[400px]">
            <div className="flex flex-col md:flex-row h-full absolute inset-0">

              {/* Image Side */}
              <div
                className="w-full md:w-2/5 h-64 md:h-full bg-cover bg-center transition-all duration-500 relative"
                style={{ backgroundImage: `url(${testimonialsData[current].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:bg-gradient-to-r md:from-transparent md:to-white/90"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative bg-white h-full overflow-hidden">
                <BsQuote className="text-6xl text-[#F5A623]/20 absolute top-6 left-6" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-grow overflow-y-auto pr-4 custom-scroll min-h-[150px] md:min-h-[200px]">
                    <p className="text-gray-600 font-medium text-lg leading-relaxed italic">
                      &quot;{testimonialsData[current].content}&quot;
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-6 mt-6 shrink-0">
                    <h4 className="text-xl font-bold text-[#005331]">
                      {testimonialsData[current].name}
                    </h4>
                    <span className="inline-block bg-[#F5A623] text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider mt-2">
                      {testimonialsData[current].role}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#005331] hover:text-white hover:bg-[#F5A623] focus:outline-none transition-all duration-300 z-20 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6"
            aria-label="Previous testimonial"
          >
            <FaAngleLeft className="text-xl mr-1" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#005331] hover:text-white hover:bg-[#F5A623] focus:outline-none transition-all duration-300 z-20 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-6"
            aria-label="Next testimonial"
          >
            <FaAngleRight className="text-xl ml-1" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${idx === current
                ? "w-8 h-2 bg-[#00693E]"
                : "w-2 h-2 bg-gray-300 hover:bg-[#F5A623]"
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
