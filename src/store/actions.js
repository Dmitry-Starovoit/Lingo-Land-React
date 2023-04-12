export const ADD_WORD = "ADD_WORD";

// Action Creator
export const addWord = (word) => {
  return {
    type: ADD_WORD,

    payload: word,
  };
};

export const CARD_WORDS = "CARD_WORDS";

// Action Creator
export const cardWord = (word) => {
  return {
    type: CARD_WORDS,

    payload: word,
  };
};

export const CHECK_PAGE_TWO = "CHECK_PAGE_TWO";

// Action Creator
export const checkPageTwo = (coordinate) => {
  return {
    type: CHECK_PAGE_TWO,

    payload: coordinate,
  };
};
