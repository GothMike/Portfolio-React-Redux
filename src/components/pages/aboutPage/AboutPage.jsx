import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleWidthSidebar, toogleVisabilitySidebar } from "../../../redux/actions/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../sidebar/Sidebar";

const AboutMePage = () => {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState("fullStack");

  useEffect(() => {
    dispatch(toogleWidthSidebar(true));
  }, []);

  const ChooseCard = () => {
    switch (selectedCard) {
      case "fullStack":
        return (
          <p className="about__view-descr">
            Я являюсь Full-stack разработчиком и мои обязанности охватывают как клиентскую, так и
            серверную стороны веб-приложений. Моя работа включает создание и обслуживание API для
            взаимодействия с клиентской частью приложения. Я также работаю с базами данных, включая
            их создание, обновление и написание запросов. На клиентской стороне я занимаюсь
            разработкой интерактивных и динамических пользовательских интерфейсов, придавая
            приложениям высокую производительность и обеспечивая управление состоянием приложения.
          </p>
        );
      case "frontend":
        return (
          <p className="about__view-descr">
            Я разрабатываю веб-приложения и веб-сайты, фокусируясь на клиентской стороне. Моя работа
            включает в себя создание интерактивных и динамических пользовательских интерфейсов,
            обеспечение высокой производительности приложений, а также управление состоянием
            приложения.
          </p>
        );
      case "backend":
        return (
          <p className="about__view-descr">
            Я разрабатываю серверную часть веб-приложения. Моя работа включает в себя создание и
            обслуживание API для взаимодействия с клиентской частью приложения. Я также занимаетесь
            работой с базами данных, включая создание, обновление и запросы к данным.
          </p>
        );
      default:
        return <p className="about__view-descr">Я разрабатываю full-stack приложения</p>;
    }
  };

  const cardStyles = {
    fullStack: selectedCard === "fullStack" ? "about__card_selected" : "",
    frontend: selectedCard === "frontend" ? "about__card_selected" : "",
    backend: selectedCard === "backend" ? "about__card_selected" : "",
  };

  return (
    <>
      <Sidebar />
      <main className={`content content__full`}>
        <section className="about">
          <div className="about__cards">
            <div
              onClick={() => setSelectedCard("backend")}
              className={`about__card ${cardStyles.backend}`}
            >
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
            <div
              onClick={() => setSelectedCard("frontend")}
              className={`about__card ${cardStyles.frontend}`}
            >
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
            <div
              onClick={() => setSelectedCard("fullStack")}
              className={`about__card ${cardStyles.fullStack}`}
            >
              <div className="about__card-header">
                <div className="about__card-title">Full-Stack разработка</div>
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
              Моя работа заключается в создании современных веб-приложений
            </div>
            <ChooseCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMePage;
