import moment from 'moment'
import React from 'react'
import ToDoForm from '../../shared/components/Form/ToDoForm'
import { saveToDo } from '../../state/actions/ToDoAction'
import { useAppDispatch } from '../../state/hooks'
import { ToDo } from '../../types/types'
import './CreateToDo'

const CreateToDo: React.FC = () => {
  const dispatch = useAppDispatch()

  // const { handleSubmit, control } = useForm({
  //   defaultValues: {
  //     title: "",
  //     text: "",
  //     date: new Date()
  //   },
  //   mode: "onBlur"
  // });

  const onSubmit = (values: ToDo) => {
    const item = {
      ...values,
      date: moment(values.date).format("MM-DD-YYYY"),
      id: Date.now(),
    };
    saveToDo(
      "save",
      [...JSON.parse(localStorage.getItem("s") || "{}"), item],
      item
    )(dispatch);
  }

  return (
    <>
      <ToDoForm onSubmit={onSubmit} />
    </>
  )
}

export default CreateToDo
