import React from 'react'
import { Link } from 'react-router'
function welcom() {
  return (
    <>
      <section  className=" hero is-fullheight has-background-success-light" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100',

      }}>
       
          <div className="box" >
            <div className="has-text-centered p-6">
              <h1 className="title is-1 mb-6 ">Welcome to GO WALK</h1>
              <p className="subtitle is-3 mb-6 ">
                Discover and add your favorite walking places<br />set your personal walking goals and start . .<br /><strong className='title'>Your journey today!</strong></p>
              <Link to='/signup'><button className="button is-info mu-3 is-warning" >START!</button></Link>
            </div>
          </div>
      </section>
    </>
  )
}

export default welcom
