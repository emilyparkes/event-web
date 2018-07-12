import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AccountDetails from './AccountDetails'

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 1,
      username: '',
      location: '',
      displayname: '',
      email: '',
      username: '',
      password: '',
      confirm: ''
    }
  }

  render() {
    return (
      <div className='profilepg'>
        <form className='pure-form pure-form-stacked'>
          <h3>Edit Profile</h3>
          <fieldset>

            <div className='heading-section'>
              <div className='welcome-preferred-name'>
                Editing Profile!
                {/* {preferredName} */}
              </div>
            </div>

            <div className='user-section'>
              <div className='profile-pic'>
                <img src='' alt='Profile Picture' />
              </div>

              <div className='first-name'>
                <h5>first name</h5>
                {/* {firstName} */}
              </div>

              <div className='surname'>
                <h5>last name</h5>
                {/* {surname} */}
              </div>

              <div className='location'>
                <h5>Auckland</h5>
                {/* {location} */}
              </div>

              <div className='bio'>
                <h5>bio</h5>
                {/* {bio} */}
              </div>

            </div>

            <div className='settings-section'>
              <button>
                <AccountDetails />
              </button>
            </div>

            <div className='notify-section'>
              {/* nothing here to edit */}
            </div>

            <button className='pure-button pure-button-primary'
              onClick={this.handleSubmit}>
              Save Profile Changes
            </button>

          </fieldset>
        </form>

      </div>
    )
  }
}

export default connect()(ProfileEdit)