import React from 'react'
import { connect } from 'react-redux'

import { registerUser, registerError } from '../../actions/auth/register'
import ErrorMessage from './ErrorMessage'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayname: '',
      email: '',
      username: '',
      password: '',
      confirm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick(event) {
    const { displayname, email, username, password, confirm } = this.state
    if (password !== confirm) {
      this.props.registerError('Passwords do not match!')
      return
    }
    const creds = {
      displayname: displayname.trim(),
      email: email.trim(),
      username: username.trim(),
      password: password.trim()
    }
    this.props.registerUser(creds)
  }

  render() {
    const { displayname, email, username, password, confirm } = this.state
    return (
      <div className='registerpg'>
      <div className='register-title'>
      <h2>Register with Eventer</h2></div>

      <div className='error-msg'>
      <ErrorMessage />
      </div>

      <form>
        <p><input name='displayname' placeholder='displayname' autoComplete='name'
          onChange={this.handleChange} value={displayname} /></p>

        <p><input name='email' placeholder='email' autoComplete='email'
          onChange={this.handleChange} value={email} /></p>

        <p><input name='username' placeholder='Username' autoComplete='username'
          onChange={this.handleChange} value={username} /></p>

        <p><input type='password' name='password' placeholder='Password' autoComplete='new-password'
          onChange={this.handleChange} value={password} /></p>

        <p><input type='password' name='confirm' placeholder='Confirm' autoComplete='new-password'
          onChange={this.handleChange} value={confirm} /></p>

        <button onClick={this.handleClick}>Register</button>

      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (creds) => {
      return dispatch(registerUser(creds))
    },
    registerError: (message) => {
      dispatch(registerError(message))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
