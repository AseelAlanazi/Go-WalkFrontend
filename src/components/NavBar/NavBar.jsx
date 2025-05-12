import React from 'react'
import { Link } from 'react-router'
function NavBar() {
  function logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    window.location.href = '/'
  }
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
         
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item"
              to='/home'>Home</Link>
            <Link className="navbar-item"
              to='/goal'>Progress</Link>
            <Link className="navbar-item"
              to='/places'>Places</Link>
            <Link className="navbar-item"
              to='/favorites'>Favorites</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-danger" onClick={logout}>
                <strong>Log out</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>


    </>
  )




}

export default NavBar
