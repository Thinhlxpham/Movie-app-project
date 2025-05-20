import MovieLogo from "../assets/movielogo.png";
import "../css/Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-left">
          <img src={MovieLogo} alt="" className="img-logo" />
          <span className="movie-logo">Movie App</span>
        </div>
        <div className="footer-right">
          <h4>
            Create By: <span>©Thinh Pham</span>
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
