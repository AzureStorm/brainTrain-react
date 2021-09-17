import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar";
import Footer from "../Footer";
import UIOptions from "../Options/UIOptions";

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
    <body class="g-sidenav-show  bg-gray-100">
      <SideBar />
      <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <NavBar />
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
          <Footer />
        </div>
      </main>
      <UIOptions />
    </body>
  );
};

export default Lessons;
