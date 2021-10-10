import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateToDo from '../pages/CreateToDo/CreateToDo'
import ToDoList from '../pages/ToDoList/ToDoList'

const router = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          component={ToDoList}
          exact
        />
        <Route
          path="/create"
          component={CreateToDo}
          exact
        />
      </Switch>
    </>
  )
}

export default router
