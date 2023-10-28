export const toogleWidthSidebar = (isActive) => {
  return {
    type: "SIDEBAR_IS_BIG",
    payload: isActive,
  };
};
