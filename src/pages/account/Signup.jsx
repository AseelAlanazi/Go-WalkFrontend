import { useState } from 'react'
import axios from 'axios'
import { setTokens } from '../../lib/api'
import { Link, useNavigate } from 'react-router'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/signup/`, { username, email, password })
      setTokens(response.data)
      navigate('/home')
    } catch (err) {
      console.log(err)
      console.log(err.response?.data)
    }
  }
  return (
    <>
      <section className="hero is-fullheight" >
        <div className='hero-body'>
          <div className='container '>
            <div className='columns is-centered '>
              <div className="column is-one-third">
                <h1 className='title has-text-centered'>Sign up page</h1>
                <form onSubmit={handleSubmit} className='box has-background-light'>
                  <div className='field'>
                    <div className="control has-icons-left">
                      <input className="input is-hovered"
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={event => setUsername(event.target.value)}
                        value={username} />
                      <span className="icon is-small is-left">
                        <i className="fa-regular fa-user"></i>
                      </span>
                    </div>
                  </div>

                  <div className='field'>
                    <div className="control has-icons-left">
                      <input className="input is-hovered"
                        type='email'
                        placeholder='Email'
                        name='email'
                        onChange={event => setEmail(event.target.value)}
                        value={email} />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className='field'>
                    <div className="control has-icons-left">
                      <input className="input is-hovered"
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={event => setPassword(event.target.value)}
                        value={password} />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className='buttons'>
                    <button className="button is-success" type='submit'>Sign Up!</button>
                    <Link to='/login'>Already have an account? ? Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div >
        </div >
      </section>
    </>
  )
}

export default Signup
