import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardsList from "../components/CardsList";
import bannerImg from "../assets/images/IMG.png";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner imageSrc={bannerImg} text="Chez vous, partout et ailleurs" />
        <CardsList />
      </main>
      <Footer />
    </>
  );
};

export default Accueil;
