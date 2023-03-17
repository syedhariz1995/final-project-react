import React from 'react'
import { Link } from 'react-router-dom'
import movieLogo from '../assets/movie_logo.png'
import Movies from '../page/Movies'

const Nav = () => {
  return (
    <nav>
      <a href="/"><img className='logo__img' src={movieLogo} alt="" /></a>
      <ul className="nav__links">
        <li><Link className="nav__link nav__home" to="/">Home</Link></li>
        <li><Link className="nav__link" to="/movies">Movies</Link></li>
        <li><Link className="nav__link" to="">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
