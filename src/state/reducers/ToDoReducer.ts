

export enum ToDoTypes {
  save = "save",
  edit = "edit",
  localsave = "localsave",
}

const ToDoReducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case ToDoTypes.save:
      return [...state, action.payload];
    case ToDoTypes.edit:
      return [...state.filter((el:any) => el.id !== action.payload.id), action.payload];
    case ToDoTypes.localsave:
      return [...action.payload];

    default:
      return state;
  }
};

export default ToDoReducer;
