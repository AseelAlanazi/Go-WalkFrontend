import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'

import { authorizedRequest } from '../lib/api'
import NavBar from '../components/NavBar/NavBar'
import GoalFrom from '../components/GoalForm/GoalFrom'

function UpdateGoal({toast}) {

    const [goal, setGoal] = useState('')
    const [current_progress, setCurrent_progress] = useState('')

    const navigate = useNavigate()

    async function getEditGoal() {
        const response = await authorizedRequest('get', '/goal')
        setGoal(response.data.goal)
        setCurrent_progress(response.data.current_progress)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('Handle Submit is running')
        const payload = { goal, current_progress }
        const response = await authorizedRequest('patch', `/goal/`, payload)
        setGoal('')
        setCurrent_progress('')
        toast.success("You'r Goal update successfully")
        navigate('/goal')
    }
    useEffect(() => {
        getEditGoal()
    }, [])
    return (
        <>
            <NavBar />
            <GoalFrom
                goal={goal}
                setGoal={setGoal}
                current_progress={current_progress}
                setCurrent_progress={setCurrent_progress}
                handleSubmit={handleSubmit}

            />
        </>
    )
}

export default UpdateGoal
