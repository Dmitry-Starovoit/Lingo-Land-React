import TenPage from "./TenPage/TenPage";
import ElevenPage from "./ElevenPage/ElevenPage";
import "./AfterWatching.css";
import TwelvePage from "./TwelvePage/TwelvePage";
import ThirteenPage from "./TherteenPage.jsx/ThirteenPage";
import FourteenPage from "./ForteenPage/FourteenPage";
import FifteenPage from "./FifteenPage/FifteenPage";
import img1 from "../../../../assets/after_watching/img-2-1.jpg";
import img2 from "../../../../assets/after_watching/img-2-2.jpg";
import img3 from "../../../../assets/after_watching/img-2-3.jpg";
import img4 from "../../../../assets/after_watching/img-2-4.jpg";
import img5 from "../../../../assets/after_watching/img-2-5.jpg";
const AfterWatching = () => {
  ///////Page10Task1 ///////
  const page10Ans = [
    {
      text: "Rewrite the following sentence in the present perfect tense: 'Mufasa taught Simba about the Circle of Life.'",
      value: "",
      answer: "Mufasa has taught Simba about the Circle of Life.",
    },
    {
      text: "Rewrite the following sentence in the future tense: 'Simba and Nala play together.'",
      value: "",
      answer: "Simba and Nala will play together.",
    },
    {
      text: "Rewrite the following sentence in the past continuous tense: 'Nala is hunting for food.'",
      value: "",
      answer: "Nala was hunting for food.",
    },
    {
      text: "Rewrite the following sentence in the negative form: 'Simba and Nala played together.'",
      value: "",
      answer: "Simba and Nala did not play together.",
    },
    {
      text: "Rewrite the following sentence in the present perfect tense: 'Mufasa ruled the Pride Lands for many years.'",
      value: "",
      answer: "Mufasa has ruled the Pride Lands for many years.",
    },
  ];
  let page10Result = new Set();
  const valueHandlerAfter = (inputValues, result) => {
    for (let i = 0; i < inputValues.length; i++) {
      if (inputValues[i].value === inputValues[i].answer) {
        result.add(inputValues[i].answer);
      } else {
        result.delete(inputValues[i].answer);
      }
    }
    return result;
  };

  ///////Page11Task1 ///////

  const page11Ans = [
    {
      text: "Rewrite the following sentence in the passive voice: 'The hyenas chased after Simba and Nala'.",
      value: "",
      answer: "Simba and Nala were chased after by the hyenas.",
    },
    {
      text: "Rewrite the following sentence in the negative form: 'Mufasa always protects us.'",
      value: "",
      answer: "Mufasa dosn't always protect us.",
    },
    {
      text: "Rewrite the following sentence in the past continuous tense: 'The lions are playing in the Pride Lands'.",
      value: "",
      answer: "The lions were playing in the pride lands.",
    },
    {
      text: "Identify the subject and predicate in the sentence 'The circle of life is a powerful force.'",
      value: "",
      answer: "Subject - circle of life. Predicate - powerful force.",
    },
    {
      text: "Make the sentence 'The animals are gathering to celebrate Simba`s birth' negative.",
      value: "",
      answer: "The animals aren't gathering to celebrate Simba's birth.",
    },
  ];
  let page11Result = new Set();

  ///////Page11Task1 ///////

  const page12Ans = [
    {
      text: "Rewrite the sentence 'Mufasa would be disappointed if he knew how Scar was ruling the Pride Lands' using the third conditional.",
      value: "",
      answer:
        "Mufasa would have been disappointed if he had known how Scar had ruled the Pride Lands.",
    },
    {
      text: "Rewrite the sentence 'If Mufasa were alive, he would have stopped Scar' using the second conditional.",
      value: "",
      answer: "If Mufasa were alive, he would stop Scar.",
    },
    {
      text: "Identify the gerund in the sentence 'Mufasa and Sarabi are looking down on us'.",
      value: "",
      answer: "Mufasa and Sarabi are looking down on us.",
    },
    {
      text: "Replace the verb 'to protect' with its gerund form in the sentence 'Mufasa teaches Simba to protect the Pride Lands'.",
      value: "",
      answer: "Mufasa teaches Simba to protecting the Pride Lands.",
    },
    {
      text: "Replace the word 'king' with its synonym in the sentence 'Mufasa is the king of Pride Rock'.",
      value: "",
      answer: "Mufasa is the ruler of Pride Rock.",
    },
  ];
  let page12Result = new Set();

  ///////Task13//////
  const task13Ans = [
    {
      questionText: "The elephant graveyard is ________ and spooky.",
      answerOptions: [
        { id: "choose1", answerText: "pleasant", isCorrect: false },
        { id: "choose1", answerText: "scary", isCorrect: true },
        { id: "choose1", answerText: "beautiful", isCorrect: false },
        { id: "choose1", answerText: "relaxing", isCorrect: false },
      ],
    },
    {
      questionText: "The sun is ________ and bright.",
      answerOptions: [
        { id: "choose2", answerText: "dim", isCorrect: false },
        { id: "choose2", answerText: "dull", isCorrect: false },
        { id: "choose2", answerText: "shining", isCorrect: true },
        { id: "choose2", answerText: "cloudy", isCorrect: false },
      ],
    },
    {
      questionText: "The moon is ________ and full.",
      answerOptions: [
        { id: "choose3", answerText: "empty", isCorrect: false },
        { id: "choose3", answerText: "bright", isCorrect: true },
        { id: "choose3", answerText: "dark", isCorrect: false },
        { id: "choose3", answerText: "half-full", isCorrect: false },
      ],
    },
    {
      questionText: "Zazu is ________ and loyal.",
      answerOptions: [
        { id: "choose4", answerText: "treacherous", isCorrect: false },
        { id: "choose4", answerText: "dishonest", isCorrect: false },
        { id: "choose4", answerText: "faithful", isCorrect: true },
        { id: "choose4", answerText: "selfish", isCorrect: false },
      ],
    },
  ];

  const task13Result = new Set();

  ///////Task14//////
  const task14Ans = [
    {
      questionText:
        "What does Mufasa tell Simba about the balance of the world?",
      answerOptions: [
        {
          id: "choose1",
          answerText: "Ignore the balance and seize what you want.",
          isCorrect: false,
        },
        {
          id: "choose1",
          answerText: "Everything is meaningless.",
          isCorrect: false,
        },
        {
          id: "choose1",
          answerText:
            "The balance of the world is delicate and must be respected.",
          isCorrect: true,
        },
        {
          id: "choose1",
          answerText: "The strong should dominate the weak.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Where do Simba and Nala go despite warnings from Zazu?",
      answerOptions: [
        {
          id: "choose2",
          answerText: "The elephant graveyard.",
          isCorrect: true,
        },
        { id: "choose2", answerText: "The watering hole.", isCorrect: false },
        { id: "choose2", answerText: "The Pride Lands.", isCorrect: false },
        { id: "choose2", answerText: "The savannah.", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who do Simba and Nala encounter at the elephant graveyard?",
      answerOptions: [
        { id: "choose3", answerText: "Mufasa", isCorrect: false },
        { id: "choose3", answerText: "Timon and Pumbaa", isCorrect: false },
        { id: "choose3", answerText: "Scar", isCorrect: false },
        { id: "choose3", answerText: "Hyenas", isCorrect: true },
      ],
    },
    {
      questionText: "What does Scar tell Simba about the elephant graveyard?",
      answerOptions: [
        {
          id: "choose4",
          answerText: "It's a wonderful place full of adventure and fun!",
          isCorrect: false,
        },
        {
          id: "choose4",
          answerText: "It's a dangerous place.",
          isCorrect: true,
        },
        {
          id: "choose4",
          answerText: "It's a sacred place where no lion should ever go.",
          isCorrect: false,
        },
        {
          id: "choose4",
          answerText: "It's a boring place with nothing to see or do.",
          isCorrect: false,
        },
      ],
    },
  ];
  const task14Result = new Set();
  /////task15//////
  const page15Task1Ans = ["do", "is", "wants", "teaches", "rises", "want"];
  const page15Task1Result = new Set();
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
  /////task15//////
  const page15Task2Ans = [
    {
      img: img1,
      value: "",
      answer: "Zazy and Scar",
    },
    {
      img: img2,
      value: "",
      answer: "Nala and Simba",
    },
    {
      img: img3,
      value: "",
      answer: "Simba",
    },
    {
      img: img4,
      value: "",
      answer: "Sarabi",
    },
    {
      img: img5,
      value: "",
      answer: "Mufasa",
    },
  ];
  const page15Task2Result = new Set();
  return (
    <div className="after__watching">
      <TenPage
        page10Result={page10Result}
        valueHandlerAfter={valueHandlerAfter}
        page10Ans={page10Ans}
      />
      <ElevenPage
        page11Result={page11Result}
        valueHandlerAfter={valueHandlerAfter}
        page11Ans={page11Ans}
      />
      <TwelvePage
        page12Result={page12Result}
        valueHandlerAfter={valueHandlerAfter}
        page12Ans={page12Ans}
      />
      <ThirteenPage task13Ans={task13Ans} task13Result={task13Result} />
      <FourteenPage task14Ans={task14Ans} task14Result={task14Result} />
      <FifteenPage
        page15Task1Ans={page15Task1Ans}
        page15Task1Result={page15Task1Result}
        valueHandler={valueHandler}
        page15Task2Result={page15Task2Result}
        valueHandlerAfter={valueHandlerAfter}
        page15Task2Ans={page15Task2Ans}
      />
    </div>
  );
};

export default AfterWatching;
