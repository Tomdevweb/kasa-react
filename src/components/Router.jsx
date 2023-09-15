import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import HousingNotFound from "../components/HousingNotFound";
import Accueil from "../pages/Accueil";
import Apropos from "../pages/Apropos";
import Erreur from "../pages/Erreur/Erreur";
import Logement from "../pages/Logement/Logement";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/logement/not-found" element={<HousingNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
