import "../css/App.css";
import "../css/Search.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchIcon from "../assets/search-icon.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SearchMovie() {
  return (
    <>
      <Navbar />
      <Link to="/" className="link__home">
        <h3>
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Home
        </h3>
      </Link>
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search Movie Here!"
          className="search-input"
        />
        <button type="submit" className="button">
          Search
        </button>
      </div>
      <div className="search-main-pages">
        <img src={SearchIcon} className="search-img-icon" />
      </div>
      <Footer />
    </>
  );
}
export default SearchMovie;
