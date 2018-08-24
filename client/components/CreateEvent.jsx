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

        <form>
          <label>
            Event Name: <br />
            <input name='eventName' placeholder='' />
          </label>
          <br />
          <label>
            Venue Name: <br />
            <input name='venueName' placeholder='' />
          </label>
          <br />
          <label>
            Venue Address: <br />
            <input name='venueAddress' placeholder='' />
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
            Town/Suburb: <br />
            <input name='townSuburb' placeholder='' />
          </label>
          <br />
          <label>
            Date Start: <br />
            <input name='dateStart' placeholder='' />
          </label>
          <br />
          <label>
            Time Start: <br />
            <input name='timeStart' placeholder='' />
          </label>
          <br />
          <label>
            Date End: <br />
            <input name='dateEnd' placeholder='' />
          </label>
          <br />
          <label>
            Time End: <br />
            <input name='timeEnd' placeholder='' />
          </label>
          <br />
          <label>
            Event Image: <br />
            <input type='file' name='image' placeholder='' />
          </label>
          <br />
          <label>
            Description: <br />
            <input name='description' placeholder='' />
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
            <input name='tickets' placeholder='' />
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
            <input name='organiser' placeholder='' />
          </label>
          <br />
          <label>
            Organiser Description: <br />
            <input name='organiserDescription' placeholder='' />
          </label>
          <br />
          <label>
            Links (Facebook/Twitter): <br />
            <input name='website' placeholder='' />
          </label>
          <br />
          <label>
            Event Type: <br />
            <input name='eventType' placeholder='' />
          </label>
          <br />
          <label>
            Event Category: <br />
            <input name='eventCategory' placeholder='' />
          </label>
          <br />
          <br />
          <button type='submit' onClick={this.handleClick}>Submit Event</button>
        </form>
        <br />
        <br />
      </div >
    )
  }
}


export default CreateEvent
