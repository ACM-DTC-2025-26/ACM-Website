import React from "react";
import NavBar from "../components/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import event1 from '../assets/Events/event1.png'
import event2 from '../assets/Events/event2.png'
import event3 from '../assets/Events/event3.png'
import event4 from '../assets/Events/event4.png'
import Footer from "../components/Footer";
import CursorGrid from "../components/CursorGrid";

function Events() {
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


  return (
    <div className="bg-white">
      <NavBar />
      <CursorGrid />
      <div className="mt-20 flex flex-col justify-center items-center">
        <h1 className="text-black text-5xl font-bold"><span className="text-[#005DAA]">Fueling</span> Ideas, <span className="text-[#005DAA]">Powering</span> Innovation</h1>
        <h2 className="text-center m-2">Become part of a vibrant community of developers, designers, and tech enthusiasts who believe in<br />learning by doing.</h2>
      </div>
      <div className="w-full mt-16 border-y-2 py-6">
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

      <section className="py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            <span className="text-[#005DAA]">Empowering</span> the next generation
            <br />
            of <span className="text-[#005DAA]">innovators</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div key={index} className="flex justify-center">
              <div className="group relative bg-[#EAF2FA] p-6 rounded-xl shadow-md overflow-hidden hover:scale-125 hover:cursor-pointer">

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-90 w-auto object-contain
        transition-all duration-500
        group-hover:scale-110
        group-hover:brightness-50"
                />

                <div
                  className="absolute inset-0 flex items-center justify-center
        opacity-0 transition-all duration-500
        group-hover:opacity-100"
                >
                  <h3 className="text-xl font-semibold text-white text-center">
                    {event.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Events;