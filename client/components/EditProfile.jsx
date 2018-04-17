import React from 'react'

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='editprofilepg'>
        <div className='page-section'>

          <div className='page-heading-section'>
            <div className='page-title-font'>Profile</div>
            {/* edit  */}
            <div className='profile-picture'>
              <img src={profilePic} alt='profile picture' />
            </div>
            {/* edit */}
            <div className='profile-name'>{firstName}</div>
          </div>

          {/* edit */}
          <div className='page-content-section'>
            <div className='form-username'>Change Username</div>
            <div className='form-password'>Update Password</div>
          </div>



        </div>
      </div>
    )
  }
}

export default EditProfile