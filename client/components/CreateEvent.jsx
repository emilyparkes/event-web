import React from 'react'

class CreateEvent extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // this.props.dispatch(sendAddForm(this.state))
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Create a new Event</h1>
        <div>
          <h4>Create a new event to share it with others.</h4>
          {/* <select name='typeSelector' onChange={this.handleTypeSelect}> */}
          {/* {this.props.addTypes.map(interestType => (
            <option key={interestType.type_id}>{interestType.name}</option>
          )
          )} */}
          {/* </select> */}
        </div>

        <form>
          Event Name: <br />
          <input name='event' placeholder='' />
          <br />
          Date Start: <br />
          <input name='date' placeholder='' />
          <br />
          Time Start: <br />
          <input name='date' placeholder='' />
          <br />
          Date End: <br />
          <input name='date' placeholder='' />
          <br />
          Time End: <br />
          <input name='date' placeholder='' />
          <br />
          Location: <br />
          <input name='location' placeholder='' />
          <br />
          Address: <br />
          <input name='address' placeholder='' />
          <br />
          Tickets purchased here: <br />
          <input name='ticketsUrl' placeholder='' />
          <br />
          Ticket Restrictions: <br />
          <input name='restriictions' placeholder='' />
          <br />
          Website: <br />
          <input name='website' placeholder='' />
          <br />
          Description: <br />
          <input name='description' placeholder='' />
          <br />
          <br />
          <button type='submit' onClick={this.handleClick}>Submit Event</button>
        </form>
        <br />
        <br />
      </div>
    )
  }
}


export default CreateEvent
