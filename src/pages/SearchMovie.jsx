import "../css/App.css";
import "../css/Search.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchIcon from "../assets/search-icon.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";

function SearchMovie() {
  const { movieSearch, searchMovies } = useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) return;
    setLoading(true);
    await searchMovies(search);
    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <Link to="/" className="link__home">
        <h3>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Home
        </h3>
      </Link>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search Movie Here!"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {!movieSearch?.length && !loading && (
        <div className="search-main-pages">
          <img src={SearchIcon} className="search-img-icon" alt="Search Icon" />
        </div>
      )}

      <div className="movie_card_list">
        {loading
          ? new Array(6)
              .fill(0)
              .map((_, index) => <MovieCardSkeleton key={index} />)
          : movieSearch?.length > 0
          ? movieSearch.map((movie) => (
              <div className="movie_list" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h4 className="title">{movie.Title}</h4>
                <span>{movie.Year}</span>
                <Link to={`/movie/${movie.imdbID}`}>
                  <button className="movie__button">Find Out More</button>
                </Link>
              </div>
            ))
          : !loading}
      </div>

      <Footer />
    </>
  );
}

export default SearchMovie;
