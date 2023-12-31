import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleWidthSidebar } from "../../../redux/actions/sidebar";
import { skillsFetching } from "../../../redux/actions/skills";
import SkillsCard from "./SkillsCard";
import Spinner from "../../spinner/Spinner";
import Sidebar from "../../sidebar/Sidebar";

const SkillsPage = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);
  const skillsLoadingStatus = useSelector((state) => state.skills.skillsLoadingStatus);

  useEffect(() => {
    dispatch(toogleWidthSidebar(true));
    dispatch(skillsFetching());
  }, []);

  const renderSkills = (arr, competency) => {
    const filteredData = arr.filter((skill) => skill.competency === competency);

    return filteredData.map(({ ...props }) => {
      return <SkillsCard key={props.id} {...props} />;
    });
  };

  const frontendSkills = renderSkills(skills, "frontend");
  const backendSkills = renderSkills(skills, "backend");

  switch (skillsLoadingStatus) {
    case "loading":
      return (
        <>
          <Helmet>
            <title>Мои навыки</title>
            <meta name="description" content="Блок страницы 'Навыки' моего веб-сайта" />
          </Helmet>
          <Sidebar />
          <main className="content content__full">
            <section className="skills">
              <h2 className="skills__subheader">Frontend навыки</h2>
              <div className="skills__cards">
                <Spinner />
              </div>
              <h2 className="skills__subheader">Backend навыки</h2>
              <div className="skills__cards">
                <Spinner />
              </div>
            </section>
          </main>
        </>
      );
    case "idle":
      return (
        <>
          <Helmet>
            <title>Мои навыки</title>
            <meta name="description" content="Блок страницы 'Навыки' моего веб-сайта" />
          </Helmet>
          <Sidebar />
          <main className="content content__full">
            <section className="skills">
              <h2 className="skills__subheader">Frontend навыки</h2>
              <div className="skills__cards">{frontendSkills}</div>
              <h2 className="skills__subheader">Backend навыки</h2>
              <div className="skills__cards">{backendSkills}</div>
            </section>
          </main>
        </>
      );
    case "error":
      return (
        <>
          <Helmet>
            <title>Мои навыки</title>
            <meta name="description" content="Блок страницы 'Навыки' моего веб-сайта" />
          </Helmet>
          <Sidebar />
          <main className="content content__full">
            <section className="skills">
              <h2 className="skills__subheader">Навыки</h2>
              <h2 className="skills__subheader">Произошла ошибка</h2>
            </section>
          </main>
        </>
      );
    default:
      return <h2 className="skills__subheader">Глобальная непредвиденная ошибка</h2>;
  }
};

export default SkillsPage;
