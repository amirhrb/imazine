import React from "react";

const Carousel = ({ images }) => {
  return (
    <div
      className="
        carousel 
        carousel-center 
        snap-none snap-center 
        rounded-box max-w-[440px] m-1 p-1 space-x-4 bg-neutral hover:bg-neutral-focus 
        aspect-video"
      dir="rtl"
    >
      {images.map((item) => {
        return (
          <img
            key={item}
            className="carousel-item rounded-box ml-2"
            src={item}
            alt={item}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
