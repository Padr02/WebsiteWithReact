import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({ wheel }) => {
  //props från fadern innehållande wheelData
  const [current, setCurrent] = useState(0);
  const length = wheel.length;

  //reseta när du är på sista bilden
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  //samma som ovan fast för andra pilen då vi går baklänges
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      {/* pilar från react icons som använder ovan funktioner */}
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
      {/* itererar över bildhjulets data med hjälp av index alla objekt och renderar i nedan return  */}
      {wheel.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
            heading={wheel.heading}
            description={wheel.description}
          >
            {/* rendera rätt data med hjälp av index/key */}
            {index === current && (
              <div className="about-container">
                <h2 className="about-heading">{slide.heading}</h2>
                <img src={slide.image} alt="travel image" className="image" />
                <p className="about-description">{slide.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
