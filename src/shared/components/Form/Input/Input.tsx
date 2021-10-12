import React from 'react'
import './Input.scss'

const Input = (rest: any) => {

  return (
    <>
        <input className="form__field" placeholder={rest.name} id={rest.name} autoComplete="off" {...rest} />
        <label htmlFor={rest.name} className="form__label">{rest.name}</label>
    </>


  )
}

export default Input
