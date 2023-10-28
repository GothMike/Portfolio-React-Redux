import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 475 });
  const sidebarWidth = useSelector((state) => state.sidebar.bigSidebar);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const smallSidebar = sidebarWidth ? "sidebar__small" : "";
  const visibleMenu = sidebarVisible || !isMobile ? "" : "sidebar__hidden";
  const visibleItem = sidebarVisible ? "" : "sidebar__item_hidden";

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
            <NavLink
              className="sidebar__link"
              style={({ isActive }) => ({ color: isActive ? "#9197e0" : "inherit" })}
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li className={`sidebar__item ${visibleItem}`}>
            <NavLink
              className="sidebar__link"
              style={({ isActive }) => ({ color: isActive ? "#9197e0" : "inherit" })}
              to="/about"
            >
              Обо мне
            </NavLink>
          </li>
          <li className={`sidebar__item ${visibleItem}`}>
            <NavLink
              className="sidebar__link"
              style={({ isActive }) => ({ color: isActive ? "#9197e0" : "inherit" })}
              to="/skills"
            >
              Навыки
            </NavLink>
          </li>
          {/* <li className={`sidebar__item ${visibleItem}`}>
            <NavLink
              className="sidebar__link"
              style={({ isActive }) => ({ color: isActive ? "#9197e0" : "inherit" })}
              to="/"
            >
              Портфолио
            </NavLink>
          </li> */}
          <li className={`sidebar__item ${visibleItem}`}>
            <NavLink
              className="sidebar__link"
              style={({ isActive }) => ({ color: isActive ? "#9197e0" : "inherit" })}
              to="/contacts"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
