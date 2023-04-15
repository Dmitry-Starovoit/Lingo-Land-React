const initialState = {
  coordinate: [
    {
      id: 1,
      x: 350,
      y: 1950,
      value: "LION CUB",
      maxX: 605,
      minX: 570,
      maxY: 2775,
      minY: 2735,
    },
    {
      id: 2,
      x: 350,
      y: 2050,
      value: "BEE",
      maxX: 605,
      minX: 570,
      maxY: 2540,
      minY: 2500,
    },
    {
      id: 3,
      x: 350,
      y: 2150,
      value: "BEAK",
      maxX: 605,
      minX: 570,
      maxY: 2305,
      minY: 2265,
    },
    {
      id: 4,
      x: 350,
      y: 2250,
      value: "ANT",
      maxX: 860,
      minX: 820,
      maxY: 2540,
      minY: 2500,
    },
    {
      id: 5,
      x: 350,
      y: 2350,
      value: "HYENA",
      maxX: 860,
      minX: 820,
      maxY: 2075,
      minY: 2035,
    },
    {
      id: 6,
      x: 350,
      y: 2450,
      value: "PROTECT",
      maxX: 860,
      minX: 820,
      maxY: 2305,
      minY: 2265,
    },
    {
      id: 7,
      x: 350,
      y: 2550,
      value: "POUNCE",
      maxX: 860,
      minX: 820,
      maxY: 2775,
      minY: 2735,
    },
    {
      id: 8,
      x: 350,
      y: 2650,
      value: "HUNT",
      maxX: 605,
      minX: 570,
      maxY: 2075,
      minY: 2035,
    },
  ],
};

export function coordinateReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COORDINATE":
      return {
        ...state,
        coordinate: action.payload,
      };
    default:
      return state;
  }
}
