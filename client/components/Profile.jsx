import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='profilepg'>
        <div className='page-section'>

          <div className='page-heading-section'>
            <div className='page-title-font'>Profile</div>
            <div className='profile-picture'>
              <img src={profilePic} alt='profile picture' />
            </div>
            <div className='profile-name'>{firstName}</div>
          </div>

          <div className='page-content-section'>

            <div className='page-settings'>
              <span className='nav-link-individual-styling'>
                <Link to='/edit'>edit profile</Link>
              </span>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Profile
