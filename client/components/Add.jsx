import React from 'react'

const Add = () => {
  return (
    <div>
      <h1>Add</h1>

      <div>
        <h4>Please select the most relevent Category.</h4>
        <select name='typeSelector' onChange={this.handleTypeSelect}>
          {this.props.addTypes.map(interestType => (
            <option key={interestType.type_id}>{interestType.name}</option>
          )
          )}
        </select>
      </div>
      <div>
        Event Name: <br />
        <input name='event' placeholder='' onChange={this.handleChange} />
        <br />
        Date: <br />
        <input name='date' placeholder='' onChange={this.handleChange} />
        <br />
        Location: <br />
        <input name='location' placeholder='' onChange={this.handleChange} />
        <br />
        Address: <br />
        <input name='address' placeholder='' onChange={this.handleChange} />
        <br />
        Time: <br />
        <input name='time' placeholder='' onChange={this.handleChange} />
        <br />
        Tickets: <br />
        <input name='tickets' placeholder='' onChange={this.handleChange} />
        <br />
        Website: <br />
        <input name='website' placeholder='' onChange={this.handleChange} />
        <br />
        Blurb: <br />
        <input name='blurb' placeholder='' onChange={this.handleChange} />
        <br />
        <button type='submit' onClick={this.handleClick}>Submit Event</button>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Add
