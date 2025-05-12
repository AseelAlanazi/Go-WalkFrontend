import { useState } from 'react'
import { useNavigate } from 'react-router'
import { setTokens } from '../../lib/api'
import axios from 'axios'
import { Link } from 'react-router'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/token/`, formData)
      setTokens({
        access: response.data.access,
        refresh: response.data.refresh
      })
      navigate('/home')
    } catch (err) {
      console.log(err)
      setError('Invalid username or password')
    }
  }

  return (
    <>
      <section className="hero is-fullheight">
        <div className='hero-body'>
          <div className='container '>
            <div className='columns is-centered '>
              <div className="column is-one-third " >
                <h1 className='title has-text-centered'>Log in  page</h1>
                <form onSubmit={handleSubmit} className='box has-background-light'>
                  <div className='field'>
                    <div className="control has-icons-left">
                      <input className="input is-hovered"
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        required />
                      <span className="icon is-small is-left">
                        <i class="fa-regular fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className='field'>
                    <div className="control has-icons-left">
                      <input className="input is-hovered"
                        type='password'
                        placeholder='Select Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required />
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className='column' >
                    <div className='buttons'>
                      <button className="button is-success" type='submit'>Log in!</button>
                      {error && <p>{error}</p>}
                      <Link to='/signup'>Don't have an account? ?Signup!</Link>
                    </div>
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

export default Login
