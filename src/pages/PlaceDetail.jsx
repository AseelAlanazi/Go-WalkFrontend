import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router'

import { authorizedRequest } from '../lib/api'
import NavBar from '../components/NavBar/NavBar'

function PlaceDetail() {
    const [place, setPlace] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    async function getPlaceDetail() {
        try {
            const response = await authorizedRequest('get', `/places/${id}`)
            setPlace(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }
    useEffect(() => {
        getPlaceDetail()
    }, [])
    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!place) return <h1>Loading your Place...</h1>

    return (
        <>
            <NavBar />
            <div className='container'>
                <div className="columns is-centered is-multiline">
                    <div className="column is-6">
                        <div className="box">
                            <p className="title is-3 mt-3">{place.name}</p>
                            <figure className="image is-4by3">
                                <img src={place.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </figure>

                            <p className="title is-5 mt-3">Location: {place.location}</p>
                            <p>{place.description}</p>


                            <div style={{ textAlign: 'right' }}>
                                <Link to={`/places/${place.id}/comments`}>
                                    <button className="button is-link mt-2">Comment</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlaceDetail
