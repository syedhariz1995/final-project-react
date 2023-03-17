import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Movies from "./page/Movies";

function App() {
  const [movieName, setMoviename] = useState("")
  
  const handleSearch = (value) => {
    setMoviename(value)
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home handleSearch={handleSearch}/>}></Route>
          <Route path="/movies" element={<Movies search={movieName}/>}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
