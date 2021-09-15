import React, { useState, useEffect, useRef } from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UIOptions from "./Options/UIOptions";
import Form from "react-bootstrap/Form";

const Test = () => {
  const numberOfQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [pageNum, selectPageNum] = useState(numberOfQuestions[0]);
  const [ranNums, selectRanNums] = useState([1, 2, 3]);
  const [activeRadio, selectActiveRadio] = useState(null);
  const testQuestions = [
    {
      q: "You have a specific piece of information in mind that can be quickly l...",
      a: "Intensive Reading",
      b: "Scanning",
      c: "Skimming",
      ans: "Scanning",
      num: 1,
    },
    {
      q: "A type of “fast reading” technique where the goal is to understand the...",
      a: "Intensive Reading",
      b: "Scanning",
      c: "Skimming",
      ans: "Skimming",
      num: 2,
    },
    {
      q: "The following are examples of prosodic features EXCEPT:",
      a: "intonation",
      b: "stress",
      c: "pressure",
      d: "volume",
      ans: "volume",
      num: 3,
    },
    {
      q: "How many student council members are there?",
      a: "12",
      b: "17",
      c: "19",
      d: "20",
      ans: "19",
      num: 4,
    },
    {
      q: "How many students chose Mathematics and Science as their favorite subject?",
      a: "5",
      b: "3",
      c: "2",
      d: "10",
      ans: "3",
      num: 5,
    },
    {
      q: "Who likes English and Mathematics, but not Science?",
      a: "Flor and Kory",
      b: "Jack",
      c: "Dante",
      d: "Alexander",
      ans: "Alexander",
      num: 6,
    },
    {
      q: "Which of the following statements is TRUE?",
      a: "Cindy likes Science, English and Mathematics",
      b: "Saoirse only likes English",
      c: "Max, Mari and Alexander like Mathematics",
      d: "Both Jack and Amber like Science",
      ans: "Max, Mari and Alexander like Mathematics",
      num: 7,
    },
    {
      q: "Which of the following statements is FALSE?",
      a: "Shelly, Max and Cindy all like Science, English and Mathematics",
      b: "Jack and Astrid both like Science",
      c: "Kendra, Cherry and Flor all like English",
      d: "David and Mari only like Mathematics",
      ans: "Shelly, Max and Cindy all like Science, English and Mathematics",
      num: 8,
    },

    {
      q: "Which prosodic feature pertains to the level of speed with which a spe...",
      a: "speech recovery",
      b: "rest",
      c: "rate of speech",
      d: "pitch",
      ans: "rate of speech",
      num: 9,
    },
    {
      q: "This prosodic feature refers to a speaker’s temporary halt in speech d...",
      a: "rest",
      b: "pause",
      c: "halt",
      d: "cease",
      ans: "pause",
      num: 10,
    },
  ];

  const activeQuestion = ranNums[pageNum - 1] - 1;

  const choices = [
    { term: `a. ${testQuestions[activeQuestion].a}`, radioId: 1 },
    { term: `b. ${testQuestions[activeQuestion].b}` },
    { term: `c. ${testQuestions[activeQuestion].c}` },
    { term: `d. ${testQuestions[activeQuestion].d}` },
  ];

  useEffect(() => {
    const shuffle = (array) => {
      var i = array.length,
        j = 0,
        temp;

      while (i--) {
        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    };

    var randNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    selectRanNums(randNums);
  }, []);

  useEffect(() => {
    selectActiveRadio(null);
  }, [activeRadio]);

  const onButtonClick = (num, e) => {
    selectPageNum(numberOfQuestions[num - 1]);
    selectActiveRadio(false);
  };

  const renderedItems = numberOfQuestions.map((num, index) => {
    const active = index === pageNum - 1 ? "active" : "";

    return (
      <>
        <li class="list-inline-item">
          <button
            onClick={(e) => onButtonClick(num, e)}
            class={`btn btn-outline-success btn-icon-only rounded-circle btn-sm ${active}`}
          >
            {num}
          </button>
        </li>
      </>
    );
  });

  const onRadioClick = (e) => {
    console.log(e.target.value);
    selectActiveRadio(null);
  };

  const renderedChoices = choices.map((choice) => {
    if (choice.term === `d. undefined`) {
      return;
    }
    return (
      <div>
        <input
          checked={activeRadio}
          onClick={(e) => onRadioClick(e)}
          name="group1"
          type="radio"
          value={choice.term}
        />

        {choice.term}
      </div>
    );
  });

  return (
    <body class="g-sidenav-show  bg-gray-100">
      <SideBar />
      <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <NavBar />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12 mt-4">
              <div class="card mb-4">
                <div class="card-header pb-0 p-3">
                  <p class="text-center">
                    Question <span>{pageNum}</span> of 10
                  </p>

                  <p class="text-start ">{testQuestions[activeQuestion].q}</p>
                </div>

                <div class="card-body p-3 d-flex justify-content-center">
                  <div class="row d-flex justify-content-left">
                    <div>
                      <Form>{renderedChoices}</Form>
                    </div>
                    <ul class="pagination-success pagination-sm justify-content-center">
                      {renderedItems}
                      <li class="list-inline-item">
                        <a
                          class="btn btn-outline-success btn-rounded btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-default"
                        >
                          Submit
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/**Pop-up here */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
      <UIOptions />
    </body>
  );
};

export default Test;
