import React from "react";
import Link from "./Link";

const Result = ({ difficulty, questions, testData, score }) => {
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
          <div class="card h-100 p-3">
            <div
              class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
              style={{ backgroundImage: `url('/img/2qbg.png')` }}
            >
              <span class="mask bg-gradient-dark"></span>
              <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 class="text-white font-weight-bolder mb-4 pt-2">
                  {`Question ${index + 1}`}
                </h5>
                <p class="text-white">{testData[item - 1].q}</p>
                <p class="text-white">Correct Answer:</p>
                <p class="text-white">{`${
                  testData[item - 1].ans
                }. ${answer}`}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <div class="row">
        <div class="col-lg-6 mt-4">
          <div class="card h-100 p-3">
            <div
              class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
              style={{ backgroundImage: `url('/img/2qbg.png')` }}
            >
              <span class="mask bg-gradient-dark"></span>
              <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <div class="row">
                  <div class="col-xl-6 col-md-6 mb-xl-0 mb-4">
                    <div class="card card-blog card-plain">
                      <div class="card-body px-1 pb-0">
                        <h4 class="text-white font-weight-bolder mb-4">
                          Assessment Result:
                        </h4>
                        <h5 class="text-white font-weight-bolder">
                          insertScoreRemark()
                        </h5>
                        <p class="text-white">
                          <span>{score}</span> out of <span>{difficulty}</span>{" "}
                          points
                        </p>
                        <a
                          class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                          href="assessment.html"
                        >
                          Go back to practice assessments
                          <i
                            class="fas fa-arrow-right text-sm ms-1"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-6 mb-xl-0 mb-4">
                    <div class="card card-blog card-plain">
                      <div class="card-body px-1 pb-0 text-white">
                        <h4 class="text-white font-weight-bolder mb-4">
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
          <div class="card h-100 p-3">
            <div
              class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
              style={{ backgroundImage: `url('/img/2qbg.png')` }}
            >
              <span class="mask bg-gradient-dark"></span>
              <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h4 class="text-white font-weight-bolder mb-4 pt-4">
                  Acquired medals in this assessment:
                </h4>
                <ul class="list-inline-group">
                  <li class="list-inline-item text-white">giveMedal()</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {renderAnswers}
        <div class="col-lg-12 mt-4">
          <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
            <ul class="list-inline">
              <li class="list-inline-item">
                {" "}
                <Link class="text-white" href="/assessments">
                  <button
                    id="goToAssessmentBtn float-start"
                    class="btn bg-gradient-secondary mb-0 px-2"
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
                    class="btn bg-gradient-primary mb-0 px-2"
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
