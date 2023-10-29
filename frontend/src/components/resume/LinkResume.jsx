import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { saveAs } from "file-saver";
import pdfFile from "../../assets/Resume_Voronin_RU.pdf";

const LinkResume = () => {
  const handleDownloadClick = () => {
    saveAs(pdfFile, "Resume_Voronin.pdf");
  };

  return (
    <div onClick={handleDownloadClick} className="resume">
      <div className="resume__text">Скачать резюме</div>
      <div className="resume__img">
        <FontAwesomeIcon icon="fa-solid fa-download" style={{ color: "#fcfcfc" }} />
      </div>
    </div>
  );
};

export default LinkResume;
