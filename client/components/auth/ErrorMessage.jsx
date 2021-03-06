import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import {showError} from '../../actions/error'

class ErrorMessage extends React.Component {
  constructor (props) {
    super(props)

    props.history.listen(() => {
      props.dispatch(showError())
    })
  }

  render () {
    return (
      <div className='error-message red error pl3'>
        {/* <div className="alert alert-danger" role="alert"> */}
        {this.props.errorMessage}
      </div>
    )
  }
}

ErrorMessage.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    listen: PropTypes.func
  }),
  errorMessage: PropTypes.string
}

function mapStateToProps ({errorMessage}) {
  return {errorMessage}
}

export default withRouter(
  connect(mapStateToProps)(ErrorMessage)
)
