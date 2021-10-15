import React, { FC, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '../assets/styles/index.scss'
import { useAppDispatch } from '../state/hooks'
import { ToDoTypes } from '../state/reducers/ToDoReducer'
import Routes from './Routes'

const App: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('s') || '[]').length === 0) {
      localStorage.setItem('s', JSON.stringify([]))
    }
    dispatch({ type: ToDoTypes.localsave, payload: JSON.parse(localStorage.getItem('s') || '[]') })
  })

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
