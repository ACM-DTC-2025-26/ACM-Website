import React from "react";
import logo from "../assets/ACMLogo.png";
import { Link } from "react-router-dom";
import linkedIn from "../assets/Icons/Linked.svg"
import mail from "../assets/Icons/mail.svg"
import x from "../assets/Icons/X.svg"
import instagram from "../assets/Icons/instagram.svg"

function Footer() {
  return (
    <footer className="bg-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo column */}
        <div className="flex justify-start">
          <img src={logo} alt="ACM Logo" className="w-96" />
        </div>

        {/* Description column */}
        <div>
          <p className="text-sm text-black leading-relaxed">
            ACM boosts up the potential and talent, supporting the overall
            development needs of our students to facilitate a structured path
            from education to employment by providing a safe and supported
            space where creative talent and imagination can flourish in a
            caring environment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 flex flex-col items-start">
          <h2 className="text-sm font-semibold uppercase tracking-wide bg-[#09357A33] text-[#09357A] p-2 text-center w-fit">
            Quick Links
          </h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
            <Link to="/home" className="hover:text-blue-600">Home</Link>
            <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
            <Link to="/resources" className="hover:text-blue-600">Resources</Link>
            <Link to="/team" className="hover:text-blue-600">Team</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3 flex flex-col items-start text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide bg-[#09357A33] text-[#09357A] p-2 text-center w-fit">
            Contact Us At
          </h2>
          <div className="flex flex-col  text-sm text-gray-600 text-center">

            <div className="flex flex-row justify-start gap-2 align-middle p-2">
              <img src={linkedIn} />
              <a href="#" className="hover:text-blue-600">LinkedIn</a>
            </div>

            <div className="flex flex-row justify-start gap-2 p-2">
              <img src={x} />
              <a href="#" className="hover:text-blue-600">X</a>
            </div>

            <div className="flex flex-row justify-start gap-2 align-middle p-2">
              <img src={instagram} />
              <a href="#" className="hover:text-blue-600">Instagram</a>
            </div>

            <div className="flex flex-row justify-start gap-2 align-middle p-2">
              <img src={mail} />
              <a href="#" className="hover:text-blue-600">Email</a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0B3A75] py-2 text-center">
        <p className="text-sm text-white">
          ©2025, DTC ACM STUDENT CHAPTER
        </p>
      </div>
    </footer>
  );
}

export default Footer;
