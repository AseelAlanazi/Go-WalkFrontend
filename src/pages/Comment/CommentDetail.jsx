import React from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { useState, useEffect } from 'react'

import { authorizedRequest } from '../../lib/api'
import NavBar from '../../components/NavBar/NavBar'

function CommentDetail({ toast }) {

    const { id, pk } = useParams()
    const navigate = useNavigate()

    const [comment, setComment] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    async function getCommentDetai() {
        try {
            const response = await authorizedRequest('get', `/places/${id}/comments/${pk}`)
            setComment(response.data)
            console.log(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }
    async function deleteComment() {
        try {
            console.log('id:', id, 'pk:', pk)
            const response = await authorizedRequest('delete', `/places/${id}/comments/${pk}/`)
            toast.success('Comment Delete successfully')
            if (response.status === 204) {
                navigate(-1)
            }
        } catch (err) {
            console.log(err)
        }
    }

    function showConfirmDelete() {
        setDeleteConfirm(true)
    }
    useEffect(() => {
        getCommentDetai()
    }, [])
    return (
        <>
            <section className="hero is-fullheight" >
                <NavBar />
                <Link className="button is-primary is-light " to={`/places/${id}/comments/`}>Back</Link>
                <div className='hero-body'>
                    <div className="container">
                        <div className='columns is-centered'>
                            <div className="box has-background-light ">
                                {comment.comment ?
                                    <>
                                        <h1 className="title is-5 ">Comment:</h1>
                                        <h1 className="title is-4 has-text-centered">{comment.comment}</h1>
                                        <h1 className="title is-5">Rate :</h1>
                                        <h1 className="title is-4 has-text-centered">{comment.rating}</h1>
                                        <div className='buttons '>
                                            <Link to={`/places/${id}/comments/${pk}/edit-comment`}><button className="button is-link  is-medium">edit</button></Link>
                                            {
                                                deleteConfirm
                                                    ?
                                                    <button className="button is-danger is-medium" onClick={deleteComment}>Are you Sure?</button>
                                                    :
                                                    <button className="button is-danger is-light is-medium" onClick={showConfirmDelete}>Delete</button>
                                            }
                                        </div>
                                    </>
                                    : (
                                        <p>Loading...</p>

                                    )}</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommentDetail
