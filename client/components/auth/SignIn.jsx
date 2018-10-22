import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import PropTypes from 'prop-types'

import { signIn } from '../../actions/auth/auth'
import { clearError } from '../../actions/error'
import ErrorMessage from './ErrorMessage'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    const goToHome = () => this.props.history.push('/')
    this.props.signIn(user, goToHome)
    e.preventDefault()
  }

  render() {
    const { username, password } = this.state
    return (
      <div className='sign-in'>
        <form>
          <legend>Sign in</legend>

          <label htmlFor='error'>
            <ErrorMessage /></label>

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

          {/* <small id='usernameHelp' name='username' className='form-text text-muted'
              >We'll never share your email with anyone else.</small> */}

          <div className='form-group'>
            <label htmlFor='inputPassword5'>Password</label>
            <input className='form-control' type='password' id='inputPassword' name='password' placeholder='Password' autoComplete='current-password'
              onChange={this.handleChange} value={password} required />
          </div>

          <div className='form-group form-check'>
            <input type='checkbox' className='form-check-input' id='termscheck' />
            <label className='form-check-label' htmlFor='termscheck'>I Accept <a href=''>Terms and Conditions</a></label>
          </div>

          <button type='submit' name='sign-in-button' className='pure-button pure-button-primary'
            onClick={this.handleSubmit}>Sign In</button>
        </form>
      </div>
    )
  }
}

// SignIn.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func
//   }),
//   signIn: PropTypes.func
// }

function mapStateToProps(state) {
  return {
    message: state.errorMessage,
    user: state.userDetails
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (user) => {
      dispatch(clearError())
      dispatch(signIn(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
