import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toogleVisabilitySidebar } from "../../../redux/actions/sidebar";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toogleVisabilitySidebar(false));
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      <main className="content">
        <div className="content__photo">
          <img src="./photo.webp" alt="photo_author" />
          <div className="content__socials">
            <div className="content__social content__social_linkedin">
              <Link to="https://linkedin.com/in/gothmike">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" />
              </Link>
            </div>
            <div className="content__social content__social_whatsapp">
              <Link to="https://wa.me/79268170127">
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" size="xl" />
              </Link>
            </div>
            <div className="content__social content__social_telegram">
              <Link to="https://t.me/GothMike">
                <FontAwesomeIcon size="xl" icon="fa-brands fa-telegram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="content__wrapper">
          <h1 className="content__title">
            Михаил <br /> <span>Воронин</span>
          </h1>
          <h2 className="content__descr"> Full-Stack developer .NET | React</h2>
          <div className="content__btn">
            <Button variant="primary">
              <Link className="sidebar__link  " to="/">
                Связаться со мной
              </Link>
            </Button>
          </div>
        </div>
        <div className="content__stickers">
          <img className="content__sticker" src="./icons/icon-html.svg" alt="icon-html" />
          <img className="content__sticker" src="./icons/icon-css.svg" alt="icon-css" />
          <img className="content__sticker" src="./icons/icon-git.svg" alt="icon-git" />
          <img className="content__sticker" src="./icons/icon-js.webp" alt="icon-js" />
          <img className="content__sticker" src="./icons/icon-react.svg" alt="icon-react" />
          <img className="content__sticker" src="./icons/icon-redux.svg" alt="icon-redux" />
          <img className="content__sticker" src="./icons/icon-sharp.svg" alt="icon-sharp" />
          <img className="content__sticker" src="./icons/icon-api.webp" alt="icon-api" />
          <img className="content__sticker" src="./icons/icon-sql.webp" alt="icon-sql" />
        </div>
      </main>
    </>
  );
};

export default MainPage;
