import { useState } from "react";
import Navbar from "../components/NavBar";   // adjust path if needed
import Footer from "../components/Footer";   // adjust path if needed
import CursorGrid from "../components/CursorGrid";


const images = [
  "/images/gallery/pic5.png",
  "/images/gallery/pic3.png",
  "/images/gallery/pic1.png",
  "/images/gallery/pic4.png",
  "/images/gallery/pic2.png",
];


const Gallery = () => {
  const [current, setCurrent] = useState(2);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    <style>{`
    
    .gallery-wrapper {
  text-align: center;
  padding: 60px 0;
  background: #fff;
}

.gallery-heading {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 50px;
}

.gallery-heading .blue {
  color: #0b5ed7;
}

/* Carousel container */
.carousel {
  position: relative;
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Images */
.carousel-image {
  position: absolute;
   width: 100%;
  height: 100%;
  object-fit: contain; 
  border-radius: 20px;
  transition: all 0.6s ease;
  opacity: 0;
  transform: scale(0.8);
}

.carousel-image.active {
  opacity: 1;
  transform: scale(1);
  z-index: 3;
}

.carousel-image.left {
  transform: translateX(-45%) scale(0.85);
  opacity: 0.4;
  z-index: 2;
}

.carousel-image.right {
  transform: translateX(45%) scale(0.85);
  opacity: 0.4;
  z-index: 2;
}

.carousel-image.hidden {
  opacity: 0;
  z-index: 1;
}

/* Controls */
.carousel-controls {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.carousel-controls button {
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: #666;
}

.carousel-controls button:hover {
  color: #000;
}

/* Dots */
.dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.active-dot {
  background: #6f42c1;
}

    `}</style>



      {/* Navbar */}
      <Navbar />
      <CursorGrid />

      {/* Gallery Section */}
      <div className="gallery-wrapper">
        <h1 className="gallery-heading">
          <span className="blue">Moments</span> that made the journey{" "}
          <span className="blue">unforgettable</span>
        </h1>

        <div className="carousel">
          {images.map((img, index) => {
            let position = "hidden";

            if (index === current) position = "active";
            else if (
              index === current - 1 ||
              (current === 0 && index === images.length - 1)
            )
              position = "left";
            else if (
              index === current + 1 ||
              (current === images.length - 1 && index === 0)
            )
              position = "right";

            return (
              <img
                key={index}
                src={img}
                alt="Gallery"
                className={`carousel-image ${position}`}
              />
            );
          })}
        </div>

        <div className="carousel-controls">
          <button onClick={prevSlide}>&larr;</button>

          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={current === index ? "dot active-dot" : "dot"}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>

          <button onClick={nextSlide}>&rarr;</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Gallery;
