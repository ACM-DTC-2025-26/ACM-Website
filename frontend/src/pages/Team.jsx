import React, { useState } from "react";
import NavBar from "../components/NavBar";

import bg from "../assets/Bg.jpg";
import avatar1 from "../assets/Team/President.jpg";
import avatar2 from "../assets/Team/Vice-president.png";
import avatar3 from "../assets/Team/Secretary.png";
import avatar4 from "../assets/Team/Membership.png";
import avatar5 from "../assets/Team/Webmaster.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TeamCarousel from "../components/TeamCorousel";
import Footer from "../components/Footer";
import mailWhite from "../assets/Icons/mail-white.svg"
import linkedInWhite from "../assets/Icons/Linked-white.svg"
import CursorGrid from "../components/CursorGrid";

function Team() {
  const avatars = [
    { image: avatar1, title: "Chairperson", name: "Kritagya Arora" },
    { image: avatar2, title: "Vice-Chairperson", name: "Kovidh Nougain" },
    { image: avatar3, title: "Secretary", name: "Ananya Tamta" },
    { image: avatar4, title: "Membership", name: "Garv Saini" },
    { image: avatar5, title: "Webmaster", name: "Aakarsh Mishra" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div>
      <NavBar />
      <CursorGrid />

      {/* FULL-WIDTH SPOTLIGHT SECTION */}
      <section className="relative w-full h-[90vh] overflow-hidden bg-black">

        {/* Background image */}
        <img
          src={bg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Spotlight / vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,rgba(0,0,0,0.85)_65%)]" />

        {/* Text */}
        <div className="absolute bottom-12 left-12 text-white">
          <h2 className="text-3xl font-semibold">
            {avatars[active].name}
          </h2>
          <p className="mt-1 text-sm uppercase tracking-widest opacity-80">
            {avatars[active].title}
          </p>

          <div className="flex gap-4 mt-4 text-sm opacity-90 align-middle">
            <a href="#"><img src={linkedInWhite} className="hover:cursor-pointer" /></a>
            <a href="#"><img src={mailWhite} className="hover:cursor-pointer" /></a>
          </div>
        </div>

        {/* Avatar selector */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {avatars.map((person, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all hover:cursor-pointer
                ${
                  active === index
                    ? "border-white scale-110"
                    : "border-white/40 opacity-70 hover:opacity-100"
                }
              `}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

      </section>

      <TeamCarousel team={avatars} />

      <Footer />
    </div>
  );
}

export default Team;
