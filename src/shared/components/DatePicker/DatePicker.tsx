import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useController } from 'react-hook-form'
import './DatePicker.scss'


const DatePicker = (props: any) => {
  
  const { field } = useController(props)

  return (
    <Calendar
      locale="ru-RU"
      tileClassName={({ date }) => {
        const dateFormating = (el: any) => moment(el).format("DD-MM-YYYY")
        if (props.mark) {
          if ([...props.mark].find((x: any) => x.date === dateFormating(date) && x.date >= dateFormating(new Date()))) {
            return 'highlight'
          }
        }
        return ''
      }}
      minDate={new Date()}
      {...field}
      {...props}
    />
  )
}

export default DatePicker

