import { useEffect } from "react";
import Sidebar from "../../sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toogleVisabilitySidebar } from "../../../redux/actions/visability";

const AboutMePage = () => {
  const dispatch = useDispatch();
  const fullscreen = useSelector((state) => state.visability.sidebar);
  const fullScreenContent = fullscreen ? "content__full" : "";

  useEffect(() => {
    dispatch(toogleVisabilitySidebar(true));
  }, []);

  return (
    <div className="page">
      <Sidebar hidden={true} />
      <div className={`content ${fullScreenContent}`}></div>
    </div>
  );
};

export default AboutMePage;
