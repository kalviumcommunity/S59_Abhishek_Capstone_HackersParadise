import React from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import slideshow1 from "../../public/slideshow-1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={slideshow1}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[500px] text-[#b25ffb] font-bold leading-snug">
                LEARN FROM OUR CURATED MODULES!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={slideshow1}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[500px] text-[#b25ffb] font-bold leading-snug">
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
              <h2 className="text-7xl text-[4vw] w-[500px] text-[#b25ffb] font-bold leading-snug">
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
              <h2 className="text-7xl text-[4vw] w-[500px] text-[#b25ffb] font-bold leading-snug">
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
              <h2 className="text-7xl text-[4vw] w-[500px] text-[#b25ffb] font-bold leading-snug">
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
              <h2 className="text-7xl text-[4vw] w-[500px] text-[#b25ffb] font-bold leading-snug">
                LEARN FROM OUR CURATED MODULES!
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
