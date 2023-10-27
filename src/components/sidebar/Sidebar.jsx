import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { toogleVisabilitySidebar } from "../../redux/actions/sidebar";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 475 });
  const sidebarWidth = useSelector((state) => state.sidebar.bigSidebar);
  const sidebarVisability = useSelector((state) => state.sidebar.visability);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const visibleSidebar = sidebarVisability ? "sidebar sidebar__hidden" : "";
  const visibleMenu = !isMobile || sidebarVisible ? "" : "sidebar sidebar__hidden";
  const visibleItem = sidebarVisible ? "" : "sidebar__item_hidden";
  const smallSidebar = sidebarWidth ? "sidebar__small" : "";

  useEffect(() => {
    dispatch(toogleVisabilitySidebar(isMobile));
  }, []);

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

      <nav className={`${visibleSidebar} ${smallSidebar} ${visibleMenu}`}>
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
              className="sidebar__link  "
              style={({ isActive }) => ({ color: isActive ? "#9197e0" : "inherit" })}
              to="/"
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
