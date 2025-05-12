import React from 'react'
import { useNavigate } from 'react-router';
function CommentForm(props) {
    const navigate = useNavigate();
    const redirectPage = () => {
        navigate(-1);
    }

    return (
        <>
            <section className="hero is-fullheight" >
                <button type="button" onClick={redirectPage} className="button is-primary is-light">Back</button>
                <div className='hero-body'>
                    <div className='container '>
                        <div className='columns is-centered '>
                            <div className="column is-half">
                                <h1 className='title has-text-centered'>{props.titleVerb} Your Comment </h1>
                                <form onSubmit={props.handleSubmit} className='box has-background-light'>
                                    <div className="control">
                                        <label htmlFor='comment'>Comment</label>
                                        <textarea className="textarea input is-hovered"
                                            placeholder="Write your comment here ..."
                                            id='comment'
                                            name='comment'
                                            required
                                            value={props.comment}
                                            onChange={event => props.setComment(event.target.value)} />
                                    </div>
                                    <div className="control">
                                        <label htmlFor='rating'>Rate</label>
                                        <input className="input is-hovered"
                                            id='rating'
                                            name='rating'
                                            type="text"
                                            required
                                            value={props.rating}
                                            onChange={event => props.setRating(event.target.value)} />
                                    </div>
                                    <div className='buttons'>
                                        <button className="button is-link mt-4" type='submit'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommentForm
