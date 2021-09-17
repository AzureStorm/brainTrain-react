import React from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UIOptions from "./Options/UIOptions";
import AboutCard from "./Card/AboutCard";

const About = () => {
  const bio = [
    {
      workTitle: "Project Manager",
      name: "Nicole",
      userInfo: "Some text...",
    },
    {
      workTitle: "Developer",
      name: "Karl",
      userInfo: "Some text...",
    },
    {
      workTitle: "Developer",
      name: "Lor-raine",
      userInfo: "Some text...",
    },
    {
      workTitle: "Developer",
      name: "Jermaine",
      userInfo: "Some text...",
    },
  ];

  return (
    <body class="g-sidenav-show  bg-gray-100">
      <SideBar />
      <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <NavBar />
        <div class="container-fluid py-4">
          <div className="row">
            <div class="card-body p-3">
              <div class="row">
                <div class="card-header pb-0 p-3">
                  <h6 class="mb-1">Meet the Team!</h6>
                  <p class="text-sm"></p>
                </div>
                <AboutCard devInfo={bio} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
      <UIOptions />
    </body>
  );
};

export default About;
