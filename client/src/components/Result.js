import axios from "axios";
import React, { useEffect } from "react";
import Link from "./Link";

const Result = ({
  user,
  difficulty,
  quarter,
  questions,
  testData,
  score,
  time,
  minute,
}) => {
  useEffect(() => {
    var totalAttempts = 0;

    switch (quarter) {
      case 1:
        totalAttempts = user.firstAttempts;
        break;

      case 2:
        totalAttempts = user.secondAttempts;
        break;
      case 3:
        totalAttempts = user.thirdAttempts;
        break;

      case 4:
        totalAttempts = user.fourthAttempts;
        break;
    }

    axios
      .post("api/score", {
        email: user.email,
        quarter: quarter,
        score: score,
        attempts: totalAttempts,
        difficulty: difficulty,
      })
      .then((res) => {});
  }, []);

  var medals = [];

  if (minute < 20) {
    medals.push(20);
  }
  if (minute < 15) {
    medals.push(15);
  }
  if (minute < 10) {
    medals.push(10);
  }

  axios
    .post("api/medals", {
      email: user.email,
      medals: medals,
    })
    .then((res) => {});

  const renderAnswers = questions.map((item, index) => {
    var answer =
      testData[item - 1].ans === "a"
        ? testData[item - 1].a
        : testData[item - 1].ans === "b"
        ? testData[item - 1].b
        : testData[item - 1].ans === "c"
        ? testData[item - 1].c
        : testData[item - 1].d;

    if (index < difficulty) {
      return (
        <div class="col-lg-12 mt-4">
          <div class=" card h-100 p-3 " style={{ backgroundColor: "#CB0C9F" }}>
            <div class="overflow-hidden position-relative border-radius-lg bg-cover h-100 bg-white">
              <span class="mask bg-gradient-dark"></span>
              <div
                class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
                style={{ backgroundColor: "white" }}
              >
                <h5 class="  font-weight-bolder mb-4 pt-2">
                  {`Question ${index + 1}`}
                </h5>
                <p class=" ">{testData[item - 1].q}</p>
                <p class=" ">Correct Answer:</p>
                <p class=" ">{`${testData[item - 1].ans}. ${answer}`}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  const renderedMedals = medals.map((item) => {
    return (
      <>
        <li class="list-inline-item">
          <img src={`img/${item}.png`} />
        </li>
        <br />
      </>
    );
  });

  return (
    <>
      <div class="row">
        <div class="col-lg-6 mt-4">
          <div class=" card h-100 p-3 " style={{ backgroundColor: "#CB0C9F" }}>
            <div class="overflow-hidden position-relative border-radius-lg bg-cover h-100 bg-white">
              <span class="mask bg-gradient-dark"></span>
              <div
                class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
                style={{ backgroundColor: "white" }}
              >
                <div class="row">
                  <div class="col-xl-6 col-md-6 mb-xl-0 mb-4">
                    <div>
                      <div class="card-body px-1 pb-0">
                        <h4 class=" font-weight-bolder mb-4">
                          Assessment Result:
                        </h4>
                        <h5 class="  font-weight-bolder">Time taken: {time}</h5>
                        <h5 class="  font-weight-bolder">
                          insertScoreRemark()
                        </h5>
                        <p class=" ">
                          <span>{score}</span> out of <span>{difficulty}</span>{" "}
                          points
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-6 mb-xl-0 mb-4">
                    <div>
                      <div class="card-body px-1 pb-0">
                        <h4 class=" font-weight-bolder mb-4">
                          {" "}
                          {`${(score / difficulty) * 100}%`}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-4">
          <div class=" card h-100 p-3" style={{ backgroundColor: "#CB0C9F" }}>
            <div class="overflow-hidden position-relative border-radius-lg bg-cover h-100 bg-white">
              <span class="mask bg-gradient-dark"></span>
              <div
                class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
                style={{ backgroundColor: "white" }}
              >
                <h4 class="  font-weight-bolder mb-4 pt-4">
                  Acquired medals in this assessment:
                </h4>

                <ul class="list-inline-group">{renderedMedals}</ul>
              </div>
            </div>
          </div>
        </div>
        {renderAnswers}
        <div class="col-lg-12 mt-4">
          <div
            class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3"
            style={{ backgroundColor: "white" }}
          >
            <ul class="list-inline">
              <li class="list-inline-item">
                {" "}
                <Link class=" " href="/assessments">
                  <button
                    id="goToAssessmentBtn float-start"
                    class="btn bg-gradient-secondary mb-0 px-2 text-white"
                    type="button"
                  >
                    <i
                      class="fas fa-arrow-left text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                    Practice assessments{" "}
                  </button>
                </Link>
              </li>
              <li class="list-inline-item float-end">
                <Link href="/test">
                  <button
                    id="retakeBtn"
                    class="btn bg-gradient-primary mb-0 px-2 text-white"
                    type="button"
                  >
                    Retake assessment
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
