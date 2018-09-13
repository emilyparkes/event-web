import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import DatePicker from './DatePicker'


import ErrorMessage from './auth/ErrorMessage'
import { sendForm } from '../actions/create-event'

class CreateEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      eventName: '',
      venueName: '',
      address: '',
      suburb: '',
      region: '',
      lat: '',
      lng: '',
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
      eventCategory: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      submitted: true
    })
    this.props.dispatch(sendForm(this.state))
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    

    if (this.state.submitted === true) {
      return (
        <div className='createevent-submitted'>
          <h3>Thank you for creating an event with Eventify!</h3>

          <h5><label htmlFor='error'>
            <ErrorMessage /></label></h5>
          <br />
        </div>
      )
    }

    if (this.props.message === 'Your event has been created successfully') {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className='createevent'>

        {/* <select name='typeSelector' onChange={this.handleTypeSelect}> */}
        {/* {this.props.addTypes.map(interestType => (
            <option key={interestType.type_id}>{interestType.name}</option>
          )
          )} */}
        {/* </select> */}

        <form method='post'>
          <fieldset>
            <h2>Create an Event</h2>
            <br />
            <label htmlFor='error'>
              <ErrorMessage /></label>
            <br />

            <label htmlFor='name'>Event Name:</label>
            <br />
            <input id='eventName' name='eventName' placeholder='Give it a short distinct name'
              onChange={this.handleChange} value={this.state.eventName} required />
            <br />

            <label htmlFor='venueName'>Venue Name:</label>
            <br />
            <input id='venueName' name='venueName' placeholder='Enter the venue name'
              onChange={this.handleChange} value={this.state.venueName} required />
            <br />

            <label htmlFor='address'>Venue Address:</label>
            <br />
            <input id='address' name='address' placeholder='Address Line 1'
              onChange={this.handleChange} value={this.state.address} required />
            <br />

            <label htmlFor='suburb'>Town/Suburb:</label>
            <br />
            <input id='suburb' name='suburb' placeholder='Address Line 2'
              onChange={this.handleChange} value={this.state.suburb} required />
            <br />

            <label htmlFor='region'>Region: </label>
            <br />
            <select id='region' name='region' onChange={this.handleChange}>
              <option defaultValue value='all ages'>Select one...</option>
              <optgroup label='North Island'>
                <option value='Northland'>Northland</option>
                <option value='Auckland'>Auckland</option>
                <option value='Waikato'>Waikato</option>
                <option value='Gisbourne'>Gisbourne</option>
                <option value='Hawkes Bay'>Hawke's Bay</option>
                <option value='Taranaki'>Taranaki</option>
                <option value='Manawatu/Whanganui'>Manawatu/Whanganui</option>
                <option value='Wellington'>Wellington</option>
              </optgroup>
              <optgroup label='South Island'>
                <option value='Tasman'>Tasman</option>
                <option value='Nelson'>Nelson</option>
                <option value='Marlborough'>Marlborough</option>
                <option value='West Coast'>West Coast</option>
                <option value='Canterbury'>Canterbury</option>
                <option value='Otago'>Otago</option>
                <option value='Southland'>Southland</option>
              </optgroup>
            </select>
            <br />

            <label htmlFor='postal'>Postal: </label>
            <br />
            <input id='postal' name='postal' placeholder=''
              onChange={this.handleChange} value={this.state.postal} />
            <br />

            <br />
            <input type='hidden' id='lat' name='lat' placeholder=''
              onChange={this.handleChange} value={this.state.lat} />
            <br />

            <br />
            <input type='hidden' id='lng' name='lng' placeholder=''
              onChange={this.handleChange} value={this.state.lng} />
            <br />

            <DatePicker />
            <br />

            <label htmlFor='dateStart'>Date Start: </label>
            <br />
            <input id='dateStart' name='dateStart' placeholder=''
              onChange={this.handleChange} value={this.state.dateStart} />
            <br />

            <label htmlFor='timeStart'>Time Start: </label>
            <br />
            <input id='timeStart' name='timeStart' placeholder=''
              onChange={this.handleChange} value={this.state.timeStart} />
            <br />

            <label htmlFor='dateEnd'>Date End:</label>
            <br />
            <input id='dateEnd' name='dateEnd' placeholder=''
              onChange={this.handleChange} value={this.state.dateEnd} />
            <br />

            <label htmlFor='timeEnd'>Time End: </label>
            <br />
            <input id='timeEnd' name='timeEnd' placeholder=''
              onChange={this.handleChange} value={this.state.timeEnd} />
            <br />

            <label htmlFor='image'>Event Image: </label>
            <br />
            <input id='image' type='file' name='image' placeholder=''
              onChange={this.handleChange} value={this.state.image} />
            <br />

            <label htmlFor='description'>Description:</label>
            <br />
            <input id='description' name='description' placeholder=''
              onChange={this.handleChange} value={this.state.description} />
            <br />

            <label htmlFor='access'>Access: </label>
            <br />
            <select id='access' name='access'>
              <option value='Free Event'>Free Event</option>
              <option value='Door Sales'>Door Sales</option>
              <option value='Online Tickets'>Online Tickets</option>
              <option value='Online Tickets and Door Sales Available'>Online Tickets and Door Sales Available</option>
            </select>
            <br />

            <label htmlFor='tickets'>Tickets purchased here: </label>
            <br />
            <input id='tickets' name='tickets' placeholder=''
              onChange={this.handleChange} value={this.state.tickets} />
            <br />

            <label htmlFor='restrictions'>Ticket Restrictions: </label>
            <br />
            <select id='restrictions' name='restrictions'>
              <option value='all ages'>All Ages</option>
              <option value='R18'>R18</option>
              <option value='R21'>R21</option>
            </select>
            <br />

            <label htmlFor='organiser'>Organised By:</label>
            <br />
            <input id='organiser' name='organiser' placeholder='Who is responsible for this event'
              onChange={this.handleChange} value={this.state.organiser} />
            <br />

            <label htmlFor='organiserDescription'>Organiser Description:</label>
            <br />
            <input id='organiserDescription' name='organiserDescription' placeholder=''
              onChange={this.handleChange} value={this.state.organiserDescription} />
            <br />

            <label htmlFor='website'>Links (Facebook/Twitter):</label>
            <br />
            <input id='website' name='website' placeholder=''
              onChange={this.handleChange} value={this.state.website} />
            <br />

            <label htmlFor='eventType'>Event Type: </label>
            <br />
            <input id='eventType' name='eventType' placeholder=''
              onChange={this.handleChange} value={this.state.eventType} />
            <br />

            <label htmlFor='eventCategory'>Event Category:</label>
            <br />
            <input id='eventCategory' name='eventCategory' placeholder=''
              onChange={this.handleChange} value={this.state.eventCategory} />
            <br />

            <br />
            <button type='submit' onClick={this.handleSubmit}>Submit Event</button>
          </fieldset>
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
