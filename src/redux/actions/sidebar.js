export const toogleWidthSidebar = (isActive) => {
  return {
    type: "SIDEBAR_IS_BIG",
    payload: isActive,
  };
};

export const toogleVisabilitySidebar = (isActive) => {
  return {
    type: "SIDEBAR_IS_VISABILITY",
    payload: isActive,
  };
};
