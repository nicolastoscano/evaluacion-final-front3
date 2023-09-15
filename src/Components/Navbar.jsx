import React, { useContext } from 'react'
import { Link, Route } from 'react-router-dom'
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {

const {theme, setTheme} = useContext(ContextGlobal)

const themeHandler = () => {
  setTheme(!theme)
}

  return (
    <nav className='nav'>
      <h1>TurnoApp</h1>
      <div className='links'>
        <Link to="/" >Home</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/fav" >Favs</Link>
        <button onClick={themeHandler} >Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar 