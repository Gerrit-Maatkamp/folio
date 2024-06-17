import React, { useEffect, useRef, useState } from "react";
import "./image-stepper.scss";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface ImageStepperProps {
  images: string[];
}

const getBase = () => {
  if (typeof process !== "undefined" && process.env && process.env.PUBLIC_URL) {
    return process.env.PUBLIC_URL;
  } else {
    return "/src";
  }
};

const ImageStepper: React.FC<ImageStepperProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controlsRef = useRef<HTMLDivElement>(null);
  const baseUrl = getBase();
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controlsRef.current?.classList.add("highlight");
            setTimeout(() => {
              controlsRef.current?.classList.remove("highlight");
            }, 1200);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (controlsRef.current) {
      observer.observe(controlsRef.current);
    }

    return () => {
      if (controlsRef.current) {
        observer.unobserve(controlsRef.current);
      }
    };
  }, []);

  console.log("image");
  console.log(baseUrl + images[currentIndex]);
  return (
    <div className="image-stepper">
      <img
        src={baseUrl + images[currentIndex]}
        alt={`Step ${currentIndex + 1}`}
      />
      <div ref={controlsRef} className="image-stepper-controls">
        {images.length > 1 && (
          <button
            className="image-stepper-controls-button"
            onClick={handlePrev}
          >
            <ChevronLeft />
          </button>
        )}
        {images.length > 1 && (
          <button
            className="image-stepper-controls-button"
            onClick={handleNext}
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageStepper;
