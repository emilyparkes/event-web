import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// import DayPickerInput from 'react-day-picker/DayPickerInput'
// import {
//   formatDate,
//   parseDate
// } from 'react-day-picker/moment'
// import 'moment/locale/it'

import ErrorMessage from '../auth/ErrorMessage'
import DatePicker from './DatePicker'
import { sendForm } from '../../actions/create-event'

class CreateEvent extends React.Component {
  constructor () {
    super()
    this.state = {
      eventName: '',
      venueName: '',
      address: '',
      suburb: '',
      region: '',
      lat: '',
      lng: '',
      selectedDays: [],
      timeStart: '',
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
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDayClick (day, { selected }) {
    // const {selectedDays} = this.state
  //   if (selected) {
  //     const selectedIndex = selectedDays.findIndex(selectedDay =>
  //       DateUtils.isSameDay(selectedDay, day))
  //     selectedDays.splice(selectedIndex, 1)
  //   } else {
  //     selectedDays.push(day)
  //   }
  //   this.setState({
  //     selectedDays
  //   })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      submitted: true
    })
    this.props.dispatch(sendForm(this.state))
  }

  render () {
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

        <form>
          <fieldset>
            <legend>Create an Event</legend>

            <label htmlFor='error'>
              <ErrorMessage />
            </label>

            <h3 className='section-label'>1. Event Details</h3>
            <div className='form-group'>
              <label htmlFor='inputEvent'>Event Name:</label>
              <input type='text' className='form-control' id='inputEvent' name='eventName' placeholder=''
                onChange={this.handleChange} value={this.state.eventName} required />
            </div>

            <div className='form-group'>
              <label htmlFor='inputVenue'>Venue Name:</label>
              <input type='text' className='form-control' id='inputVenue' name='venueName' placeholder=''
                onChange={this.handleChange} value={this.state.venueName} required />
            </div>

            <div className='form-group'>
              <label htmlFor='inputAddress'>Address:</label>
              <input type='text' className='form-control' id='inputAddress' name='address' placeholder='1234 Main St'
                onChange={this.handleChange} value={this.state.address} required />
            </div>
            <div className='form-group'>
              <label htmlFor='inputAddress2'>Address Line 2</label>
              <input type='text' className='form-control' id='inputAddress2' placeholder='Apartment, studio, or floor' />
            </div>
            <div className='form-group'>
              <label htmlFor='inputSuburb'>Suburb</label>
              <input type='text' className='form-control' id='inputSuburb' placeholder='' />
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputCity'>City</label>
                <input type='text' className='form-control' id='inputCity' name='city'
                  onChange={this.handleChange} value={this.state.city} />
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor='inputRegion'>Region</label>
                <select id='inputRegion' className='custom-select' name='region'
                  onChange={this.handleChange} >
                  <option defaultValue>Select one...</option>
                  <optgroup label='North Island'>
                    <option value='Northland'>Northland</option>
                    <option value='Auckland'>Auckland</option>
                    <option value='Waikato'>Waikato</option>
                    <option value='Gisbourne'>Gisbourne</option>
                    <option value='Hawkes Bay'>Hawkes Bay</option>
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
              </div>
              <div className='form-group col-md-2'>
                <label htmlFor='inputPostal'>Postal</label>
                <input type='text' className='form-control' id='inputPostal'
                  onChange={this.handleChange} value={this.state.postal} />
              </div>

              <input type='hidden' id='lat' name='lat'
                onChange={this.handleChange} value={this.state.lat} />
              <input type='hidden' id='lng' name='lng'
                onChange={this.handleChange} value={this.state.lng} />
            </div>

            <div className='form-row'>
              <div className='form-group col-md-3'>
                <label htmlFor='inputDateStart'>Date Start:</label>
                <DatePicker />
              </div>

              <div className='form-group col-md-3'>
                <label htmlFor='inputtimeStart'>Time Start:</label>
                <input type='text' className='form-control' id='inputtimeStart' name='timeStart' placeholder=''
                  onChange={this.handleChange} value={this.state.timeStart} required />
              </div>

              <div className='form-group col-md-3'>
                <label htmlFor='inputDateEnd'>Date End:</label>
                <DatePicker />
              </div>

              <div className='form-group col-md-3'>
                <label htmlFor='inputtimeEnd'>Time End:</label>
                <input type='text' className='form-control' id='inputtimeEnd' name='timeEnd' placeholder=''
                  onChange={this.handleChange} value={this.state.timeEnd} required />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='inputimage'>Event Image:</label>
              <div className='input-group mb-3'>
                <div className='custom-file'>
                  <input type='file' className='custom-file-input' id='inputGroupFile01' aria-describedby='inputGroupFileAddon01' />
                  <label className='custom-file-label' htmlFor='inputGroupFile01'>Choose file</label>
                </div>
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='inputDescription'>Description:</label>
              <textarea className='form-control' id='inputDescription' rows='3'
                onChange={this.handleChange} value={this.state.description} />
            </div>

            <div className='form-group'>
              <label htmlFor='inputOrganiser'>Organised By:</label>
              <input id='inputOrganiser' className='form-control' name='organiser' placeholder='Who is responsible for this event...'
                onChange={this.handleChange} value={this.state.organiser} />
            </div>

            <div className='form-group'>
              <label htmlFor='organiserDescription'>Organiser Description:</label>
              <textarea id='organiserDescription' className='form-control' name='organiserDescription' rows='3'
                onChange={this.handleChange} value={this.state.organiserDescription} />
            </div>

            <div className='form-group'>
              <label htmlFor='imputLinks'>Links (Facebook/Twitter):</label>
              <input id='imputLinks' className='form-control' name='website' placeholder=''
                onChange={this.handleChange} value={this.state.website} />
            </div>

            <h3 className='section-label'>2. Ticketing and Access</h3>

            <div className='form-group'>
              <label htmlFor='inputAccess'>Access:</label>
              <select id='inputAccess' className='custom-select' name='access'>
                <option defaultValue>Choose ticket access...</option>
                <option value='Free Event'>Free Event</option>
                <option value='Door Sales'>Door Sales</option>
                <option value='Online Tickets'>Online Tickets</option>
                <option value='Online Tickets and Door Sales Available'>Online Tickets and Door Sales Available</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='inputTickets'>Tickets purchased here:</label>
              <input className='form-control' id='inputTickets' placeholder='http://tickets-here.example.com'
                onChange={this.handleChange} value={this.state.tickets} />
            </div>

            <div className='form-group'>
              <label htmlFor='inputRestrictions'>Event Restrictions: </label>
              <select id='inputRestrictions' className='custom-select' name='restrictions'>
                <option defaultValue>Choose an age rating...</option>
                <option value='All Ages'>All Ages</option>
                <option value='R18'>R18</option>
                <option value='R21'>R21</option>
              </select>
            </div>

            <h3 className='section-label'>3. Additional Details</h3>

            <div className='form-group'>
              <label htmlFor='inputEventType'>Event Type:</label>
              <select id='inputEventType' className='custom-select' name='eventType'>
                <option defaultValue>Choose an event type...</option>
                <option value='1'>Publically Hosted</option>
                <option value='2'>Individually Hosted</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='inputEventCategory'>Event Category:</label>
              <select id='inputEventCategory' className='custom-select' name='eventCategory'>
                <option defaultValue>Choose an event category...</option>
                <option value='Concerts'>Concerts</option>
                <option value='Gigs'>Gigs</option>
                <option value='Festivals'>Festivals</option>
                <option value='Art'>Art</option>
                <option value='Theatre'>Theatre</option>
                <option value='Food'>Food</option>
                <option value='Markets'>Markets</option>
                <option value='City Pop Ups'>City Pop Ups</option>
                <option value='Community'>Community</option>
                <option value='Sports and Outdoors'>Sports and Outdoors</option>
              </select>
            </div>

            <button className='btn btn-primary mb-2' type='submit' onClick={this.handleSubmit}>Submit Event</button>

          </fieldset>
        </form>
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
