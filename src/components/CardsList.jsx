// import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import ItemsData from "../data.json";
import "../styles/CardsList.css";

const CardsList = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(ItemsData);
  // }, []);

  return (
    <section className="cards-container">
      {ItemsData.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CardsList;
