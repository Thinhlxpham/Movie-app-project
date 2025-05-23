import { createContext, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (title) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${title}&apikey=b3770ca8`
      );
      if (data.Response === "True") {
        setMovieSearch(data.Search);
      } else {
        setMovieSearch([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovieSearch([]);
    }
  };

  return (
    <MovieContext.Provider
      value={{ movieSearch, searchMovies, selectedMovie, setSelectedMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
