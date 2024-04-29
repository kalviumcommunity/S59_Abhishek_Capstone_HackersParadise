import React from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import slideshow1 from "../../public/slideshow-1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container w-[90%] m-auto">
      <Slider {...settings}>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[5vh] mb-[2vh]">
            <img
              src={slideshow1}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-4">
              <h2 className="text-7xl text-[4vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                LEARN FROM OUR CURATED MODULES!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[5vh] mb-[5vh]">
            <img
              src={slideshow1}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                LEARN FROM OUR CURATED MODULES!
              </h2>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={slideshow1}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                LEARN FROM OUR CURATED MODULES!
              </h2>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={slideshow1}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                LEARN FROM OUR CURATED MODULES!
              </h2>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={slideshow1}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                LEARN FROM OUR CURATED MODULES!
              </h2>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={slideshow1}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                LEARN FROM OUR CURATED MODULES!
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderHome;
