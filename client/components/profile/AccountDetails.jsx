import React from 'react'
import { connect } from 'react-redux'

class AccountDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      oldpassword: '',
      newPassword: '',
      confirmnew: ''
    }
  }

  render() {
    const { email, username, oldpassword, newPassword, confirmnew } = this.state
    return (
      <div className='account-section'>

        <form className='pure-form pure-form-stacked'>
          <fieldset>
            <legend>Change Account Details</legend>

            <label htmlFor='username'>Username</label>
            <input id='username' name='username' placeholder={username}
              onChange={this.handleChange} value={username} />

            <br />

            <label htmlFor='email'>Email</label>
            <input id='email' name='email' placeholder='Email'
              onChange={this.handleChange} value={email} />

            <br />

            <label htmlFor='confirm'>Current Password</label>
            <input id='currentPassword' name='currentPassword'
              type='password' placeholder='password'
              onChange={this.handleChange} value={currentPassword} />

            <br />

            <label htmlFor='confirm'>New Password</label>
            <input id='newPassword' name='password'
              type='password' placeholder='password'
              onChange={this.handleChange} value={newPassword} />

            <br />

            <label htmlFor='confirm'>Confirm New Password</label>
            <input id='confirm' name='confirm'
              type='password' placeholder='confirm password'
              onChange={this.handleChange} value={confirmnew} />

            <br />

            <button className='pure-button pure-button-primary'
              onClick={this.handleSubmit}>
              Save Account Changes
            </button>

          </fieldset>
        </form>

      </div>
    )
  }
}

export default connect()(AccountDetails)