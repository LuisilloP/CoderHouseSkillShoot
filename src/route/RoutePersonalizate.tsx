import { Routes, Route } from "react-router-dom";
//PAGES
import Principal from "../pages/Principal";
import DaRules from "../pages/DaRules";
import AboutUs from "../pages/AboutUs";
import Privacity from "../pages/Privacity";

import TermsCondition from "../pages/TermsCondition";
//imports Specual
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../lib/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
const RoutePersonalizate = () => {
  return (
    <AnimatePresence>
      <HelmetProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route
            path="/Terminos&Condiciones"
            element={<TermsCondition />}
          ></Route>
          <Route path="/AvisoPrivacidad" element={<Privacity />}></Route>
          <Route path="/Reglamento" element={<DaRules />}></Route>
          <Route path="/Nosotros" element={<AboutUs />}></Route>
          <Route path="*" element={<h1>perdido</h1>}></Route>
        </Routes>
      </HelmetProvider>
    </AnimatePresence>
  );
};

export default RoutePersonalizate;
