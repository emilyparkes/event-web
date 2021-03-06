import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getProfile} from '../actions/auth/user-profile'

import FriendsList from './notify-section/FriendsList'
import InterestedIn from './notify-section/InterestedIn'
import GoingTo from './notify-section/GoingTo'
import InvitedTo from './notify-section/InvitedTo'

// import Preferences from './profile/Preferences'

class Profile extends React.Component {
  componentDidMount () {
    this.props.dispatch(getProfile('emilycoco'))
  }

  render () {
    const {profile} = this.props
    return (
      <div className='profilepg' >

        <div className='heading-section'>
          <div className='welcome-preferred-name'>
            <h3>Welcome to your profile {profile.preferredName}!</h3>
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
            <InvitedTo />
          </div>
          <br/>
          <div className='friends-list'>
            <FriendsList />
          </div>
          <br/>
          <div className='interested-in'>
            <InterestedIn />
          </div>
          <br/>
          <div className='going-to'>
            <GoingTo />
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
