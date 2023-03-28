import { useState } from "react";
import "./FirstPage.css";
import TaskOneFirstPage from "./TaskOne/TaskOne";
import TaskThreeFirstPage from "./TaskThree/TaskThree";
import TaskTwoFirstPage from "./TaskTwo/TaskTwo";

const FirstPage = () => {
  return (
    <div className="page">
      <h1>Before Watching</h1>
      <TaskOneFirstPage />
      <TaskTwoFirstPage />
      <TaskThreeFirstPage />
    </div>
  );
};

export default FirstPage;
