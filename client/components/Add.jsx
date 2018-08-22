import React from 'react'

const Add = () => {
  return (
    <div>
      <h1>Add</h1>



      <div>
        <h4>Please select the most relevent Category.</h4>
        {/* <select name='typeSelector' onChange={this.handleTypeSelect}> */}
          {/* {this.props.addTypes.map(interestType => (
            <option key={interestType.type_id}>{interestType.name}</option>
          )
          )} */}
        {/* </select> */}
      </div>
      <div>
        Event Name: <br />
        <input name='event' placeholder=''  />
        <br />
        Date: <br />
        <input name='date' placeholder=''  />
        <br />
        Location: <br />
        <input name='location' placeholder=''  />
        <br />
        Address: <br />
        <input name='address' placeholder=''  />
        <br />
        Time: <br />
        <input name='time' placeholder=''  />
        <br />
        Tickets: <br />
        <input name='tickets' placeholder=''  />
        <br />
        Website: <br />
        <input name='website' placeholder=''  />
        <br />
        Blurb: <br />
        <input name='blurb' placeholder=''  />
        <br />
        {/* <button type='submit' onClick={this.handleClick}>Submit Event</button> */}
      </div>
      <br />
      <br />
    </div>
  )
}


export default Add
