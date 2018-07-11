import React from 'react'
import { connect } from 'react-redux'

import { register } from '../../actions/auth'
import { showError, clearError } from '../../actions/error'
import ErrorMessage from './ErrorMessage'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayname: '',
      email: '',
      username: '',
      password: '',
      confirm: '',
      match: false,
      showMatch: false,
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { register } = this.props
    const { displayname, email, username, password, confirm } = this.state
    this.setState({ submitted: true })
    register(displayname, email, username, password, confirm)
  }

  render() {
    const { displayname, email, username, password, confirm, showMatch, match, submitted } = this.state
    return (
      <div className='register'>
        <form className='pure-form pure-form-stacked'>
          <fieldset>
            <legend>Register</legend>

            <br />

            <label htmlFor='error'>
              <ErrorMessage /></label>

            <br />

            <label htmlFor='displayname'>Display Name</label>
            <input id='displayname' name='displayname' placeholder='Display Name'
              onChange={this.handleChange} value={displayname} required />

            <br />

            <label htmlFor='email'>Email</label>
            <input id='email' name='email' placeholder='Email'
              onChange={this.handleChange} value={email} required />

            <br />

            <label htmlFor='username'>Username</label>
            <input id='username' name='username' placeholder='username'
              onChange={this.handleChange} value={username} required />

            <br />

            <label htmlFor='password'>Password</label>
            <input id='password' name='password'
              type='password' placeholder='password'
              onChange={this.handleChange} value={password} required />

            <br />

            <label htmlFor='confirm'>Confirm Password</label>
            <input id='confirm' name='confirm'
              type='password' placeholder='confirm password'
              onChange={this.handleChange} value={confirm} required />

            <br />

            <button className='pure-button pure-button-primary'
              onClick={this.handleSubmit}>Register</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: (displayname, email, username, password, confirm) => {
      if (password != confirm) {
        dispatch(clearError())
        dispatch(showError('Password and confirmation don\'t match'))
      } else if (!displayname || !email || !username || !password || !confirm) {
        dispatch(clearError())
        dispatch(showError('Please fill in all fields.'))
      } else if (password != confirm && !displayname || !email || !username || !password || !confirm) {
        dispatch(clearError())
        dispatch(showError('Password and confirmation don\'t match'))
        dispatch(showError('Please fill in all fields.'))
      } else if (password === confirm) {
        dispatch(clearError())
        return dispatch(register({ displayname, email, username, password }))
      }
    }
  }
}

  export default connect(null, mapDispatchToProps)(Register)
