import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const programs = [
    {
        title: "Primary School",
        subtitle: "PREP TO CLASS 5",
        description: "The primary grades aim to keep the lamp of knowledge burning bright. It imparts values which stay with students all their life. We engage students in activities that bring them joy and vigor to motivate them to take interest in their education.",
        image: "https://www.dwpsgrnoida.com/public/uploads/explore-dwps/175438155998.jpg",
        link: "/primary-school",
    },
    {
        title: "Middle School",
        subtitle: "CLASS 6 TO CLASS 8",
        description: "At middle level, the prime focus is on enabling participatory learning amongst students. We follow them throughout school years and engage with them fruitfully.",
        image: "https://www.dwpsgrnoida.com/public/uploads/explore-dwps/175438179472.jpg",
        link: "/middle-school",
    },
    {
        title: "Higher Secondary School",
        subtitle: "CLASS 9 TO CLASS 12",
        description: "At this stage, students form lasting relationships with peers and teachers. They decide on potential career paths by choosing from specialized subjects. They engage in advanced coursework and choose streams which align with their career goals.",
        image: "https://www.dwpsgrnoida.com/public/uploads/explore-dwps/175438190390.jpg",
        link: "/Higher-Secondary-School",
    },
];

export default function ExploreDWPS() {
    return (
        <section className="explore-dwps py-24 bg-white overflow-hidden relative">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Title Section */}
                <div className="text-center mb-16 relative">
                    <span className="text-[#00693E] font-bold tracking-widest text-sm uppercase mb-2 px-4 py-1 bg-white inline-block shadow-sm rounded border-l-4 border-[#F5A623]">
                        OPPORTUNITY AWAITS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#005331] uppercase mb-4 drop-shadow-sm">
                        EXPLORE DWPS
                    </h2>
                    <p className="text-gray-500 font-semibold tracking-widest text-sm uppercase flex items-center justify-center gap-4">
                        <span className="w-12 h-0.5 bg-[#F5A623]"></span>
                        DISCOVER YOURSELF ON THE JOURNEY AHEAD
                        <span className="w-12 h-0.5 bg-[#F5A623]"></span>
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <Link href={program.link} key={index} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl relative">

                                {/* Image Box */}
                                <div className="relative h-[240px] w-full overflow-hidden">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                                    {/* Floating Subtitle */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-[#F5A623] text-white text-xs font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider">
                                            {program.subtitle}
                                        </span>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-[#005331] mb-3 group-hover:text-[#F5A623] transition-colors duration-300">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-4 leading-relaxed mb-6 flex-grow">
                                        {program.description}
                                    </p>

                                    <div className="mt-auto">
                                        <span className="inline-flex items-center gap-2 text-[#00693E] font-bold uppercase tracking-wider group-hover:text-[#F5A623] transition-colors duration-300">
                                            LEARN MORE
                                            <span className="w-8 h-8 rounded-full bg-[#00693E]/10 flex items-center justify-center group-hover:bg-[#F5A623]/20 group-hover:translate-x-1 transition-all duration-300">
                                                <FaAngleDoubleRight />
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                {/* Decorative Line border bottom */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#00693E] transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            {/* Abstract Backgrounds */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00693E]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        </section>
    );
}
