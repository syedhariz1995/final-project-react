
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import MovieDetails from "./page/MovieDetails";
import Movies from "./page/Movies";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails/>}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
