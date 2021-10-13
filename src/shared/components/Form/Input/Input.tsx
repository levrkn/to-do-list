import React from 'react'
import './Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props: InputProps) => {

  return (
    <>
        <input className="form__field" placeholder={props.name} id={props.name} autoComplete="off" type="textarea" {...props} />
        <label htmlFor={props.name} className="form__label">{props.name}</label>
    </>


  )
}

export default Input
