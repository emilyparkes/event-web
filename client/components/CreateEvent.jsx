import React from 'react'
import { connect } from 'react-redux'

import { sendForm } from '../actions/create-event'

class CreateEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      eventName: '',
      venueName: '',
      venueAddress: '',
      townSuburb: '',
      region: '',
      dateStart: '',
      timeStart: '',
      dateEnd: '',
      timeEnd: '',
      image: '',
      description: '',
      access: '',
      tickets: '',
      restriction: '',
      organiser: '',
      organiserDescription: '',
      website: '',
      eventType: '',
      eventCategory: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(sendForm(this.state))
  }

  handleChange(e) {
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

        <form method='post'>
          <label>
            Event Name: <br />
            <input name='eventName' value={this.state.eventName} placeholder='Give it a short distinct name' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Venue Name: <br />
            <input name='venueName' value={this.state.venueName} placeholder='Enter the venue name' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Venue Address: <br />
            <input name='venueAddress' value={this.state.venueAddress} placeholder='Address Line 1' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Town/Suburb: <br />
            <input name='townSuburb' value={this.state.townSuburb} placeholder='Address Line 2' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Region: <br />
            <select name='region'>
              <option value='all ages'>Select one...</option>
              <option value='Northland'>Northland</option>
              <option value='Auckland'>Auckland</option>
              <option value='Waikato'>Waikato</option>
              <option value='Gisbourne'>Gisbourne</option>
              <option value='Hawkes Bay'>Hawke's Bay</option>
              <option value='Taranaki'>Taranaki</option>
              <option value='Manawatu/Whanganui'>Manawatu/Whanganui</option>
              <option value='Wellington'>Wellington</option>
              <option value='Tasman'>Tasman</option>
              <option value='Nelson'>Nelson</option>
              <option value='Marlborough'>Marlborough</option>
              <option value='West Coast'>West Coast</option>
              <option value='Canterbury'>Canterbury</option>
              <option value='Otago'>Otago</option>
              <option value='Southland'>Southland</option>
            </select>
          </label>
          <br />
          <label>
            Date Start: <br />
            <input name='dateStart' value={this.state.dateStart} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Time Start: <br />
            <input name='timeStart' value={this.state.timeStart} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Date End: <br />
            <input name='dateEnd' value={this.state.dateEnd} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Time End: <br />
            <input name='timeEnd' value={this.state.timeEnd} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Event Image: <br />
            <input type='file' name='image' value={this.state.image} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Description: <br />
            <input name='description' value={this.state.description} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Access: <br />
            <select name='access'>
              <option value='Free Event'>Free Event</option>
              <option value='Door Sales'>Door Sales</option>
              <option value='Online Tickets'>Online Tickets</option>
              <option value='Online Tickets and Door Sales Available'>Online Tickets and Door Sales Available</option>
            </select>
          </label>
          <br />
          <label>
            Tickets purchased here: <br />
            <input name='tickets' value={this.state.tickets} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Ticket Restrictions: <br />
            <select name='restrictions'>
              <option value='all ages'>All Ages</option>
              <option value='R18'>R18</option>
              <option value='R21'>R21</option>
            </select>
          </label>
          <br />
          <label>
            Organised By: <br />
            <input name='organiser' value={this.state.organiser} placeholder='Who is responsible for this event' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Organiser Description: <br />
            <input name='organiserDescription' value={this.state.organiserDescription} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Links (Facebook/Twitter): <br />
            <input name='website' value={this.state.website} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Event Type: <br />
            <input name='eventType' value={this.state.eventType} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Event Category: <br />
            <input name='eventCategory' value={this.state.eventCategory} placeholder='' onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <button type='submit' onClick={this.handleSubmit}>Submit Event</button>
        </form>
        <br />
        <br />
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newEvent: state.newEvent
  }
}

export default connect(mapStateToProps)(CreateEvent)
