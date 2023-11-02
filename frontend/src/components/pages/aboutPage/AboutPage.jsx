import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleWidthSidebar } from "../../../redux/actions/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sidebar from "../../sidebar/Sidebar";

const AboutMePage = () => {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState("fullStack");

  useEffect(() => {
    dispatch(toogleWidthSidebar(true));
  }, []);

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
                <div className="about__card-title">Режим работы</div>
                <div className="about__card-icon">
                  <FontAwesomeIcon
                    icon="fa-solid fa-database"
                    style={{ color: "#559fff" }}
                    size="xl"
                  />
                </div>
              </div>
              <div className="about__card-descr">
                <p>
                  <span>График работы: </span> офис / удаленно / гибрид
                </p>
                <p>
                  <span>Релокация: </span> любой город или страна
                </p>
                <p>
                  <span>Время работы:</span> не имеет значения
                </p>
              </div>
            </div>
            <div
              onClick={() => setSelectedCard("frontend")}
              className={`about__card ${cardStyles.frontend}`}
            >
              <div className="about__card-header">
                <div className="about__card-title">Обучение</div>
                <div className="about__card-icon">
                  <FontAwesomeIcon icon="fa-solid fa-code" style={{ color: "#559fff" }} size="xl" />
                </div>
              </div>
              <div className="about__card-descr">
                <p>
                  <span>Backend обучение: </span>самостоятельное обучение C# и .NET с наставником
                </p>
                <p>
                  <span>Frontend обучение: </span> курсы Udemy
                </p>
              </div>
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
              <div className="about__card-descr">
                <p>
                  <span>Языки программирования:</span> C#, JavaScript, SQL
                </p>
                <p>
                  <span>Основные фреймворки и библиотеки:</span> .NET, Entity Framework, React,
                  Redux, Axios
                </p>
                <p>
                  <span>Языки разметок и стилей:</span> CSS, SCSS, SASS
                </p>
              </div>
            </div>
          </div>
          <div className="about__view">
            <div className="about__view-title">Привет, я Михаил Воронин </div>
            <div className="about__view-subtitle">
              Моя работа заключается в создании современных веб-приложений
            </div>
            <p className="about__view-descr">
              Мне 25 лет, я занимаюсь программированием с Октября 2022 года. За это время я смог
              изучить множество различных технологий и языков программирования.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMePage;
