import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";

const Movies = () => {
  const [movieName, setMoviename] = useState("");
  const [movies, setMovies] = useState([]);


  async function fetchMovies() {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=25c6a9ee&s=${movieName}`
    );
    setMovies(response.data.Search);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Nav />
      <div className="row">
        <h2>Search Movies</h2>

        <div className="search__container">
          <input
            type="search"
            className="search"
            placeholder="E.g. John Wick"
            id="search__input"
            value={movieName}
            onChange={(event) => setMoviename(event.target.value)}
          />
          <button
            className="search__button"
            id="search__button"
            onClick={fetchMovies}
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>

        <div className="search__results">
          <h3>Your movies:</h3>
          <select id="filter" onchange="filterMovies(event)">
            <option value="" disabled selected>
              Sort
            </option>
            <option value="NEW_TO_OLD">Year : Oldest to Latest</option>
            <option value="OLD_TO_NEW">Year : Latest to Oldest</option>
          </select>
        </div>

        <div className="movies">
          {!!movies ? (
            movies.map((movie) => {
              return (
                <div className="movie">
                  <figure className="movie__img--wrapper">
                    <img src={movie.Poster} className="movie__img" />
                  </figure>
                  <div className="movie__title">
                    <h3>{movie.Title}</h3>
                  </div>
                  <div className="movie__year">
                    <p>{movie.Year}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
