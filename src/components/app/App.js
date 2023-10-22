import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import LinkResume from "../linkResume/LinkResume";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  library.add(fas, faTwitter, faFontAwesome, fab);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <LinkResume />
    </Router>
  );
};

export default App;
