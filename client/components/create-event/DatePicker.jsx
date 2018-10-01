import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment'
import 'moment/locale/it'

const FORMAT = 'DD/MM/YYYY'

class DatePicker extends React.Component {
  constructor() {
    super()
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
        <DayPickerInput
          formatDate={formatDate}
          format={FORMAT}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date(), FORMAT)}`}
          onDayChange={day => console.log(day)} />
      </div >
    )
  }
}

export default DatePicker