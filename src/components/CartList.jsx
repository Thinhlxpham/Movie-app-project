import "../css/MovieCardList.css";
import { Link } from "react-router-dom";

function CartList({ image, text, id, release }) {
  return (
    <>
      <div className="movie_list">
        <img src={image} alt="" />
        <h4 className="title">{text}</h4>
        <span>{release}</span>
        <Link to={`/search/${id}`}>
          <button className="movie__button">Find Out More</button>
        </Link>
      </div>
    </>
  );
}

export default CartList;
