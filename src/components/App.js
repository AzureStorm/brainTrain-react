import React, { useState } from "react";
import OverView from "./OverView";
import Dashboard from "./Dashboard";
import About from "./About";
import Route from "./Route";
import SignIn from "./SignIn";
import Categories from "./Modules/Categories";
import Lessons from "./Modules/Lessons";
import Test from "./Test";

const App = () => {
  const [lessonNum, selectLessonNum] = useState(0);
  const [lessonMax, selectLessonMax] = useState(0);

  return (
    <body className="app bg-gray-100">
      {/* */}{" "}
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/modules">
        <OverView />
      </Route>
      <Route path="/assessments">
        <OverView />
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
        />
      </Route>
      <Route path="/lesson">
        <Lessons lessonNum={lessonNum} lessonMax={lessonMax} />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
    </body>
  );
};

export default App;
