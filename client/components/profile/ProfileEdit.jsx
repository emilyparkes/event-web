import React from 'react'
import { Link } from 'react-router-dom'

class ProfileEdit extends React.Component {

  render() {
    return (
      <div className='profilepg'>
        <div className='page-heading-section'>
          
             {/* edit */}
          <div className='profile-pic'>
            <img src="" alt="" />
          </div>
         
            {/* edit */}
          <div className='display-name'>
            <h1>Emily Parkes</h1>
          </div>
         
            {/* edit */}
          <div className='location'>
            <h5>Auckland</h5>
          </div>

        </div>

       <div className='settings' >
        {/* <Preferences /> */}

        {/* edit */}
        <div className='username'> change username</div>
        <div className='pswrd'>change password</div>
        <button>
          <Link to='/profile'>save changes</Link>
        </button>
      </div>


      </div >
    )
  }
}

export default ProfileEdit