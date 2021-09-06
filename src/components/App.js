import React from "react";
import OverView from "./OverView";
import Dashboard from "./Dashboard";
import About from "./About";
import Route from "./Route";
import SignIn from "./SignIn";

const App = () => {
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
    </body>
  );
};

export default App;
