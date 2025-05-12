import React from 'react'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'

import NavBar from '../components/NavBar/NavBar'
import { authorizedRequest } from '../lib/api'

function Goal() {
    const [goal, setGoal] = useState('')
    const [history, setHistory] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    async function getGoal() {
        try {
            const response = await authorizedRequest('get', `/goal/`)
            setGoal(response.data)
        } catch (err) {
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }
    async function getProgressHistory() {
        try {
            const response = await authorizedRequest('get', `/goal/history`)
            setHistory(response.data)
        } catch (err) {
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Something went Wrong :-(')
            }
        }
    }

    useEffect(() => {
        getGoal()
        getProgressHistory()
    }, [])
    return (
        <>
            <NavBar />
            <section className="hero is-fullheight" >
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className="title is-1 ">
                            One <span className=" has-text-success has-text-weight-bold">Step</span> closer to your<br />
                            <span style={{ marginLeft: '2rem' }}>
                                goal <span className="has-text-warning has-text-weight-bold">Every day</span>
                            </span>
                        </h1>
                        <div className="columns is-centered is-multiline">
                            <div className="column is-half">
                                <div className="card ">
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <h1>You'r Goal :</h1>
                                                <h2 className="title  has-text-centered">{goal.goal}</h2>
                                                <h1>You'r Current Progress:</h1>
                                                <h2 className="title  has-text-centered">{goal.current_progress}</h2>
                                            </div>
                                            <Link to='/goal/update'><button>Update</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section">
                            <div className="container">
                                <h2 className="title is-4 has-text-centered">Progress History</h2>
                                <div className="table-container">
                                    <table className="table is-fullwidth is-striped is-hoverable is-bordered">
                                        <thead>
                                            <tr>
                                                <th className='has-background-link-light'>#</th>
                                                <th className='has-background-link-light'>Progress</th>
                                                <th className='has-background-link-light'>Updated At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {history.map((hi, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{hi.progress}</td>
                                                    <td>{hi.updated_at}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Goal
