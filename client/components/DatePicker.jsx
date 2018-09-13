import React from 'react'

import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment'

import 'moment/locale/it'

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.state = {
      selectedDays: [],
    }
  }

  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day))
      selectedDays.splice(selectedIndex, 1)
    } else {
      selectedDays.push(day)
    }
    this.setState({
      selectedDays
    })
  }

  render() {
    const FORMAT = 'DD/MM/YYYY'
    return (
      <div>
        <p>Select day(s) event occurs:</p>
        <DayPicker
          formatDate={formatDate}
          format={FORMAT}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date(), FORMAT)}`}
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick} />
      </div>
    )
  }
}