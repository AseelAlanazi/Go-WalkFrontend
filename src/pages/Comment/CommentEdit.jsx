import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { authorizedRequest } from '../../lib/api'

import CommentForm from '../../components/CommentForm/CommentForm'
import NavBar from '../../components/NavBar/NavBar'

function CommentEdit({ toast }) {

    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('')
    const navigate = useNavigate()
    const { id, pk } = useParams()

    async function getCommentDetai() {
            const response = await authorizedRequest('get', `/places/${id}/comments/${pk}`)
            setComment(response.data.comment)
            setRating(response.data.rating)
            console.log(response.data)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Handle Submit is running')
        const payload = { comment, rating }
        const response = await authorizedRequest('patch', `/places/${id}/comments/${pk}/`, payload)
        setComment('')
        setRating('')
        navigate(`/places/${id}/comments/${pk}`)
        toast.success('Comment Edit successfully')
    }
    useEffect(()=>{
        getCommentDetai()
    },[])
    return (

        <div>
            <NavBar />
            <CommentForm
                comment={comment}
                setComment={setComment}
                rating={rating}
                setRating={setRating}
                handleSubmit={handleSubmit}
                titleVerb='Edit '

            />
        </div>

    )
}

export default CommentEdit
