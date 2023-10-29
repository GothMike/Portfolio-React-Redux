const initialState = {
  skills: [],
  skillsLoadingStatus: "idle",
};

const skills = (state = initialState, action) => {
  switch (action.type) {
    case "SKILLS_FETCHING":
      return {
        ...state,
        skillsLoadingStatus: "loading",
      };
    case "SKILLS_FETCHED":
      return {
        ...state,
        skills: action.payload,
        skillsLoadingStatus: "idle",
      };
    case "SKILLS_FETCHING_ERROR":
      return {
        ...state,
        skillsLoadingStatus: "error",
      };
    default:
      return state;
  }
};

export default skills;
