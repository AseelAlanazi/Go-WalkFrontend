import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'
import { Link } from 'react-router'
import NavBar from '../../components/NavBar/NavBar'
function FavoritesDetail({ toast }) {
    const { id } = useParams()
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [image, setImage] = useState(null)
    const [favorite, setFavorite] = useState(null)
    const navigate = useNavigate()

    async function getFavoritePlaceDetail() {
        try {
            const response = await authorizedRequest('get', `/favorite-place/${id}`)
            setFavorite(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }
    async function deletePlace() {
        try {
            const response = await authorizedRequest('delete', `/favorite-place/${id}/`)
            if (response.status === 204) {
                toast.success('Deleted successfully')
                navigate('/favorites')
            }
        } catch (err) {
            console.log(err)
        }
    }
    const redirectPage = () => {
        navigate(-1);
    }
    function showConfirmDelete() {
        setDeleteConfirm(true)
    }
    useEffect(() => {
        getFavoritePlaceDetail()
        console.log(id)
    }, [])


    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!favorite) return <h1>Loading your Page...</h1>
    return (
        <>
            <section class="hero is-fullheight" >
                <NavBar />
                <button type="button" onClick={redirectPage} className="button is-primary is-light">Back</button>
                <div className='hero-body'>
                    <div className="container">
                        <div className='columns is-centered'>
                            <div className="box has-background-light ">
                                {image ? <img src={image} alt="favorite" /> : null}
                                <p className="title is-4">{favorite.name} in {favorite.location}</p>
                                <div className='buttons'>
                                    <Link to={`/favorites/${id}/edit/`}><button className="button is-link  is-medium">Edit</button></Link>
                                    {
                                        deleteConfirm
                                            ?
                                            <button className="button is-danger is-medium" onClick={deletePlace}>Are you Sure?</button>
                                            :
                                            <button className="button is-danger is-light is-medium" onClick={showConfirmDelete}>Delete</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FavoritesDetail
