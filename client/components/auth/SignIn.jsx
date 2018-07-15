import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { signIn } from '../../actions/auth'
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
        <form className='pure-form pure-form-stacked'>
          <fieldset>
            <legend>Sign in</legend>

            <label htmlFor='error'>
              <ErrorMessage /></label>

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

            <button name='sign-in-button' className='pure-button pure-button-primary'
              onClick={this.handleSubmit}>Sign in</button>
          </fieldset>
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
