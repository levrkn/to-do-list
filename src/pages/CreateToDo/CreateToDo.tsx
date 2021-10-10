import moment from 'moment'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Button from '../../shared/components/Button/Button'
import DatePicker from '../../shared/components/DatePicker/DatePicker'
import Input from '../../shared/components/Input/Input'
import { saveToDo } from '../../state/actions/ToDoAction'
import { useAppDispatch } from '../../state/hooks'
import { ToDO } from '../../types/types'
import './CreateToDo'

const CreateToDo: React.FC = () => {

  const history = useHistory()
  const dispatch = useAppDispatch()

  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: "",
      text: "",
      date: new Date()
    },
    mode: "onBlur"
  });

  const onSubmit = (e: ToDO) => {
    const item = { ...e, date: moment(e.date).format("DD-MM-YYYY"), id: Date.now() }
    saveToDo('save', [...JSON.parse(localStorage.getItem('s') || '{}'), item], item )(dispatch)
  }

  const cancel = () => {
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DatePicker control={control} name="date" rules={{ required: false }} />
      <Input control={control} name="title" rules={{ required: true }} />
      <Input control={control} name="text" rules={{ required: true }} />
      <Button onClick={cancel}>Отмена</Button>
      <Button type="submit">Создать</Button>
    </form>
  )
}

export default CreateToDo
