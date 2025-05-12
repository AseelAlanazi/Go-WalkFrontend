import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'

import NavBar from '../components/NavBar/NavBar'

function Places() {

    const [places, setPlaces] = useState([])

    async function getPlaces() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/places/`)
        console.log(response)
        setPlaces(response.data)
    }

    useEffect(() => {
        getPlaces()
    }, [])
    return (
        <>
            <NavBar />
            <section className="hero is-fullheight" >
                <div className='hero-body'>
                    <div className='container'>
                        <h2 className='title'>Discover places where you can walk and enjoy your time</h2>
                        <div className="columns is-centered is-multiline">
                            {places.map(place => (
                                <div key={place.id} className="column is-one-third">
                                    <div className="card mb-6">
                                        <div className="card-image">
                                            <figure className="image image is-4by3">
                                                <img src={place.img} alt={place.name} />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content">
                                                    <Link className="title is-4" to={`/places/${place.id}`}>
                                                        {place.name} in {place.location}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Places