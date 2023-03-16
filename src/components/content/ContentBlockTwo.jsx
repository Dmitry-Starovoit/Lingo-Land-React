import "./ContentBlockTwo.css";
import { useState } from "react";

const ContentBlockTwo = function (props) {
  const categories = ["Before Watching", "While Watching", "After Watching"];
  const content = [
    "Before watching the movie you have to learn the words and do different exercise on those words. The exercise are aimed at learning words easily and applying them.",
    "While watching there will be exercises on the movie. Such as: watch a movie and insert missing words or in the correct form of a word.Will also be a test for the film.",
    "After watching there will be exercises to practice grammar.  There will be different and interesting tasks for the film that you will easily do.",
  ];
  const [activeCategories, setActiveCategories] = useState(0);

  return (
    <div className="block__two--content">
      <div className="section__title">
        <h2 className="section__description">
          Workbook consist of three parts
        </h2>
      </div>

      <div className="operations">
        <div className="operations__tab-container">
          {categories.map((value, i) => (
            <button
              key={i}
              onClick={() => setActiveCategories(i)}
              className={
                activeCategories === i
                  ? `btn operations__tab operations__tab--${
                      i + 1
                    } operations__tab--active`
                  : `btn operations__tab operations__tab--${i + 1}`
              }
            >
              {value}
            </button>
          ))}
        </div>
        {content.map((value, i) => (
          <div
            key={i}
            onClick={() => setActiveCategories(i)}
            className={
              activeCategories === i
                ? `operations__content operations__content--${
                    i + 1
                  } operations__content--active`
                : `operations__content operations__content--${i + 1}`
            }
          >
            <p>{value}</p>
            <h5 className="operations__header">TIP: always repeat words</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBlockTwo;
