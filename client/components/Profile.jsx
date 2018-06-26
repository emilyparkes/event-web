import React from 'react'
import { Link } from 'react-router-dom'

// import Preferences from './profile/Preferences'

const Profile = () => {
  return (
    <div className='profilepg'>
        <div className='page-heading-section'>
          <div className='page-title-font'>
          <h1>Profile</h1>
        </div>
      </div>
      <div className='settings' >
        {/* <Preferences /> */}
      <button>
        <Link to='/profile/edit'>edit</Link>
      </button>
      </div>
      
        <div className='notify'>
          <div className='invites'>
            {/* <img className='icon-invite' src='/icons/icon-invite.png' /> */}
          </div>
          <div className='friendslist'>
            {/* <img className='icon-invite' src='/icons/icon-invite.png' /> */}
          </div>
          <div className='interested-in'>
            {/* <img className='icon-invite' src='/icons/icon-invite.png' /> */}
            </div>
          <div className='going-to'>
            {/* <img className='icon-invite' src='/icons/icon-invite.png' /> */}
            </div>
        </div>

    </div>
  )
}

export default Profile

