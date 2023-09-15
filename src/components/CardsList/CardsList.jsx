import ItemsData from "../../data/data.json";
import Cards from "./components/Cards/Cards";
import "./CardsList.css";

const CardsList = () => {
  return (
    <section className="cards-container">
      {ItemsData.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CardsList;
