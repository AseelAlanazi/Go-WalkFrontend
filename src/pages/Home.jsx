import React from 'react'
import { Link } from 'react-router'

import NavBar from '../components/NavBar/NavBar'

function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half has-text-centered p-5">
            <h1 className="title is-1 mb-4">Ready to explore?</h1>
            <p className="subtitle is-4 mb-5">
              Discover the best walking spots around you, or check your favorite places anytime!
            </p>
            <div className="buttons is-centered">
              <Link to="/places">
                <button className="button is-link is-medium">Explore Places</button>
              </Link>
              <Link to="/favorites">
                <button className="button is-primary is-medium">View Favorites</button>
              </Link>
              <Link to="/goal">
                <button className="button button is-warning is-medium">Progress</button>
              </Link>
            </div>
          </div>
        </div>
        <img src='https://res.cloudinary.com/dqbjdttvl/image/upload/v1746545528/oeuagubilztat6h1ku0e.png' />


      </div>
    </>
  )
}

export default Home
