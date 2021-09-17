import React from "react";
import Card from "./Card/Card";

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
    </div>
  );
};

export default Dashboard;
