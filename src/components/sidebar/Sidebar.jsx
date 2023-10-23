import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const hidden = useSelector((state) => state.visability.sidebar);
  const hiddenSidebar = hidden ? "sidebar__hidden" : "";
  console.log(hidden);
  return (
    <nav className={`sidebar ${hiddenSidebar}`}>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <Link className="sidebar__link" to="/">
            Главная
          </Link>
        </li>
        <li className="sidebar__item">
          <Link className="sidebar__link" to="/aboutMe">
            Обо мне
          </Link>
        </li>
        <li className="sidebar__item">
          <Link className="sidebar__link" to="/">
            Навыки
          </Link>
        </li>
        <li className="sidebar__item">
          <Link className="sidebar__link" to="/">
            Портфолио
          </Link>
        </li>
        <li className="sidebar__item">
          <Link className="sidebar__link  " to="/">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
