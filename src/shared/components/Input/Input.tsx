import React from 'react'
import { useController } from 'react-hook-form'
import './Input.scss'

const Input = (props: any) => {

  const { field } = useController(props);

  return (
    <>
      <div className="form__group field">
        <input className="form__field" placeholder={props.name} id={props.name} autoComplete="off" {...field} required />
        <label htmlFor={props.name} className="form__label">{props.name}</label>
      </div>
    </>


  )
}

export default Input
