import React from 'react'

class ProfileEdit extends React.Component {
  
  render() {
    return (
      <div className='profileeditpg'>
        <div className='page-section'>

          <div className='page-heading-section'>
            <div className='page-title-font'>
            <h1>Profile Edit</h1></div>
            {/* edit  */}
            <div className='profile-picture'>
              {/* <img src={profilePic} alt='profile picture' /> */}
            </div>
            {/* edit */}
            {/* <div className='profile-name'>{firstName}</div> */}
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

export default ProfileEdit