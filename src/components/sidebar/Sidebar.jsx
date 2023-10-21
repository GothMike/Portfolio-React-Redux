import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <Link className="sidebar__link" to="/">
            Главная
          </Link>
        </li>
        <li className="sidebar__item">
          <Link className="sidebar__link" to="/">
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
