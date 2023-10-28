import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toogleWidthSidebar } from "../../../redux/actions/sidebar";

import ContactForm from "../../contactForm/ContactForm";
import Sidebar from "../../sidebar/Sidebar";
import Socials from "../../socials/Socials";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toogleWidthSidebar(true));
  }, []);

  return (
    <>
      <Sidebar />
      <main className={`content content__full`}>
        <section className="contacts">
          <div className="contacts__wrapper">
            <div className="contacts__title">Связаться со мной</div>
            <div className="contacts__descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint quibusdam odit
              ducimus praesentium modi dolore veniam soluta deserunt itaque eveniet, maxime minima
              voluptatibus fugiat ipsa voluptatum, distinctio nemo a?
            </div>
            <Socials />
          </div>
          <div className="contacts__wrapper-form">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactsPage;
