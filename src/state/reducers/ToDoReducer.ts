const ToDoReducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case "save":
      return [...state, action.payload];
    case "edit":
      return [...state.filter((el:any) => el.id !== action.payload.id), action.payload];
    case "localsave":
      return [...action.payload];

    default:
      return state;
  }
};

export default ToDoReducer;
