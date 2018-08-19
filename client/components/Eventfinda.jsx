import React from 'react'
import { Link } from 'react-router-dom'

class Eventfinda extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Eventfindapg'>
        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Eventfinda</h1>
          </div>
          <h6>Do you want to eventify your life? To make it fuller and brighter? Find your ideal events here.</h6>
        </div>


        <div className='page-section'>
        {this.props.name}
        {/* {} */}
        </div>
      </div>
    )
  }
}

export default Eventfinda