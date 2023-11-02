import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <>
      <div className="socials">
        <div className="social social_linkedin">
          <Link to="https://linkedin.com/in/gothmike">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" />
          </Link>
        </div>
        <div className="social social_whatsapp">
          <Link to="https://wa.me/79268170127">
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" size="xl" />
          </Link>
        </div>
        <div className="social social_telegram">
          <Link to="https://t.me/GothMike">
            <FontAwesomeIcon size="xl" icon="fa-brands fa-telegram" />
          </Link>
        </div>
        <div className="social social_mail">
          <a href="mailto:mikhailvoronin97@gmail.com">
            <FontAwesomeIcon icon="fa-solid fa-envelope" size="xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
