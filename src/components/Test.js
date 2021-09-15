import React, { useState, useEffect, useRef } from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UIOptions from "./Options/UIOptions";
import Form from "react-bootstrap/Form";

const Test = () => {
  const totalNum = 10;
  const numberOfQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [num, selectNum] = useState(0);
  const [pageNum, selectPageNum] = useState(numberOfQuestions[num]);
  const [ranNums, selectRanNums] = useState([1, 2, 3]);
  const [activeRadio, selectActiveRadio] = useState(null);
  const [answer, selectAnswer] = useState("");
  const [score, selectScore] = useState(0);
  const testQuestions = [
    {
      q: "You have a specific piece of information in mind that can be quickly l...",
      a: "Intensive Reading",
      b: "Scanning",
      c: "Skimming",
      ans: "b",
      num: 1,
      img: false,
    },
    {
      q: "A type of “fast reading” technique where the goal is to understand the...",
      a: "Intensive Reading",
      b: "Scanning",
      c: "Skimming",
      ans: "c",
      num: 2,
      img: false,
    },
    {
      q: "The following are examples of prosodic features EXCEPT:",
      a: "intonation",
      b: "stress",
      c: "pressure",
      d: "volume",
      ans: "d",
      num: 3,
      img: false,
    },
    {
      q: "How many student council members are there?",
      a: "12",
      b: "17",
      c: "19",
      d: "20",
      ans: "c",
      num: 4,
      img: true,
    },
    {
      q: "How many students chose Mathematics and Science as their favorite subject?",
      a: "5",
      b: "3",
      c: "2",
      d: "10",
      ans: "b",
      num: 5,
      img: true,
    },
    {
      q: "Who likes English and Mathematics, but not Science?",
      a: "Flor and Kory",
      b: "Jack",
      c: "Dante",
      d: "Alexander",
      ans: "d",
      num: 6,
      img: true,
    },
    {
      q: "Which of the following statements is TRUE?",
      a: "Cindy likes Science, English and Mathematics",
      b: "Saoirse only likes English",
      c: "Max, Mari and Alexander like Mathematics",
      d: "Both Jack and Amber like Science",
      ans: "c",
      num: 7,
      img: true,
    },
    {
      q: "Which of the following statements is FALSE?",
      a: "Shelly, Max and Cindy all like Science, English and Mathematics",
      b: "Jack and Astrid both like Science",
      c: "Kendra, Cherry and Flor all like English",
      d: "David and Mari only like Mathematics",
      ans: "a",
      num: 8,
      img: true,
    },

    {
      q: "Which prosodic feature pertains to the level of speed with which a spe...",
      a: "speech recovery",
      b: "rest",
      c: "rate of speech",
      d: "pitch",
      ans: "c",
      num: 9,
      img: false,
    },
    {
      q: "This prosodic feature refers to a speaker’s temporary halt in speech d...",
      a: "rest",
      b: "pause",
      c: "halt",
      d: "cease",
      ans: "b",
      num: 10,
      img: false,
    },
  ];

  const activeQuestion = ranNums[pageNum - 1] - 1;

  const choices = [
    { option: "a", term: `a. ${testQuestions[activeQuestion].a}` },
    { option: "b", term: `b. ${testQuestions[activeQuestion].b}` },
    { option: "c", term: `c. ${testQuestions[activeQuestion].c}` },
    { option: "d", term: `d. ${testQuestions[activeQuestion].d}` },
  ];

  //Question randomizer
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

    onButtonClick();
  }, []);

  //Removes radio after answer
  useEffect(() => {
    selectActiveRadio(null);
  }, [activeRadio]);

  //Button click
  const onButtonClick = () => {
    if (num < totalNum) {
      selectNum(num + 1);
      selectPageNum(numberOfQuestions[num]);
      selectActiveRadio(false);

      answer === testQuestions[activeQuestion].ans
        ? selectScore(score + 1)
        : selectScore(score + 0);

      console.log(activeRadio);
    } else {
      selectActiveRadio(false);

      answer === testQuestions[activeQuestion].ans
        ? selectScore(score + 1)
        : selectScore(score + 0);
    }
  };

  //Render pageions
  const renderedItems = numberOfQuestions.map((num, index) => {
    const active = index === pageNum - 1 ? "active" : "disabled";

    return (
      <>
        <li class="list-inline-item">
          <button class={`btn btn-outline-success btn-sm ${active} `}>
            {num}
          </button>
        </li>
      </>
    );
  });

  //When clicking answer choice
  const onRadioChange = (e) => {
    selectAnswer(e.target.value);
    console.log(answer);
    selectActiveRadio(null);
  };

  //Render radio choices
  const renderedChoices = choices.map((choice) => {
    if (choice.term === `d. undefined`) {
      return;
    }
    return (
      <div>
        <input
          checked={activeRadio}
          onChange={(e) => onRadioChange(e)}
          name="group1"
          type="radio"
          value={choice.option}
        />

        {choice.term}
      </div>
    );
  });

  //Main return
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
                <div className=" p-3 d-flex justify-content-center">
                  {testQuestions[activeQuestion].img === true ? (
                    <img src="/img/1stQuarter/4.png" />
                  ) : (
                    <></>
                  )}
                </div>
                <div class="card-body p-3 d-flex justify-content-center">
                  <div class="row d-flex justify-content-left">
                    <div>
                      <Form>{renderedChoices}</Form>
                    </div>
                    <ul class="pagination-success pagination-sm justify-content-center">
                      {renderedItems}
                      <li class="list-inline-item">
                        <button
                          onClick={(e) => onButtonClick()}
                          class="btn btn-outline-success btn-rounded btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#modal-default"
                        >
                          {num < totalNum ? "Next" : "Submit"}
                        </button>
                      </li>
                    </ul>
                    Score: {score}
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
