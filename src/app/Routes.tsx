import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateToDo from '../pages/CreateToDo/CreateToDo'
import EditToDo from '../pages/EditToDo/EditToDo'
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
        <Route
          path="/edit/:id"
          component={EditToDo}
          exact
        />
      </Switch>
    </>
  )
}

export default router
