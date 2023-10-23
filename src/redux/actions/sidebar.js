export const toogleVisabilitySidebar = (isActive) => {
  return {
    type: "SIDEBAR_IS_BIG",
    payload: isActive,
  };
};
