import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

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
    const { username, password } = this.state
    const goToHome = () => this.props.history.push('/')
    this.props.signIn(username, password, goToHome)
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

          <br />

          <div className='form-group'>
            <label htmlFor='exampleInputUsername'>Username</label>
            <input type='username' className='form-control' id='exampleInputUsername1' aria-describedby='usernameHelp' placeholder='Enter username'
            onChange={this.handleChange} value={username} />
            {/* <small id='usernameHelp' name='username' className='form-text text-muted'
              >We'll never share your email with anyone else.</small> */}
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password'
              onChange={this.handleChange} value={password} /></div>

          <div className='form-group form-check'>
            <input type='checkbox' className='form-check-input' id='exampleCheck1' />
            <label className='form-check-label' htmlFor='exampleCheck1'>I Accept Terms and Conditions</label>
          </div>
          <button type='submit' name='sign-in-button' className='pure-button pure-button-primary'
            onClick={this.handleSubmit}>Sign In</button>
        </form>



      </div>
    )
  }
}

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  signIn: PropTypes.func
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (username, password, onSuccess) => {
      dispatch(clearError())
      dispatch(signIn({ username, password }, onSuccess))
    }
  }
}

export default withRouter(
  connect(null, mapDispatchToProps)(SignIn)
)
