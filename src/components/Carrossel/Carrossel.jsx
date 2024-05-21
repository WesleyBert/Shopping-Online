import React, { useState, useEffect } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

import "./Carrossel.css";

const Carousel = () => {
  const images = [
    { src: img1, caption: 'Caption for Image 1' },
    { src: img2, caption: 'Caption for Image 2' },
    { src: img3, caption: 'Caption for Image 3' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const showItem = (index) => {
    setActiveIndex((index + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showItem(activeIndex + 1);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeIndex]);

  return (
    <main className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="item">
            <img src={image.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="btn prev" onClick={() => showItem(activeIndex - 1)}>
        &lt;
      </button>
      <button className="btn next" onClick={() => showItem(activeIndex + 1)}>
        &gt;
      </button>
    </main>
  );
};

export default Carousel;
