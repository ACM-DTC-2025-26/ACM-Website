import React from "react";
import NavBar from "../components/NavBar";
import techguy from "../assets/techguy.png";
import insta from "../assets/Icons/instagram.svg";
import linkedin from "../assets/Icons/Linked-white.svg";
import x from "../assets/Icons/X.svg";
import group from "../assets/AboutUsPage/wallpaper.jpg"
import event1 from '../assets/Events/event1.png'
import event2 from '../assets/Events/event2.png'
import event3 from '../assets/Events/event3.png'
import event4 from '../assets/Events/event4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import president from "../assets/Team/President.jpg"
import powerbi from "../assets/pdfs/powerbi.png"
import excel from "../assets/pdfs/excel.png"
import sixsigma from "../assets/pdfs/sixsigma.png"
import sql from "../assets/pdfs/sql.png"
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import CursorGrid from "../components/CursorGrid";

function Home() {

    const events = [
        {
            image: event1,
            title: "Code The Debugger- Automation Using Python",
        },
        {
            image: event2,
            title: "Career Guidance, Resume Creation and LinkedIn Optimization",
        },
        {
            image: event3,
            title: "Tech Titans Unite",
        },
        {
            image: event4,
            title: "Netflix and Code",
        },
    ];

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="bg-linear-to-r from-gray-100 to-purple-100 min-h-screen">
            <CursorGrid />
            <NavBar />

            <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">

                {/* LEFT CONTENT */}
                <div
                    className={`
      max-w-xl flex flex-col gap-6
      transition-all duration-[2500ms] ease-out
      ${show ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
    `}
                >
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md w-fit font-medium">
                        INSPIRING THE FUTURE OF COMPUTING AT
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        ACM DELHI TECHNICAL CAMPUS
                    </h1>

                    <p className="text-gray-700 text-base leading-relaxed">
                        DTC ACM Student Chapter believes in providing a{" "}
                        <span className="text-blue-600 font-medium">
                            healthy environment
                        </span>{" "}
                        where creativity and imagination can flourish...
                    </p>

                    <div className="flex gap-4 mt-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                            Join Us
                        </button>

                        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                            Know More
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                        <span className="text-sm text-gray-600">Connect with us</span>
                        <div className="h-px w-20 bg-gray-400"></div>

                        <div className="flex gap-3 ml-2">
                            <img src={linkedin} className="w-5 cursor-pointer" />
                            <img src={x} className="w-5 cursor-pointer" />
                            <img src={insta} className="w-5 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className={`
      mt-12 md:mt-0
      transition-all duration-[2500ms] ease-out delay-200
      ${show ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"}
    `}
                >
                    <img
                        src={techguy}
                        alt="Tech Guy"
                        className="w-120 md:w-175 object-contain"
                    />
                </div>

            </section>


            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl flex flex-col gap-6">

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            What is <span className="text-blue-600">ACM</span> and how <br />will <span className="text-blue-600">ACM DTC</span> help you
                        </h2>

                        <p className="text-gray-600 text-base leading-relaxed">
                            ACM (Association for Computing Machinery) is a major organization in the
                            field of computing and information technology. It is a global community
                            that offers a wide range of resources and activities for professionals,
                            educators, and students.
                        </p>

                        <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
                            <li>Work together on innovative projects</li>
                            <li>Connect with industry professionals, alumni and peers</li>
                            <li>Participate in hackathons and competitions</li>
                            <li>Get access to exclusive resources and tools</li>
                            <li>Enhance technical skills through workshops and projects</li>
                        </ul>

                        <button className="w-fit mt-4 border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
                            Know More
                        </button>
                    </div>

                    {/* RIGHT IMAGE WITH BACKGROUND BLOCK */}
                    <div className="relative flex items-center justify-center">

                        {/* Purple background block */}
                        <div className="absolute left-60 -top-32 w-62.5 h-132 bg-purple-300 rounded-3xl"></div>

                        {/* Image */}
                        <img
                            src={group}
                            alt="ACM Group"
                            className="relative z-10 w-87.5 md:w-105 rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                </div>
            </section>

            <section>
                <div className="flex flex-col justify-center items-center h-screen w-screen">
                    <header className="text-7xl font-bold">
                        MEET OUR <span className="text-blue-600">AMAZING</span><br />
                        MENTOR AND TEAM
                    </header>
                    <p className="text-3xl font-bold">Still faces, Infinite Stories</p>
                </div>
            </section>

            <section>
                <header className="text-5xl font-bold text-center">Check Out Our Recent Events</header>
                <div className="w-full m-16 border-y-2 py-6">
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        slidesPerView={3}
                        spaceBetween={16}
                        speed={6000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={false}
                        className="h-50 md:h-75 lg:h-100"
                    >
                        {events.map((event, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={event.image}
                                    alt={`slide-${index}`}
                                    className="w-full h-full object-cover"
                                />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>


            <section>
                <div className="h-screen w-screen">
                    <header className="text-5xl font-bold text-center">AWARDS AND ACHIEVMENTS</header>
                </div>
            </section>

            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

                    {/* Heading */}
                    <h2 className="text-5xl font-extrabold text-center">
                        MEET OUR <span className="text-blue-600">PRESIDENT</span>
                    </h2>

                    {/* Content */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* Left Placeholder / Content Box */}
                        <div className="w-full md:w-[65%] h-62.5 md:h-75 bg-gray-300 rounded-3xl">
                            {/* You can add text/content here later */}
                        </div>

                        {/* President Image */}
                        <div className="w-full md:w-[30%] flex justify-center">
                            <img
                                src={president}
                                alt="President"
                                className="w-62.5 md:w-75 h-75 object-cover rounded-md shadow-lg"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="bg-gray-200 py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

                    {/* Heading */}
                    <h2 className="text-5xl font-extrabold text-center">
                        HERE ARE SOME <span className="text-blue-600">HELPFUL</span> <br />
                        RESOURCES
                    </h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

                        {/* Left Tall Card */}
                        <div className="rounded-2xl overflow-hidden border-16 border-white relative group">
                            <img
                                src={powerbi}
                                alt="Power BI"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                            <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                                POWER BI <br /> RESOURCES
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="md:col-span-2 flex flex-col gap-6">

                            {/* Top Wide Card */}
                            <div className="rounded-2xl overflow-hidden border-16 border-white relative">
                                <img
                                    src={sql}
                                    alt="SQL"
                                    className="w-full h-45 object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                                    SQL CHEATSHEET
                                </p>
                            </div>

                            {/* Bottom Two Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="rounded-2xl overflow-hidden border-16 border-white relative">
                                    <img
                                        src={sixsigma}
                                        alt="Six Sigma"
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                                    <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                                        SIX SIGMA <br /> GUIDANCE
                                    </p>
                                </div>

                                <div className="rounded-2xl overflow-hidden border-16 border-white relative">
                                    <img
                                        src={excel}
                                        alt="Excel"
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                                    <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                                        TOP 50 EXCEL <br /> QUESTIONS
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-white py-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h2>

                    {/* Input + Button */}
                    <div className="w-full flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 w-full px-4 py-3 rounded-lg outline-none bg-white border border-gray-300"
                        />

                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full md:w-auto">
                            Subscribe
                        </button>

                    </div>

                </div>
            </section>

            <Footer />

        </div>
    );
}

export default Home;