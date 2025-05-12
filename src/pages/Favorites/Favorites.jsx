import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

import { authorizedRequest } from '../../lib/api'
import NavBar from '../../components/NavBar/NavBar'


function Favorites() {

    const [favorite, setFavorite] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    async function getFavoritePlace() {
        try {
            const response = await authorizedRequest('get', `/favorite-place/`)
            setFavorite(response.data)
        } catch (err) {
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }
    useEffect(() => {
        getFavoritePlace()
    }, [])
    return (
        <>
            <NavBar />
            <section class="hero is-fullheight" >
                <h1 className="title is-1 "> Favorites Places <br /></h1>
                <div className='hero-body'>
                    <div className='container'>
                        
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons ">
                                    <Link to='/favorites/add'>
                                        <button className="button is-success is-medium">Add</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered is-multiline">
                            {favorite.length > 0 ? (
                                <ul>
                                    {favorite.map(place => {
                                        return (
                                            <li key={place.id} className="card">
                                                <div className="box">
                                                    <article className="media">
                                                        {place.img && (
                                                            <figure className="media-left">
                                                                <p className="image is-128x128">
                                                                    <img src={place.img} alt={place.name} />
                                                                </p>
                                                            </figure>
                                                        )}
                                                        <div className="media-content">
                                                            <div className="content">
                                                                <p className="title is-4">
                                                                    <Link to={`/favorites/${place.id}`}>
                                                                        {place.name} in {place.location}
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : (
                                <p className="has-text-centered has-text-grey-light mt-5">
                                    You don't have any favorite places yet. Start adding some!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Favorites
