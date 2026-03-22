import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import powerbi from "../assets/resources/resource2.jpg";
import ai from "../assets/resources/resource1.jpg";
import web from "../assets/resources/resource4.jpg";
import dsa from "../assets/resources/resource3.jpg";
import CursorGrid from "../components/CursorGrid";

const resourcesData = [
  {
    title: "Power BI Interview Questions",
    subtitle: "PDF • Interview Prep",
    image: powerbi,
    link: "/resources-pdf/resources_🌟 Power BI Interview Questions and Answers 🌟.pdf",
  },
  {
    title: "Power BI Resources",
    subtitle: "PDF • Analytics",
    image: ai,
    link: "/resources-pdf/resources_Power BI Resources.pdf",
  },
  {
    title: "SQL Cheatsheet",
    subtitle: "PDF • Databases",
    image: web,
    link: "/resources-pdf/resources_SQL_Cheatsheet.pdf",
  },
  {
    title: "Top 50 Excel Questions",
    subtitle: "PDF • Productivity",
    image: dsa,
    link: "/resources-pdf/resources_Top 50 Excel questions .pdf",
  },
];

const Resources = () => {
  return (
    <>
      <Navbar />
      <CursorGrid />

      <section className="resources-page">
        <h1 className="heading">
          <span>Curated</span> resources to power your <br /> tech journey
        </h1>

        <div className="resources-container">
          {resourcesData.map((item, index) => (
            <div key={index} className="resource-card">
              <img src={item.image} alt={item.title} />

              {/* INFO BAR — ONLY CLICKABLE PART */}
              <div
                className="resource-info"
                onClick={() => window.open(item.link, "_blank")}
              >
                <div className="white-dot"></div>

                <div className="text-group">
                  <p className="resource-title">{item.title}</p>
                  <p className="resource-subtitle">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* ================= STYLES ================= */}
      <style>{`
        .resources-page {
          min-height: 100vh;
          padding: 80px 5%;
          background: #ffffff;
          text-align: center;
        }

        .heading {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 60px;
          line-height: 1.2;
        }

        .heading span {
          color: #0b5ed7;
        }

        .resources-container {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* ================= CARD ================= */
        .resource-card {
          width: 150px;
          height: 340px;
          border-radius: 70px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: #eaeaea;
          transition: all 0.45s ease;
        }

        .resource-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ================= INFO BAR ================= */
        .resource-info {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
          cursor: pointer;
        }

        /* WHITE DOT — ALWAYS VISIBLE */
        .white-dot {
          width: 14px;
          height: 14px;
          background: #ffffff;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* TEXT — HIDDEN BY DEFAULT */
        .text-group {
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
          text-align: left;
        }

        /* ================= HOVER EXPANSION ================= */
        .resource-card:hover {
          width: 370px;
          height: 370px;
          border-radius: 40px;
          transform: translateY(-6px);
        }

        .resource-card:hover .text-group {
          opacity: 1;
          transform: translateX(0);
        }

        .resource-title {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.2;
        }

        .resource-subtitle {
          font-size: 12px;
          color: #d1d1d1;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 768px) {
          .resources-container {
            flex-direction: column;
            align-items: center;
          }

          .resource-card {
            width: 98%;
            height: 270px;
            border-radius: 28px;
          }

          .resource-card:hover {
          width: 98%;
          height: 290px;
          }
        }
      `}</style>
    </>
  );
};

export default Resources;
