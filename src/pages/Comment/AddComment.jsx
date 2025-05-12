import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'


import { authorizedRequest } from '../../lib/api'
import NavBar from '../../components/NavBar/NavBar'
import CommentForm from '../../components/CommentForm/CommentForm'

function AddComment({toast}) {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)
  


  const navigate = useNavigate()
  const { id } = useParams()

  async function handleSubmit(event) {
    try{
      event.preventDefault()
      console.log('Handle Submit is running')
      const payload = { comment, rating }
      console.log(payload)
      if (rating < 1 || rating > 5) {
        toast.warn("Rating must be between 1 and 5")
       return;
      }
      const response = await authorizedRequest('post', `/places/${id}/comments/`, payload)
      console.log(response)
    }catch(err){
      console.error('Error details:', err.response?.data);
    }
     setComment('')
     setRating(0)
    
     
     toast.success('Comment added successfully')
     navigate(-1)
    

  }

  return (
    <div>
      <NavBar />
      <CommentForm
        comment={comment}
        setComment={setComment}
        rating={rating}
        setRating={setRating}
        handleSubmit={handleSubmit}
        titleVerb='Add'
      />
    </div>
  )
}

export default AddComment
