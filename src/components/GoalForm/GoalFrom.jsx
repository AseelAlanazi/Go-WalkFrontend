import React from 'react'
import { useNavigate } from 'react-router';
function GoalFrom(props) {
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
                            <div className="column is-one-third">
                                <h1 className='title has-text-centered'> Update You'r Progress </h1>
                                <form onSubmit={props.handleSubmit} className='box has-background-light'>
                                    <div className="control">
                                        <label htmlFor='goal'>Goal</label>
                                        <input className="input is-hovered"
                                            type="number"
                                            id='goal'
                                            name='goal'
                                            required
                                            value={props.goal}
                                            onChange={event => props.setGoal(event.target.value)} />
                                    </div>
                                    <div className="control">
                                        <label htmlFor='current_progress'>Current Progress</label>
                                        <input className="input is-hovered"
                                            type="number"
                                            id='current_progress'
                                            name='current_progress'
                                            required
                                            value={props.current_progress}
                                            onChange={event => props.setCurrent_progress(event.target.value)} />
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

export default GoalFrom
