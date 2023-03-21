import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import headerImg from "../assets/undraw_home_cinema.svg";

const Header = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/movies?search=${searchMovie}`);
  };

  return (
    <header>
      <div className="container">
        <div className="row">
          <h1>
            Watch any movies in <span className="hd-color">HD Quality!</span>
          </h1>
          <h3 className="main__sub--title">Search for your desired movies!</h3>

          <div className="search__container">
            <input
              type="search"
              className="search"
              placeholder="E.g. John Wick"
              id="search__input"
              value={searchMovie}
              onChange={(event) => setSearchMovie(event.target.value)}
            />
            <button
              className="search__button"
              id="search__button"
              onClick={handleSearch}
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>

          <figure>
            <img className="header__img" src={headerImg} alt="" />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
