import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const Lessons = ({ lessonNum, lessonMax, header }) => {
  const [index, setIndex] = useState(0);
  const [slideNum, selectSlideNum] = useState([]);
  const slides = [];

  useEffect(() => {
    var i = 1;
    console.log("Out loop");

    while (i <= lessonMax) {
      slides.push(i);
      console.log("length");
      console.log(slides.length);
      i++;
      console.log("In loop");
      console.log(i);
    }
    selectSlideNum(slides);
  }, []);

  const renderedSlides = slideNum.map((slide) => {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`/img/1stQuarter/${header}/Lesson${lessonNum}/Slide${slide}.png`}
          alt="First slide"
        />
      </Carousel.Item>
    );
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div class="container-fluid py-4">
      <Carousel
        variant="dark"
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        wrap={false}
      >
        {renderedSlides}
      </Carousel>
      slides: {slideNum}
      header: {header}
    </div>
  );
};

export default Lessons;
