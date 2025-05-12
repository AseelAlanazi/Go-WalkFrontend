import React from 'react'
import { Link } from 'react-router'

function NotFound() {
    return (
        
        <div className="section has-text-centered">
            <div className="container">
                <h1 className="title is-1">404 Not Found</h1>
                <p className="subtitle is-4">
                    We are sorry but the page you are looking for does not exist.
                </p>
                <figure className="image is-inline-block">
                    <img src="https://res.cloudinary.com/dqbjdttvl/image/upload/v1746508557/pzq0c0etnsvqwwma1ioj.gif" alt="Not Found" />
                    <Link to='/' className='button is-ligh'>Back</Link>
                </figure>
                
            </div>
        </div>
    )
}

export default NotFound
