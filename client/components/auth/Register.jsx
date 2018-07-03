import React from 'react'
import { connect } from 'react-redux'

import { registerUser } from '../../actions/register'

const passwordError = 'Password must be at least 8 characters long.'
const confirmError = 'Your passwords do not match.'
const emailError = 'Please enter a valid email address.'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayname: '',
      email: '',
      emailError: '',
      username: '',
      password: '',
      passwordError: '',
      confirm: '',
      confirmError: ''
    }

  }



  render() {
    const { displayname, email, emailError, username, password, confirm, confirmError } = this.state
    return (
      <div className='registerpg'>
        <div className='page-heading-section'>
          <div className='page-title-font'>Register</div>
          <div className='page-title-blurb'>Register with Eventer to save your favourite events, find events your friends are attending and more.</div>
        </div>

        <form className='submit-form'>
          <div className='form-name'>
            Display Name: <br />
            <input name='displayname' placeholder='Your name so friends know who you are e.g Jane Doe'
              onChange={this.handleChange} value={displayname} required />
          </div>
          <br />
          <div className='form-email'>
            Email: <br />
            <input name='email' placeholder='example@email.co.nz'
              onChange={this.handleChange} value={email} required />
          </div>
          <br />
          <div className='form-username'>
            Username: <br />
            <input name='username' placeholder='janedoe'
              onChange={this.handleChange} value={username} required />
          </div>
          <br />
          <div className='form-password'>
            Password: <br />
            <input name='password' type='password' placeholder='Use numbers, letters and capitols to make your password strong'
              onChange={this.handleChange} value={password} required />
          </div>
          <br />
          <div className='form-password'>
            Confirm password: <br />
            <input name='confirm' type='password' placeholder='Tell me again please!'
              onChange={this.handleChange} value={confirm} required />
            {showMatch && !match && <span style={this.styles.match}>*</span>}
          </div>
          <br />

          {this.state.errorMessage && <div className='form-error'>{this.state.errorMessage}</div>}
          <div className='submit-flex'>
            <button className='button is-primary'
              onClick={this.handleSubmit}>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(Register)