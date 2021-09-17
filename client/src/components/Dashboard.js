import React from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import Card from "./Card/Card";
import Footer from "./Footer";
import UIOptions from "./Options/UIOptions";

const Dashboard = () => {
  let text = [
    "Challenge yourself - Take practice assessments per Quarter",
    <br />,
    <br />,
    <br />,
    "There is no time limit - Read the questions carefully before you answer.",
    <br />,
    <br />,
    <br />,
    "Take it anytime you want - Multiple attempts are allowed until you are satisfied with your score.",
  ];
  return (
    <body class="g-sidenav-show  bg-gray-100">
      <SideBar />
      <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <NavBar />
        <div class="container-fluid py-4">
          <Card
            title="Have access to interactive learning modules."
            detail="Study and review lessons from First to Fourth Quarter
                          with categories Reading Comprehension, Grammar
                          Awareness, and many more."
            routeText="Browse Modules"
            pic="books2"
            route="modules"
          />
          <Card
            title="Test your knowledge by taking practice assessments."
            detail={text}
            routeText="Take Practice Assessment"
            pic="Typing-cuate"
            route="assessments"
          />
          <Footer />
        </div>
      </main>
      <UIOptions />
    </body>
  );
};

export default Dashboard;
