import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";

const HousingNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="housing-error">
        <p> Cette propriété n'existe pas ou n'est plus disponible...</p>
        <button onClick={() => navigate("/")}>Revenir à l'accueil</button>
      </div>
    </>
  );
};

export default HousingNotFound;
