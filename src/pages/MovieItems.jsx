import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/MovieItem.css";
import MovieItemSkeleton from "../skeleton/MovieItemSkeleton";

const API_URL = "https://www.omdbapi.com/?apikey=82771fc9";

function MovieItems() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      <Navbar />

      <Link to="/" className="link__home">
        <h3>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </h3>
      </Link>

      <div className="container-item">
        {loading || !movie ? (
          <MovieItemSkeleton />
        ) : (
          <>
            <div className="img-left-side">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="detail-right-side">
              <h1>{movie.Title}</h1>
              <span>{movie.Released}</span>
              <p>{movie.Plot}</p>
              <button disabled>Watch</button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default MovieItems;
