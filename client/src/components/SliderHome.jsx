import React from "react";
import Slider from "react-slick";
import slideshow1 from "/slideshow-1.png";
import Bugs from '/Bugs.jpeg';
import hackitivity from '/hackitivity.jpeg';
import Learn from '/Learn.jpeg';
import testing from '/testing.jpeg';
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
            <div className="h-[45vh] m-4">
              <h2 className="text-7xl text-[4vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                Learn from our Curated Modules!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[5vh] mb-[5vh]">
            <img
              src={Bugs}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[35vw] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                Practice Your skills by Doing Bug Bounties!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={Learn}
              alt=" Nmap image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[35vw] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                Master Network tracking with NMAP Tool!!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={hackitivity}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[3vw] w-[35vw] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
              Explore global ethical hackers uncovering vulnerabilities everywhere!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={Bugs}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[4vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
                Become a Professional Ethical Hacker
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center mt-[8vh] mb-[10vh]">
            <img
              src={testing}
              alt="image"
              className="h-[50vh] rounded-xl"
            ></img>
            <div className="h-[40vh] m-8">
              <h2 className="text-7xl text-[3vw] w-[500px] text-transparent bg-clip-text bg-gradient-to-r from-[#d48ff9] via-[#b25ffb] to-[#6300ff] font-bold leading-snug">
               Coming Future of Penetration Testing. 
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderHome;
