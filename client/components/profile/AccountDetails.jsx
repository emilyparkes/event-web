import React from 'react'
import { connect } from 'react-redux'

class AccountDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      confirmNew: ''
    }
  }

  render() {
    const { email, username, currentPassword, newPassword, confirmNew } = this.state
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
            <input id='email' name='email' placeholder={email}
              onChange={this.handleChange} value={email} />

            <br />

            <label htmlFor='confirm'>Current Password</label>
            <input id='currentPassword' name='currentPassword'
              type='password' placeholder='current password'
              onChange={this.handleChange} value={currentPassword} />

            <br />

            <label htmlFor='confirm'>New Password</label>
            <input id='newPassword' name='newPassword'
              type='password' placeholder='new password'
              onChange={this.handleChange} value={newPassword} />

            <br />

            <label htmlFor='confirm'>Confirm New Password</label>
            <input id='confirmNew' name='confirmNew'
              type='password' placeholder='confirm new password'
              onChange={this.handleChange} value={confirmNew} />

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