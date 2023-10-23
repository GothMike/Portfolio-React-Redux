export const toogleVisabilitySidebar = (isActive) => {
  return {
    type: "SIDEBAR_VISABILITY",
    payload: isActive,
  };
};
