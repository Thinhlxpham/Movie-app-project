import "../css/MovieCardList.css";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";
import { useEffect, useState } from "react";
import CartList from "./CartList";
import Poster1 from "../assets/postertest.jpg";
import Poster2 from "../assets/postertest2.jpg";
import Poster3 from "../assets/postertest3.jpg";
import Poster4 from "../assets/postertest4.jpg";
import Poster5 from "../assets/postertest5.jpg";
import Poster6 from "../assets/postertest6.jpg";

function MovieCardList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const movies = [
    {
      id: "tt3896198",
      image: Poster1,
      text: "Guardians of the Galaxy Vol. 2",
      release: "05 May 2017",
    },
    {
      id: "tt0848228",
      image: Poster2,
      text: "The Avengers",
      release: "04 May 2012",
    },
    {
      id: "tt4154796",
      image: Poster3,
      text: "Spider-Man Home",
      release: "26 April 2019",
    },
    {
      id: "tt2911666",
      image: Poster4,
      text: "Minions",
      release: "24 October 2014",
    },
    {
      id: "tt1630029",
      image: Poster5,
      text: "SpiderMan-Cartoon",
      release: "16 December 2022",
    },
    {
      id: "tt4154756",
      image: Poster6,
      text: "NOPE",
      release: "27 April 2018",
    },
  ];

  return (
    <section className="movie_lists">
      <div className="container">
        <h1 className="title">Our Movie Here</h1>
      </div>
      <div className="movie_card_list">
        {loading
          ? new Array(6)
              .fill(0)
              .map((_, index) => <MovieCardSkeleton key={index} />)
          : movies.map((movie) => (
              <CartList
                key={movie.id}
                id={movie.id}
                image={movie.image}
                text={movie.text}
                release={movie.release}
              />
            ))}
      </div>
    </section>
  );
}

export default MovieCardList;
