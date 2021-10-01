import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollBar from "react-perfect-scrollbar";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UIOptions from "./Options/UIOptions";
import OverView from "./OverView";
import Dashboard from "./Dashboard";
import About from "./About";
import Route from "./Route";
import SignIn from "./SignIn";
import Categories from "./Modules/Categories";
import Lessons from "./Modules/Lessons";
import Test from "./Test";
import Result from "./Result";
import Profile from "./Profile";

import "react-perfect-scrollbar/dist/css/styles.css";

const App = () => {
  const [lessonNum, selectLessonNum] = useState(0);
  const [lessonMax, selectLessonMax] = useState(0);
  const [header, selectHeader] = useState("");
  const [difficulty, selectDifficulty] = useState(10);
  const [quarter, selectQuarter] = useState(1);
  const [user, selectUser] = useState([]);
  const [questions, selectQuestions] = useState([]);
  const [testData, selectTestData] = useState([]);
  const [totalScore, selectTotalScore] = useState(0);

  useEffect(async () => {
    const getCurrentUser = async () => {
      const getUser = await axios.get(`/api/current_user`);
      selectUser(getUser.data);
    };
    getCurrentUser();
    console.log(user);
  }, []);

  return (
    <body class="g-sidenav-show  bg-gray-100">
      <ScrollBar component="body">
        <SideBar />
        <main class="main-content position-relative  h-100 mt-1 border-radius-lg ">
          <NavBar user={user} />
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/modules">
            <OverView />
          </Route>
          <Route path="/assessments">
            <OverView
              selectDifficulty={selectDifficulty}
              selectQuarter={selectQuarter}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignIn />
          </Route>
          <Route path="/categories">
            <Categories
              selectLessonNum={selectLessonNum}
              selectLessonMax={selectLessonMax}
              selectHeader={selectHeader}
            />
          </Route>
          <Route path="/lesson">
            <Lessons
              lessonNum={lessonNum}
              lessonMax={lessonMax}
              header={header}
            />
          </Route>

          <Route path="/test">
            <Test
              difficulty={difficulty}
              quarter={quarter}
              selectQuestions={selectQuestions}
              selectTestData={selectTestData}
              selectTotalScore={selectTotalScore}
            />
          </Route>

          <Route path="/result">
            <Result
              difficulty={difficulty}
              quarter={quarter}
              questions={questions}
              testData={testData}
              score={totalScore}
            />
          </Route>

          <Route path="/profile">
            <Profile user={user} />
          </Route>

          <Footer />
        </main>
        <UIOptions />
      </ScrollBar>
    </body>
  );
};

export default App;
