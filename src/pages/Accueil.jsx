import bannerImg from "../assets/images/IMG.png";
import Banner from "../components/Banner/Banner";
import CardsList from "../components/CardsList/CardsList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

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
