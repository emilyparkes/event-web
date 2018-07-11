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
      showMatch: false
    }
    this.styles = {
      match: {
        color: 'red'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    let match = this.state.match
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      showMatch: this.state.showMatch || name === 'confirm',
      match: match
    })
  }

  handleSubmit(e) {
    const { register } = this.props
    const { displayname, email, username, password, confirm } = this.state
    register(displayname, email, username, password, confirm)
    e.preventDefault()
  }

  render() {
    const { displayname, email, username, password, confirm, showMatch, match } = this.state
    return (
      <div className='register'>
        <form className='pure-form pure-form-stacked'>
          <fieldset>
            <legend>Register</legend>

            <label htmlFor='error'>
              <ErrorMessage /></label>

            {/* <label htmlFor='conirm-error'>
            {showMatch && !match && <span style={this.styles.match}>* Password and confirmation don't match</span>}
            </label> */}
            
            <br />
            <label htmlFor='displayname'>Display Name</label>
            <input id='displayname' name='displayname' placeholder='Display Name'
              onChange={this.handleChange} value={displayname} />
            <br />
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' placeholder='Email'
              onChange={this.handleChange} value={email} />
            <br />
            <label htmlFor='username'>Username</label>
            <input id='username' name='username' placeholder='username'
              onChange={this.handleChange} value={username} />
            <br />
            <label htmlFor='password'>Password</label>
            <input id='password' name='password'
              type='password' placeholder='password'
              onChange={this.handleChange} value={password} />
            <br />
            <label htmlFor='confirm'>Confirm Password</label>
            <input id='confirm' name='confirm'
              type='password' placeholder='confirm password'
              onChange={this.handleChange} value={confirm} />
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
      if (password === confirm) {
        dispatch(clearError())
        return dispatch(register({ displayname, email, username, password }))
      }
      dispatch(showError('Password and confirmation don\'t match'))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
