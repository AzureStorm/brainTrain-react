import React from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";

import Footer from "./Footer";
import UIOptions from "./Options/UIOptions";

const Categories = () => {
  return (
    <body class="g-sidenav-show  bg-gray-100">
      <SideBar />
      <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <NavBar />
        <div class="container-fluid py-4">
          <div class="container-fluid py-4">
            <ul class="nav nav-pills nav-fill p-1" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1 active"
                  data-bs-toggle="pill"
                  href="#reading"
                  role="button"
                  aria-selected="true"
                  aria-controls="reading"
                >
                  Reading
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="pill"
                  href="#listening"
                  role="button"
                  aria-expanded="false"
                  aria-controls="listening"
                >
                  Listening
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="pill"
                  href="#viewing"
                  role="button"
                  aria-expanded="false"
                  aria-controls="viewing"
                >
                  Viewing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="pill"
                  href="#vocabulary"
                  role="button"
                  aria-expanded="false"
                  aria-controls="vocabulary"
                >
                  Vocabulary
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="pill"
                  href="#literature"
                  role="button"
                  aria-expanded="false"
                  aria-controls="literature"
                >
                  Literature
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="pill"
                  href="#writing"
                  role="button"
                  aria-expanded="false"
                  aria-controls="writing"
                >
                  Writing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="pill"
                  href="#oral"
                  role="button"
                  aria-expanded="false"
                  aria-controls="oral"
                >
                  Oral Language
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="pill"
                  href="#grammar"
                  role="button"
                  aria-expanded="false"
                  aria-controls="grammar"
                >
                  Grammar
                </a>
              </li>
            </ul>
          </div>
          <Footer />
        </div>
      </main>
      <UIOptions />
    </body>
  );
};

export default Categories;
