import "../css/Header.css";
import MovieBackground from "../assets/moviebackground.jpg";
import SearchMovie from "../pages/SearchMovie";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";
//API_URL: http://www.omdbapi.com/?apikey=82771fc9
function Header() {
  const { searchMovies } = useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }
    setLoading(true);
    await searchMovies(search);
    navigate("/search");
    {
      loading && (
        <div className="movie_list-skeleton">
          {new Array(6).fill(0).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      );
    }
  };

  return (
    <header className="header">
      <img src={MovieBackground} alt="" className="movie-background" />
      <form className="search-form" onSubmit={handleSubmit}>
        <h2 className="search_title">Looking for a Movie!</h2>
        <input
          type="text"
          placeholder="Search Movie Here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;
