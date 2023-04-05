import "./SevenPage.css";
import { useState } from "react";
import TaskElevenSevenPage from "./TaskEleven/TaskEleven";

const SevenPage = () => {
  const testData = [
    {
      question: "Did Zazu have a morning report?",
      answers: [
        {
          answer: "He didn't see anyone, he didn't have to tell.",
          value: false,
          id: 0,
        },
        { answer: "He had a morning report.", value: "true-first", id: 1 },
      ],
    },
    {
      question: "Who owns these words 'it`s the news'?",
      answers: [
        {
          answer: "Zazu",
          value: "true-second",
          id: 2,
        },
        { answer: "Simba", value: false, id: 3 },
        { answer: "Mufasu", value: false, id: 4 },
      ],
    },
    {
      question:
        "For whom Mufasa said these words 'Wait for the perfect moment to pounce'?",
      answers: [
        {
          answer: "Zazy",
          value: false,
          id: 5,
        },
        { answer: "Simba", value: "true-third", id: 6 },
      ],
    },
    {
      question: "Why did Mufasa not take Simba with him?",
      answers: [
        {
          answer: "Simba had a headache and he couldn't.",
          value: false,
          id: 7,
        },
        {
          answer: "Because Simba is still a child.",
          value: "true-four",
          id: 8,
        },
        { answer: "Because Simba broke his leg.", value: false, id: 9 },
      ],
    },
  ];

  let result = new Set();

  const check = (
    getValueTaskOne,
    getValueTaskTwo,
    getValueTaskThree,
    getValueTaskFour
  ) => {
    if (getValueTaskOne !== false && getValueTaskOne !== "false") {
      result.add(getValueTaskOne);
    }
    if (getValueTaskTwo !== false && getValueTaskTwo !== "false") {
      result.add(getValueTaskTwo);
    }
    if (getValueTaskThree !== false && getValueTaskThree !== "false") {
      result.add(getValueTaskThree);
    }
    if (getValueTaskFour !== false && getValueTaskFour !== "false") {
      result.add(getValueTaskFour);
    }
  };

  const [changeTextTask12, setChangeTextTask12] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask12(
      result.size < 4
        ? `Correct ${result.size}/${testData.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__seven">
      <h1>While Watching</h1>
      <TaskElevenSevenPage check={check} result={result} testData={testData} />
      <h4>{changeTextTask12}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default SevenPage;
