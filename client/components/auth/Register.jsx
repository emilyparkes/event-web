import React from 'react'
import {connect} from 'react-redux'

import ErrorMessage from './ErrorMessage'
import {register} from '../../actions/auth/auth'
import {showError, clearError} from '../../actions/error'
import {isValidEmail, isWeakPassword} from '../../lib/validate'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      confirm: '',
      invalidEmail: false,
      weakPassword: false,
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value,
      weakPassword: isWeakPassword(this.state.password),
      invalidEmail: isValidEmail(this.state.email)
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const {register} = this.props
    const {email, username, password, confirm} = this.state
    this.setState({submitted: true})
    register(email, username, password, confirm)
  }

  render () {
    const {email, username, password, confirm} = this.state
    return (
      <div className='register'>
        <form>
          <fieldset>
            <legend>Register</legend>

            <label htmlFor='error'>
              <ErrorMessage />
            </label>

            <div className='form-group'>
              <label htmlFor='inputEmail'>Email</label>
              <input className='form-control' id='email' name='email' placeholder='Email'
                onChange={this.handleChange} value={email} required />
            </div>

            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <label className='sr-only' htmlFor='username'>Username</label>
              <div className='input-group mb-2 mr-sm-2'>
                <div className='input-group-prepend'>
                  <div className='input-group-text'>@</div>
                </div>
                <input className='form-control' type='text' id='username' name='username' placeholder='Username' autoComplete='username'
                  onChange={this.handleChange} value={username} required />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input className='form-control' id='password' name='password'
                type='password' placeholder='Password' aria-describedby='passwordHelpBlock' autoComplete='new-password'
                onChange={this.handleChange} value={password} required />
              <small className='form-text text-muted' id='passwordHelpBlock'>
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </small>
            </div>

            <div className='form-group'>
              <label htmlFor='confirm'>Confirm Password</label>
              <input className='form-control' id='confirm' name='confirm'
                type='password' placeholder='Confirm Password' autoComplete='new-password'
                onChange={this.handleChange} value={confirm} required />
            </div>

            <button className='pure-button pure-button-primary'
              onClick={this.handleSubmit}>Register</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    register: (email, username, password, confirm) => {
      if (password !== confirm) {
        dispatch(clearError())
        dispatch(showError('Password and confirmation don\'t match'))
      } else if (!email || !username || !password || !confirm) {
        dispatch(clearError())
        dispatch(showError('Please fill in all fields.'))
      } else if (password !== confirm || !email || !username || !password || !confirm) {
        dispatch(clearError())
        dispatch(showError('Password and confirmation don\'t match'))
        dispatch(showError('Please fill in all fields.'))
      } else if (password === confirm) {
        dispatch(clearError())
        return dispatch(register({email, username, password}))
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
