import NavBar from "../components/NavBar";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

import acmLogo from "../assets/ACMLogo.png";
import heroImg from "../assets/hero.png";
import CursorGrid from "../components/CursorGrid";

const JoinUs = () => {
  return (
    <>
      <style>{`
        .joinus-page * {
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        .joinus-page {
          min-height: 100vh;
          background: #fff;
          display: flex;
          flex-direction: column;
        }

        .joinus-content {
          max-width: 1400px;
          margin: auto;
          padding: 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex: 1;
        }

        .hero-container {
          flex: 1;
          display: flex;
          align-items: flex-end;
        }

        .hero-container img {
          width: 100%;
          max-width: 520px;
          object-fit: contain;
        }

        .joinus-card {
          width: 420px;
          background: linear-gradient(180deg, #ffffff, #999999);
          border-radius: 25px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .card-logo {
          width: 200px;
          height: 150px;
        }

        .card-title {
          color: #3374cc;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .joinus-btn {
          width: 100%;
          height: 52px;
          border-radius: 30px;
          border: none;
          background: rgba(255, 255, 255, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .joinus-btn:hover {
          background: rgba(255, 255, 255, 0.55);
        }

        .joinus-btn span {
          font-size: 18px;
        }

        @media (max-width: 1024px) {
          .joinus-content {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }

          .hero-container img {
            max-width: 420px;
          }
        }
      `}</style>

      <div className="joinus-page">
        <CursorGrid />
        <NavBar />

        <div className="joinus-content">
          <div className="hero-container">
            <img src={heroImg} alt="Robot" />
          </div>

          <div className="joinus-card">
            <img src={acmLogo} alt="ACM" className="card-logo" />
            <p className="card-title">ACM DELHI TECHNICAL CAMPUS</p>

           
            <ActionButton
              text="Whatsapp"
              icon={<FaWhatsapp />}
              link="https://wa.me/XXXXXXXXXX"
            />
            <ActionButton
              text="LinkedIn"
              icon={<FaLinkedinIn />}
              link="https://www.linkedin.com/company/acm-student-chapter-delhi-technical-campus-ggsipu/posts/?feedView=all"
            />
           
            <ActionButton
              text="Instagram"
              icon={<FaInstagram />}
              link="https://www.instagram.com/acm_dtc/"
            />
             <ActionButton
              text="X"
              icon={<FaXTwitter />}
              link="https://twitter.com/acm"
            />
            <ActionButton
              text="Linktree"
              icon={<SiLinktree />}
              link="https://linktr.ee/acm"
            />
             <ActionButton
              text="Become an ACM Member"
              link="https://www.acm.org/membership"
            />
          </div>
        </div>
      </div>
    </>
  );
};

/* 🔹 Reusable Button Component */
const ActionButton = ({ text, icon, link }) => (
  <button
    className="joinus-btn"
    onClick={() => window.open(link, "_blank")}
  >
    {icon && <span>{icon}</span>}
    {text}
  </button>
);

export default JoinUs;
