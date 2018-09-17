import React from 'react'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment'


class DatePicker extends React.Component {
  constructor() {
    super()
    this.state = {
      dateStart: '',
      dateEnd: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Please select start date:</p>
        {this.state.dateStart && <p>Day: {this.state.dateStart.toLocaleDateString()}</p>}
        {!this.state.dateStart && <p>Choose a day</p>}
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format="LL"
          placeholder={`${formatDate(new Date(), 'LL', 'en')}`}
          dayPickerProps={{
            locale: 'en',
            localeUtils: MomentLocaleUtils,
          }}
          onChange={this.handleChange} />
      </div >
    )
  }
}

export default DatePicker