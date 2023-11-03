import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingPage from "../pages/loadingPage/LoadingPage";

import LinkResume from "../resume/LinkResume";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const MainPage = lazy(() => import("../pages/mainPage/MainPage"));
const AboutPage = lazy(() => import("../pages/aboutPage/AboutPage"));
const SkillsPage = lazy(() => import("../pages/skillsPage/SkillsPage"));
const ContactsPage = lazy(() => import("../pages/contactsPage/ContactsPage"));

const App = () => {
  library.add(fas, faTwitter, faFontAwesome, fab);

  return (
    <Router basename="/">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
      <LinkResume />
    </Router>
  );
};

export default App;
