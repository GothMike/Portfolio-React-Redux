const initialState = {
  visability: true,
  bigSidebar: false,
};

const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case "SIDEBAR_IS_VISABILITY":
      return {
        ...state,
        visability: action.payload,
      };
    case "SIDEBAR_IS_BIG":
      return {
        ...state,
        bigSidebar: action.payload,
      };
    default:
      return state;
  }
};

export default sidebar;
