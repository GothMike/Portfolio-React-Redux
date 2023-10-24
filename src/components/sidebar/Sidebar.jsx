import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 475 });
  const sidebar = useSelector((state) => state.sidebar.bigSidebar);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const visibleMenu = !isMobile || sidebarVisible ? "" : "sidebar__hidden";
  const visibleItem = sidebarVisible ? "" : "sidebar__item_hidden";
  const smallSidebar = sidebar ? "sidebar__small" : "";

  const burger = isMobile ? (
    <FontAwesomeIcon
      className={`burger`}
      icon="fa-solid fa-bars"
      style={{ color: "#faffff" }}
      size="2xl"
      onClick={() => setSidebarVisible(!sidebarVisible)}
    />
  ) : null;

  return (
    <>
      {burger}

      <nav className={`sidebar ${smallSidebar} ${visibleMenu}`}>
        <ul className="sidebar__list">
          <li className={`sidebar__item ${visibleItem}`}>
            <Link className="sidebar__link" to="/">
              Главная
            </Link>
          </li>
          <li className={`sidebar__item ${visibleItem}`}>
            <Link className="sidebar__link" to="/aboutMe">
              Обо мне
            </Link>
          </li>
          <li className={`sidebar__item ${visibleItem}`}>
            <Link className="sidebar__link" to="/">
              Навыки
            </Link>
          </li>
          <li className={`sidebar__item ${visibleItem}`}>
            <Link className="sidebar__link" to="/">
              Портфолио
            </Link>
          </li>
          <li className={`sidebar__item ${visibleItem}`}>
            <Link className="sidebar__link  " to="/">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
