import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './DatePicker.scss'


const DatePicker = (props: any) => {

  return (
    <Calendar
      locale="ru-RU"
      tileClassName={({ date }) => {
        const dateFormating = (el: any) => moment(el).format("MM-DD-YYYY")
        if (props.mark) {
          if ([...props.mark].find((x: any) => x.date === dateFormating(date) && x.date >= dateFormating(new Date()))) {
            return 'highlight'
          }
        }
        return ''
      }}
      minDate={new Date()}
      {...props}
    />
  )
}

export default DatePicker

