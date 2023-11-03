import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <>
      <div className="socials">
        <div className="social social_linkedin">
          <Link to="https://linkedin.com/in/gothmike" aria-label="Link to Linkedin">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" alt="icon_linkedin" />
          </Link>
        </div>
        <div className="social social_whatsapp">
          <Link to="https://wa.me/79268170127" aria-label="Link to Whatsapp">
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" size="xl" alt="icon_whatsapp" />
          </Link>
        </div>
        <div className="social social_telegram">
          <Link to="https://t.me/GothMike" aria-label="Link to Telegram">
            <FontAwesomeIcon size="xl" icon="fa-brands fa-telegram" alt="icon_telegram" />
          </Link>
        </div>
        <div className="social social_mail">
          <a href="mailto:mikhailvoronin97@gmail.com" aria-label="Link to mail">
            <FontAwesomeIcon icon="fa-solid fa-envelope" size="xl" alt="icon_gmail" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
