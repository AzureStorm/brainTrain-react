import React from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar";
import Link from "../Link";
import Footer from "../Footer";
import UIOptions from "../Options/UIOptions";

const Categories = ({ selectLessonNum, selectLessonMax }) => {
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

  const topicHeads = [
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

  const lessonClicked = (num, max) => {
    selectLessonNum(num);
    selectLessonMax(max);
    console.log("Hello");
  };

  const renderedItems = topics.map((topic) => {
    return (
      <li class="nav-item">
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
      </li>
    );
  });

  const renderedTopics = topicHeads.map((item) => {
    const path = item.desc === "" ? "./drill" : "./lesson";
    return (
      <tr>
        <td>
          <div class="d-flex px-2 py-1">
            <p class="text-xs font-weight-bold mb-0">
              &nbsp;&nbsp;&nbsp;{item.num}
            </p>
          </div>
        </td>
        <td>
          <p class="text-xs font-weight-bold mb-0">{item.head}</p>
          <p class="text-xs text-secondary mb-0">{item.sub}</p>
        </td>
        <td>
          <div class="align-middle text-center">
            <p class="text-xs text-secondary mb-0">{item.desc}</p>
          </div>
        </td>
        <td class="align-middle">
          <button
            onClick={(e) => {
              lessonClicked(item.num, item.max);
            }}
            class="btn btn-link text-secondary mb-0"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Link href={path}>
              <i class="fa fa-eye text-xs" aria-hidden="true"></i>
            </Link>
          </button>
        </td>
        <td class="align-middle">
          <button
            onClick={(e) => {
              console.log("hey");
            }}
            class="btn btn-link text-secondary mb-0"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-share text-xs" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
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
                    <tbody>{renderedTopics}</tbody>
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
