import React from "react";
import azin from "../sources/images/Slide50.JPG";
import iman from "../sources/images/Slide49.JPG";
import azinResume from "../sources/images/Slide51.JPG";
import imanResume from "../sources/images/Slide52.JPG";

const images = [
  [iman, imanResume],
  [azin, azinResume],
];
const Introduce = () => {
  return (
    <div
      className="w-full h-screen p-5 sticky z-30 top-0 
        flex flex-col items-center justify-center
        bg-gradient-to-t to-primary-focus from-neutral"
    >
      <h3 className="place-self-start m-5 text-2xl font-bold">مدرسین مؤسسه:</h3>
      <div className="flex flex-col sm:flex-row justify-around">
        {images.map((each) => {
          return (
            <div
              className="carousel carousel-center snap-none snap-center rounded-box max-w-xs m-1 p-4 space-x-4 bg-neutral hover:bg-neutral-focus"
              key={each}
            >
              {each.map((item) => (
                <img
                  key={item}
                  className="carousel-item rounded-box ml-2"
                  src={item}
                  alt={item}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Introduce;
