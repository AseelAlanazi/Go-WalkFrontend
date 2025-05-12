import React from 'react'
import { useNavigate } from 'react-router';
function FavoriteForm(props) {
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
                <h1 className='title has-text-centered'>{props.titleVerb} Favorites Places</h1>
                <form onSubmit={props.handleSubmit} className='box has-background-light'>
                  <div className='column '>
                    <div className="control">
                      <label htmlFor='name'>Name:</label>
                      <input className="input is-hovered"
                        id='name'
                        name='name'
                        required
                        value={props.name}
                        onChange={event => props.setName(event.target.value)} />
                    </div>
                    <div className="control">
                      <label htmlFor='location'>Location</label>
                      <input className="input is-hovered"
                        id='location'
                        name='location'
                        required
                        value={props.location}
                        onChange={event => props.setLocation(event.target.value)} />
                    </div>
                    <div className="control">
                      <label htmlFor='img'>Wanna share imge for it?</label>
                      <input className="input is-hovered"
                        type='file'
                        accept='image/*'
                        onChange={event => props.setImage(event.target.files[0])} />
                    </div>
                  </div>
                  <div className='column' >
                    <div className='buttons'>
                      <button className="button is-link" type='submit'>Submit</button>
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

export default FavoriteForm
