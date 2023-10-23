const initialState = {
  sidebar: false,
};

const visability = (state = initialState, action) => {
  switch (action.type) {
    case "SIDEBAR_VISABILITY":
      return {
        ...state,
        sidebar: action.payload,
      };
    default:
      return state;
  }
};

export default visability;
