import React from 'react'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

  const { children, ...rest } = props;

  return (
    <button className="button__root" {...rest}>
      <span>{children}</span>
    </button>
  )
}

export default Button
