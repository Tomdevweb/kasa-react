import colorIcon from "../assets/images/colored-rating-icon.svg";
import transparentIcon from "../assets/images/transparent-rating-icon.svg";
import "../styles/Host.css";

const Host = ({ rating, firstName, lastName, picture }) => {
  const starArray = Array(5).fill(null);
  // creation array de 5 elements de valeurs null

  const FilledStar = () => <img src={colorIcon} className="rating-icon" alt="filled-star" />;

  // Composant pour une étoile vide
  const EmptyStar = () => <img src={transparentIcon} className="rating-icon" alt="empty-star" />;

  return (
    <div className="housing-host">
      <div className="host-info">
        <div className="host-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img className="host-img" src={picture} alt="host" />
      </div>
      <div className="host-rating">{starArray.map((_, index) => (index <= rating ? <FilledStar /> : <EmptyStar />))}</div>
    </div>
  );
};

export default Host;
