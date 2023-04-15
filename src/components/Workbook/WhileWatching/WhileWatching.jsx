import FourPage from "./FourPage/FourPage";
import FivePage from "./FivePage/FivePage";
import SixPage from "./SixPage/SixPage";
import SevenPage from "./SevenPage/SevenPage";

const WhileWatching = (props) => {
  ///////FourPage////////
  const task7Ans = [
    "aproaches",
    "requested",
    "will rise",
    "made",
    "will answer",
    "don't look",
  ];
  let task7Result = new Set();
  const valueHandler = (taskAns, taskResult, getValue) => {
    for (let i = 0; i <= taskAns.length; i++) {
      if (
        taskAns[i] === getValue[`value${i}`] &&
        getValue[`value${i}`] !== undefined
      ) {
        taskResult.add(taskAns[i]);
        console.log(taskResult);
      } else {
        taskResult.delete(taskAns[i]);
      }
    }
  };
  const valueEventHandlerTask7 = (getValue) => {
    valueHandler(task7Ans, task7Result, getValue);
  };

  /////////FivePage/////////////
  const valueHandlerAfter = (inputValues, result) => {
    for (let i = 0; i < inputValues.length; i++) {
      if (inputValues[i].value === inputValues[i].answer) {
        result.add(inputValues[i].id);
      } else {
        result.delete(inputValues[i].id);
      }
    }
    return result;
  };

  //////SevenPage//////
  const task11Data = [
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
  let task11Result = new Set();
  const valueEventHandlerTask11 = (
    getValueTaskOne,
    getValueTaskTwo,
    getValueTaskThree,
    getValueTaskFour
  ) => {
    if (getValueTaskOne !== false && getValueTaskOne !== "false") {
      task11Result.add(getValueTaskOne);
    } else {
      task11Result.delete(getValueTaskOne);
    }
    if (getValueTaskTwo !== false && getValueTaskTwo !== "false") {
      task11Result.add(getValueTaskTwo);
    } else {
      task11Result.delete(getValueTaskTwo);
    }
    if (getValueTaskThree !== false && getValueTaskThree !== "false") {
      task11Result.add(getValueTaskThree);
    } else {
      task11Result.delete(getValueTaskThree);
    }
    if (getValueTaskFour !== false && getValueTaskFour !== "false") {
      task11Result.add(getValueTaskFour);
    } else {
      task11Result.delete(getValueTaskFour);
    }
  };
  return (
    <>
      <FourPage
        valueHandler={valueHandler}
        valueEventHandlerTask7={valueEventHandlerTask7}
        task7Ans={task7Ans}
        task7Result={task7Result}
      />
      <FivePage state={props.state} valueHandlerAfter={valueHandlerAfter} />
      <SixPage state={props.state} valueHandlerAfter={valueHandlerAfter} />
      <SevenPage
        valueEventHandlerTask11={valueEventHandlerTask11}
        task11Data={task11Data}
        task11Result={task11Result}
      />
    </>
  );
};

export default WhileWatching;
