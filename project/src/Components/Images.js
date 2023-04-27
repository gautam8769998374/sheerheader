import React, { useState, useEffect } from "react";
import sheerImage from "./Images/sheer image.jpg";
import sheerImage1 from "./Images/sheer image1.jpg";
import sheerImage2 from "./Images/sheer image2.jpg";
import sheerImage3 from "./Images/sheer image3.jpg";
import sheerImage4 from "./Images/sheer image4.jpg";
import sheerImage5 from "./Images/sheer image5.jpg";
import sheerImage6 from "./Images/sheer image6.jpg";

function Images() {
  const images = [
    sheerImage,
    sheerImage1,
    sheerImage2,
    sheerImage3,
    sheerImage4,
    sheerImage5,
    sheerImage6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Sheer Image ${index}`}
          style={{ height: "250px", width: "755px", display: index === currentIndex ? "block" : "none" }}
        />
      ))}
    </div>
  );
}

export default Images;