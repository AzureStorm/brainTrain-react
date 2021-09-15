import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar";
import Link from "../Link";
import Footer from "../Footer";
import UIOptions from "../Options/UIOptions";
import RC1 from "../Tables/RC1";

const Categories = ({ selectLessonNum, selectLessonMax, selectHeader }) => {
  const topics = [
    "Reading",
    "Listening",
    "Viewing",
    "Vocabulary",
    "Literature",
    "Writing",
    "Oral Language",
    "Grammar",
  ];

  const topicHeadsRC = [
    {
      num: 1,
      head: "Reading Styles",
      sub: "Scanning",
      desc: "Definition of scanning, when to use scanning, and how to scan.",
      max: 4,
    },
    {
      num: 2,
      head: "Reading Styles",
      sub: "Skimming",
      desc: "Definition of skimming, when to use skimming, and how to skim.",
      max: 4,
    },
    {
      num: 3,
      head: "Reading Styles",
      sub: "In-Depth Reading",
      desc: "Definition of in-depth reading, when to use in-depth reading, and how to read intensively.",
      max: 4,
    },

    {
      num: 4,
      head: "Reading Styles",
      sub: "In-Depth Reading",
      desc: "In-depth reading strategy.",
      max: 4,
    },
    {
      num: null,
      head: "Reading Styles",
      sub: "Drill for Reading Style",
      desc: "",
    },
    {
      num: 5,
      head: "Non-Linear Visuals",
      sub: "",
      desc: "Definition of non-linear visuals.",
      max: 3,
    },
    {
      num: 6,
      head: "Non-Linear Visuals",
      sub: "Transcoding Diagrams",
      desc: "Interpret information presented in bar graph, line graph, and pie chart.",
      max: 4,
    },
    {
      num: null,
      head: "Non-Linear Visuals",
      sub: "Drill for Interpreting Non-Linear Visuals",
      desc: "",
    },
    {
      num: 7,
      head: "Road Signs",
      sub: "Interpreting Signs and Symbols",
      desc: "Definition of common road and prohibited signs.",
      max: 7,
    },
    {
      num: 8,
      head: "Road Signs",
      sub: "Interpreting Signs and Symbols",
      desc: "More examples of road signs and symbols.",
      max: 4,
    },
    {
      num: null,
      head: "Road Signs",
      sub: "Drill for Interpreting Signs and Symbols",
      desc: "",
    },
    {
      num: 9,
      head: "Map Reading",
      sub: "Telling Directions",
      desc: "The basics of map reading.",
      max: 4,
    },
  ];

  const topicHeadsVC = [
    {
      num: 1,
      head: "Structural Analysis",
      sub: "",
      desc: "An introduction to structural analysis.",
      max: 2,
    },
    {
      num: 2,
      head: "Structural Analysis ",
      sub: "Prefix, Root, Suffix",
      desc: "Part-by-part analysis of a word.",
      max: 3,
    },
    {
      num: 3,
      head: "Road Signs",
      sub: "Interpreting Signs and Symbols",
      desc: "Definition of common road and prohibited signs.",
      max: 3,
    },

    {
      num: 4,
      head: "Genre Identification",
      sub: null,
      desc: "Different genres of viewing materials.",
      max: 5,
    },
    {
      num: 5,
      head: "Genre Identification",
      sub: "",
      desc: "Different genres of viewing materials.",
      max: 4,
    },
    {
      num: 6,
      head: "Organizing Information",
      sub: null,
      desc: "An introduction to organizing information and mind mapping.",
      max: 2,
    },

    {
      num: 7,
      head: "Organizing Information",
      sub: "Mind Mapping",
      desc: "Definition of mind mapping.",
      max: 2,
    },
    {
      num: 8,
      head: "Truthfulness and Accuracy",
      sub: "Printed Material",
      desc: "Methods for determining the accuracy and truthfulness of a printed material.",
      max: 3,
    },
    {
      num: 9,
      head: "Truthfulness and Accuracy",
      sub: "Website",
      desc: "Methods for determining the accuracy and truthfulness of a website.",
      max: 2,
    },
  ];

  const [activeTopic, selectActiveTopic] = useState([]);

  useEffect(() => {
    selectActiveTopic(topicHeadsRC);
    selectHeader("RC");
  }, []);

  const onTopicClicked = (index) => {
    switch (index) {
      case 0:
        selectActiveTopic(topicHeadsRC);
        selectHeader("RC");
        break;
      case 2:
        selectActiveTopic(topicHeadsVC);
        selectHeader("VC");
        break;
      default:
        console.log("In progress");
        break;
    }
    console.log(index);
  };

  const renderedItems = topics.map((topic, index) => {
    return (
      <li class="nav-item">
        <button
          className="btn"
          onClick={() => {
            onTopicClicked(index);
          }}
        >
          <Link
            class="nav-link mb-0 px-0 py-1"
            data-bs-toggle="pill"
            href={`#${topic}`}
            role="button"
            aria-expanded="false"
            aria-controls="listening"
          >
            {topic}
          </Link>
        </button>
      </li>
    );
  });

  return (
    <body class="g-sidenav-show  bg-gray-100">
      <SideBar />
      <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <NavBar />
        <div class="container-fluid py-4">
          <div class="container-fluid py-4">
            <ul class="nav nav-pills nav-fill p-1" role="tablist">
              {renderedItems}
            </ul>
          </div>
          <div class="container-fluid py-4 tab-content">
            <div id="reading" class="tab-pane fade in show active">
              <div class="card">
                <div class="table-responsive">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          No.
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Topic
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Description
                        </th>
                        <th class="text-secondary opacity-7"></th>
                        <th class="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    {console.log(activeTopic)}
                    <tbody>
                      <RC1
                        topicHeads={activeTopic}
                        selectLessonNum={selectLessonNum}
                        selectLessonMax={selectLessonMax}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
      <UIOptions />

      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="../assets/js/soft-ui-dashboard.min.js?v=1.0.3"></script>
    </body>
  );
};

export default Categories;
