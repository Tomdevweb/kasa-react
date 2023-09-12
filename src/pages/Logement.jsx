import React, { useEffect, useState } from "react";
import ItemsData from "../data.json";
import { useParams } from "react-router-dom";
import "../styles/Logement.css";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const Logement = () => {
  const { id } = useParams(); /* Récupérer l'ID de l'article depuis l'URL */
  const [housing, setHousing] = useState(null);

  useEffect(() => {
    const selectedHousing = ItemsData.find((item) => item.id === id);
    console.log(selectedHousing);
    setHousing(selectedHousing);
  }, [id]);

  //Dans le guide des etapes, il est recommandé d'utiliser un composant Navigate ou hook useNavigate en cas d'erreur d'id logement
  if (!housing) {
    return (
      <>
        <Header />
        <div className="housing-error">Cette propriété n'existe pas ou n'est plus disponible...</div>;
      </>
    );
  }
  const { pictures, rating, tags, description, equipments } = housing;
  // equivaut a const pictures = housing.pictures
  const {
    host: { name, picture },
  } = housing;
  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <Header />
      <main className="housing-main">
        <Slideshow images={pictures} />
        <section className="housing-header">
          <div className="housing-info">
            <h1 className="housing-title">{housing.title}</h1>
            <p className="housing-location">{housing.location}</p>
            <Tags tags={tags} />
          </div>
          <Host rating={rating} firstName={firstName} lastName={lastName} picture={picture} />
        </section>
        <section className="housing-collapse">
          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul className="equipments-content">
              {equipments.map((equipment) => {
                return <li>{equipment}</li>;
              })}
            </ul>
          </Collapse>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Logement;
