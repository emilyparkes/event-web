import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getProfile } from '../actions/user-profile'

// import Preferences from './profile/Preferences'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getProfile('emilycoco'))
  }

  render() {
    const { profile } = this.props
    return (
      <div className='profilepg' >

        <div className='heading-section'>
          <div className='welcome-preferred-name'>
            Welcome to your profile {profile.preferredName}!
          </div>
        </div>

        <div className='user-section'>
          <div className='profile-pic'>
            <img src={profile.profilePic} alt='Profile Picture' />
          </div>

          <div className='first-name'>
            {profile.firstName}
          </div>

          <div className='surname'>
            {profile.surname}
          </div>

          <div className='preferred-name'>
            {profile.preferredName}
          </div>

          <div className='location'>
            {profile.location}
          </div>

          <div className='bio'>
            {profile.bio}
          </div>

        </div>

        <div className='settings-section'>
        </div>

        <br />

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
          <Link to={`/profile/${'emilycoco'}/edit`}>Edit Profile</Link>
        </button >

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(Profile)
