import TenPage from "./TenPage/TenPage";
import ElevenPage from "./ElevenPage/ElevenPage";
import "./AfterWatching.css";
import TwelvePage from "./TwelvePage/TwelvePage";

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
        result.add(inputValues[i].value);
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
    </div>
  );
};

export default AfterWatching;
