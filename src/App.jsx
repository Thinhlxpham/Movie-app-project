import "../src/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";
import MovieItems from "./pages/MovieItems";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchMovie />} />
          <Route path="movie/:id" element={<MovieItems />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
