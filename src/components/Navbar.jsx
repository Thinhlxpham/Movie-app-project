import { Link } from "react-router-dom";
import MovieLogo from "../assets/movielogo.png";
import "../css/Navbar.css";
function Navbar() {
  return (
    <nav className="logo">
      <div className="container">
        <div className="nav-left">
          <img src={MovieLogo} alt="" className="img-logo" />
          <span className="movie-logo">Movie App</span>
        </div>

        <div className="nav-right">
          <Link to="/">
            <h3 className="home_link">Home</h3>
          </Link>
          <Link to="/search">
            <h3 className="search_link">Search</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
