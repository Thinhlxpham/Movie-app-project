import "../css/Header.css";
import MovieBackground from "../assets/moviebackground.jpg";
function Header() {
  return (
    <header className="header">
      <img src={MovieBackground} alt="" className="movie-background" />
      <form className="search-form">
        <h2 className="search_title">Looking for a Movie!</h2>
        <input type="text" placeholder="Search Movie Here" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;
