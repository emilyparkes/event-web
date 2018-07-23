import React from 'react'
// import { Link } from 'react-router-dom'

class FriendsList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getFriendsList())
  }

  render() {
    return (
      <div className=''>
      </div>
    )
  }
}

export default FriendsList
