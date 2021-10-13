export type ToDoType = {
  id: number
  date: string
  title: string
  text: string
}

export type ToDoCardType = {
  date: string
  title: string
  text: string
  removeToDo: (e: any) => void
  editToDO: (e: any) => void
}

export type ToDoFormType = {
  onSubmit: (e: any) => void
  promise1: (e: void) => void
  alert1: string
  button: string
  defaultTitle?: string
  defaultText?: string
  defaultDate?: Date
}



