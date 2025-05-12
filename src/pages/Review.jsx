import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router'


import { authorizedRequest } from '../lib/api'
import NavBar from '../components/NavBar/NavBar'

function Review() {
  const [review, setReview] = useState('')
  const [errorMsg, setErrorMsg] = useState('')


  const { id, } = useParams()


  async function getPlaceComment() {
    try {
      const response = await authorizedRequest('get', `/places/${id}/comments`)
      setReview(response.data)

    } catch (err) {
      console.log(err)
    }
  }
  const navigate = useNavigate();
  const redirectPage = () => {
    navigate(-1);
  }
  useEffect(() => {
    getPlaceComment()
  }, [])
  if (errorMsg) return <h1>{errorMsg}</h1>
  if (!review) return <h1>Loading your Place...</h1>

  return (
    <>
      <NavBar />
      <section className="hero is-fullheight" >
        <button type="button" onClick={redirectPage} className="button is-primary is-light">Back</button>
        <h1 className='title is-1'>Review and Comment</h1>
        <div className='hero-body'>
          <div className='container'>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons ">
                  <Link to={`/places/${id}/comments/add`}>
                    <button className="button is-success ">Add</button>
                  </Link>
                </div>
              </div>
            </div>
            {review.length > 0 ? (
              <ul>
                {review.map((rev, index) => (
                  <li key={index} className="mb-4">
                    <div className="box">
                      <p className="has-text-weight-bold">{rev.username}</p>
                      <p>{rev.comment}</p>
                      <p>
                        {"⭐".repeat(rev.rating)}
                      </p>
                      <p>{rev.adding_at}</p>
                      {rev.is_owner && (
                        <Link className="has-text-left" to={`/places/${id}/comments/${rev.id}`}>
                          <button className="button is-link mt-2 ">Detail</button>
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="has-text-centered has-text-grey-light mt-5">
                No Comment yet , Be the first!
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Review
