import React from 'react'
import { connect } from 'react-redux'

import AccountDetails from './AccountDetails'
import { getProfile } from '../../actions/user-profile'

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'emilycoco',
      firstName: '',
      surname: '',
      preferredName: '',
      profilePic: '',
      bio: '',
      phone: '',
      location: '',
      showAccountDetails: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOpenAccount = this.handleOpenAccount.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(getProfile('emilycoco'))
  }

  handleOpenAccount(e) {
    e.preventDefault()
    if (showAccountDetails === false) {
      this.setState({
        showAccountDetails: true
      })
    } else
      this.setState({
        showAccountDetails: false
      })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

  }

  render() {
    const { firstName, surname, preferredName, profilePic, bio, phone, location, showAccountDetails } = this.state
    return (
      <div className='profilepg'>
        <form className='pure-form pure-form-stacked'>
          <h3>Edit Profile</h3>
          <fieldset>

            <div className='heading-section'>
              <div className='welcome-preferred-name'>
                Hey {preferredName}! Remember these details are visible to your friends.
              </div>
            </div>

            <br />

            <div className='user-section'>
              <div className='profile-pic'>
                <label htmlFor='profilePic'>Profile Picture</label>
                <input id='profilePic' name='profilePic'
                  type='file' placeholder='image url'
                  onChange={this.handleChange} value={profilePic} />
              </div>

              <div className='first-name'>
                <label htmlFor='firstName'>First Name</label>
                <input id='firstName' name='firstName'
                  placeholder='e.g Jane'
                  onChange={this.handleChange} value={firstName} />
              </div>

              <div className='surname'>
                <label htmlFor='surname'>Surname</label>
                <input id='surname' name='surname'
                  placeholder='e.g Doe'
                  onChange={this.handleChange} value={surname} />
              </div>

              <div className='preferred-name'>
                <label htmlFor='preferredName'>Preferred Name</label>
                <input id='preferredName' name='preferredName'
                  placeholder='Janey'
                  onChange={this.handleChange} value={preferredName} />
              </div>

              <div className='location'>
                <label htmlFor='location'>Location</label>
                <input id='location' name='location' placeholder='Auckland'
                  onChange={this.handleChange} value={location} />
              </div>

              <div className='bio'>
                <label htmlFor='bio'>Bio</label>
                <input id='bio' name='bio'
                  placeholder='I am your bio'
                  onChange={this.handleChange} value={bio} />
              </div>

              <div className='phone'>
                <label htmlFor='phone'>phone</label>
                <input id='phone' name='phone'
                  placeholder='phone'
                  onChange={this.handleChange} value={phone} />
              </div>

            </div>

            <div className='settings-section'>
              <button onClick={this.handleOpenAccount}>Edit Account Details
                {showAccountDetails ? <AccountDetails /> : null}
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

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(ProfileEdit)
