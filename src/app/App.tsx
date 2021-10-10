import React, { FC, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '../assets/styles/index.scss'
import { useAppDispatch } from '../state/hooks'
import Routes from './Routes'

const App: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('s') || '[]').length === 0) {
      localStorage.setItem('s', JSON.stringify([]))
    }
    dispatch({ type: 'localsave', payload: JSON.parse(localStorage.getItem('s') || '[]') })
  })

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
