import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toogleWidthSidebar } from "../../../redux/actions/sidebar";

import Sidebar from "../../sidebar/Sidebar";
import Socials from "../../socials/Socials";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toogleWidthSidebar(true));
  }, []);

  return (
    <>
      <Helmet>
        <title>Связаться со мной</title>
        <meta name="description" content="Блок страницы 'Контакты' моего веб-сайта" />
      </Helmet>
      <Sidebar />
      <main className={`content content__full`}>
        <section className="contacts">
          <div className="contacts__wrapper">
            <div className="contacts__title">Связаться со мной</div>
            <div className="contacts__descr">
              Если вы хотите связаться со мной и обсудить детали нашего дальнейшего сотрудничество,
              то выберите удобный для вас способ из предложенных ниже!
            </div>
            <Socials />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactsPage;
