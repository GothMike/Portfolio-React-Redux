export const skillsUrl = () => "./data/skills.json";

export const skillsFetching = () => {
  return {
    type: "SKILLS_FETCHING",
  };
};

export const skillsFetched = (skills) => {
  return {
    type: "SKILLS_FETCHED",
    payload: skills,
  };
};

export const skillsFetchingError = () => {
  return {
    type: "SKILLS_FETCHING_ERROR",
  };
};
