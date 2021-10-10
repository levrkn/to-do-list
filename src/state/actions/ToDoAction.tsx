export const saveToDo = (type: any, localsave: any, payload: any ) => {
  return (dispatch: any) => {
    localStorage.setItem('s', JSON.stringify(localsave))
    dispatch({ type: type, payload: payload  })
  }
}

