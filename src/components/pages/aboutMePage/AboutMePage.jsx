import { useEffect } from "react";
import Sidebar from "../../sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toogleVisabilitySidebar } from "../../../redux/actions/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMePage = () => {
  const dispatch = useDispatch();
  const fullscreen = useSelector((state) => state.sidebar.bigSidebar);
  const fullScreenContent = fullscreen ? "content__full" : "";

  useEffect(() => {
    dispatch(toogleVisabilitySidebar(true));
  }, []);

  return (
    <div className="page">
      <Sidebar hidden={true} />
      <main className={`content ${fullScreenContent}`}>
        <section className="about">
          <div className="about__cards">
            <div className="about__card">
              <div className="about__card-header">
                <div className="about__card-title">Frontend разработка</div>
                <div className="about__card-icon">
                  <FontAwesomeIcon icon="fa-solid fa-code" style={{ color: "#559fff" }} size="xl" />
                </div>
              </div>
              <p className="about__card-descr">
                Я создаю интерфейсы для веб-приложений, обеспечивая их функциональность, структуру и
                дизайн, чтобы пользователи могли взаимодействовать с веб-сайтами и приложениями.
              </p>
            </div>
            <div className="about__card">
              <div className="about__card-header">
                <div className="about__card-title">Backend разработка</div>
                <div className="about__card-icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-database"
                    style={{ color: "#559fff" }}
                    size="xl"
                  />
                </div>
              </div>
              <p className="about__card-descr">
                Я создаю и поддерживаю серверные приложения и базы данных, обеспечивая их
                надежность, производительность и безопасность.
              </p>
            </div>
            <div className="about__card">
              <div className="about__card-header">
                <div className="about__card-title">Full-stack разработка</div>
                <div className="about__card-icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-laptop-code"
                    style={{ color: "#559fff" }}
                    size="xl"
                  />
                </div>
              </div>
              <p className="about__card-descr">
                Я создаю полноценные веб-приложения, обеспечивая как серверную, так и клиентскую
                стороны, чтобы пользователи могли взаимодействовать с ними через красивый и
                функциональный интерфейс.
              </p>
            </div>
          </div>
          <div className="about__view">
            <div className="about__view-title">Привет, я Михаил Воронин </div>
            <div className="about__view-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus vero
            </div>
            <p className="about__view-descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda totam
              exercitationem id commodi debitis ipsum nam facilis aperiam, quasi iste suscipit iusto
              consequuntur cumque blanditiis neque non. Ex, tempore. Architecto molestiae
              voluptatibus nemo distinctio ullam rerum odio debitis amet eum corrupti perferendis
              magni pariatur provident placeat fuga modi eius, atque quaerat quo fugiat a culpa
              nihil! Illum, ut suscipit.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutMePage;
