import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toogleWidthSidebar } from "../../../redux/actions/sidebar";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Sidebar from "../../sidebar/Sidebar";
import Socials from "../../socials/Socials";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toogleWidthSidebar(false));
  }, []);

  return (
    <>
      <Helmet>
        <title>Главная</title>
        <meta
          name="description"
          content="Привет, меня зовут Михаил, и я веб-программист. Я создаю уникальные веб-приложения и веб-сайты, которые сочетают в себе креативный дизайн и высокую производительность."
        />
      </Helmet>
      <Sidebar />
      <main className="content content__full">
        <div className="content__photo">
          <img src="./img/Photo.webp" alt="photo_author" />
          <div className="content__socials">
            <Socials />
          </div>
        </div>
        <div className="content__wrapper">
          <h1 className="content__title">
            Михаил <br /> <span>Воронин</span>
          </h1>
          <h2 className="content__descr"> Full-Stack developer .NET | React</h2>
          <div className="content__btn">
            <button>
              <Link className="sidebar__link" to="/contacts">
                Связаться со мной
              </Link>
            </button>
          </div>
        </div>
        <div className="content__stickers">
          <img className="content__sticker" src="./icons/icon-html.svg" alt="icon-html" />
          <img className="content__sticker" src="./icons/icon-css.svg" alt="icon-css" />
          <img className="content__sticker" src="./icons/icon-git.svg" alt="icon-git" />
          <img className="content__sticker" src="./icons/icon-js.svg" alt="icon-js" />
          <img className="content__sticker" src="./icons/icon-react.svg" alt="icon-react" />
          <img className="content__sticker" src="./icons/icon-redux.svg" alt="icon-redux" />
          <img className="content__sticker" src="./icons/icon-sharp.svg" alt="icon-sharp" />
          <img className="content__sticker" src="./icons/icon-api.webp" alt="icon-api" />
          <img className="content__sticker" src="./icons/icon-sql.svg" alt="icon-sql" />
        </div>
      </main>
    </>
  );
};

export default MainPage;
