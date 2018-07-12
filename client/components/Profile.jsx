import React from 'react'
import { Link } from 'react-router-dom'

// import Preferences from './profile/Preferences'

const Profile = () => {
  return (
    <div className='profilepg'>

      <div className='heading-section'>
        <div className='welcome'>
          Profile!
          </div>
      </div>

      <div className='user-section'>
        <div className='profile-pic'>
          <img src='' alt='Profile Picture' />
        </div>

        <div className='displayname'>
          <h5>name</h5>
        </div>

        <div className='location'>
          <h5>Auckland</h5>
        </div>

        <div className='bio'>
          <h5>bio</h5>
        </div>

      </div>

      <div className='settings-section'>
        
      </div>

      <div className='notify-section'>
        <div className='invites'>
          invites{/* <img className='icon-invite' src='/icons/icon-invite.png' /> */}
        </div>
        <div className='friends-list'>
          friends{/* <img className='icon-invite' src='/icons/icon-invite.png' /> */}
        </div>
        <div className='interested-in'>
          interested in events{/* <img className='icon-invite' src='/icons/icon-invite.png' /> */}
        </div>
        <div className='going-to'>
          going to events{/* <img className='icon-invite' src='/icons/icon-invite.png' /> */}
        </div>
      </div>

      <button className='pure-button pure-button-primary'>
        <Link to='/profile/edit'>Edit Profile</Link>
      </button >



    </div>
  )
}

export default Profile

