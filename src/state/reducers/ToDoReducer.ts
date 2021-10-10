

const ToDoReducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case 'save':
      return [...state, action.payload]
    case 'localsave':
      return [...action.payload]

    default:
      return state
  }
}

export default ToDoReducer
