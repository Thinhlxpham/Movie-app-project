import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieCardList from "../components/MovieCardList";
import Navbar from "../components/Navbar";
import "../css/App.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <MovieCardList />
      <Footer />
    </div>
  );
}

export default Home;
