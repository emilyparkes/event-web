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
      submitted: ''
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
    if (this.props.message === 'Registration successful') {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div>
        {this.props.message && <span className='error'>
          {this.props.message}</span>}

        {/* <select name='typeSelector' onChange={this.handleTypeSelect}> */}
        {/* {this.props.addTypes.map(interestType => (
            <option key={interestType.type_id}>{interestType.name}</option>
          )
          )} */}
        {/* </select> */}

        <form method='post'>
          <fieldset>
            <h2>Create Event</h2>

            <label htmlFor='name'>Event Name: </label>
            <br />
            <input id='eventName' name='eventName' placeholder='Give it a short distinct name'
              onChange={this.handleChange} value={this.state.eventName} required />
            <br />

            <label htmlFor='venueName'>Venue Name: </label>
            <br />
            <input id='venueName' name='venueName' placeholder='Enter the venue name'
              onChange={this.handleChange} value={this.state.venueName} required />
            <br />

            <label htmlFor='venueAddress'>Venue Address: </label>
            <br />
            <input id='venueAddress' name='venueAddress' placeholder='Address Line 1'
              onChange={this.handleChange} value={this.state.venueAddress} required />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>
            <br />
            <input id='townSuburb' name='townSuburb' placeholder='Address Line 2'
              onChange={this.handleChange} value={this.state.townSuburb} required />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Region: <br />
            <select id='eventName' name='region'>
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
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Date Start: <br />
            <input id='eventName' name='dateStart' placeholder=''
              onChange={this.handleChange} value={this.state.dateStart} />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Time Start: <br />
            <input id='eventName' name='timeStart' placeholder=''
              onChange={this.handleChange} value={this.state.timeStart} />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Date End: <br />
            <input id='eventName' name='dateEnd' placeholder=''
              onChange={this.handleChange} value={this.state.dateEnd} />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Time End: <br />
            <input id='eventName' name='timeEnd' placeholder=''
              onChange={this.handleChange} value={this.state.timeEnd} />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Event Image: <br />
            <input id='eventName' type='file' name='image' placeholder=''
              onChange={this.handleChange} value={this.state.image} />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Description: <br />
            <input id='eventName' name='description' placeholder=''
              onChange={this.handleChange} value={this.state.description} />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Access: <br />
            <select id='eventName' name='access'>
              <option value='Free Event'>Free Event</option>
              <option value='Door Sales'>Door Sales</option>
              <option value='Online Tickets'>Online Tickets</option>
              <option value='Online Tickets and Door Sales Available'>Online Tickets and Door Sales Available</option>
            </select>
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Tickets purchased here: <br />
            <input id='eventName' name='tickets' placeholder=''
              onChange={this.handleChange} value={this.state.tickets} />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Ticket Restrictions: <br />
            <select id='eventName' name='restrictions'>
              <option value='all ages'>All Ages</option>
              <option value='R18'>R18</option>
              <option value='R21'>R21</option>
            </select>
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Organised By: <br />
            <input id='eventName' name='organiser' placeholder='Who is responsible for this event'
              onChange={this.handleChange} value={this.state.organiser} />
            <br />

            Organiser Description: <br />
            <input id='eventName' name='organiserDescription' placeholder=''
              onChange={this.handleChange} value={this.state.organiserDescription} />
            <br />

            <label htmlFor='townSuburb'>Town/Suburb:  </label>Links (Facebook/Twitter): <br />
            <input id='eventName' name='website' placeholder=''
              onChange={this.handleChange} value={this.state.website} />

            <br />

            <label htmlFor='eventType'>Event Type: </label><br />
            <input id='eventType' name='eventType' placeholder=''
              onChange={this.handleChange} value={this.state.eventType} />
            <br />

            <label htmlFor='eventCategory'>Event Category:  </label>
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
