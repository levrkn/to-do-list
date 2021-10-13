import moment from "moment";
import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ToDoForm from "../../shared/components/Form/ToDoForm";
import { saveToDo } from "../../state/actions/ToDoAction";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import { ToDoType } from "../../types/types";

const EditToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const params: {id: string} = useParams();
  const history = useHistory();
  const currentToDo: ToDoType = useAppSelector(
    (state: RootState) =>
      state.ToDO.filter((el: ToDoType) => el.id === Number(params.id))[0]
  );

  const onSubmit = (values: ToDoType) => {
    const item: ToDoType = {
      ...values,
      date: moment(values.date).format("MM-DD-YYYY"),
      id: currentToDo.id,
    };
    saveToDo(
      "edit",
      [
        ...JSON.parse(localStorage.getItem("s") || "[]").filter(
          (el: ToDoType) => el.id !== item.id
        ),
        item,
      ],
      item
    )(dispatch);
  };

  const dater = (a: number, b: number) => Number(currentToDo.date.slice(a, b));

  return (
    <>
      {currentToDo ? (
        <ToDoForm
          onSubmit={onSubmit}
          button="Сохранить"
          alert1="Вы успешно изменили событие"
          promise1={(e) => {history.push("/")}}
          defaultTitle={currentToDo.title}
          defaultText={currentToDo.text}
          defaultDate={new Date(dater(6, 10), dater(0, 2) - 1, dater(3, 5))}
        />
      ) : (
        console.log(currentToDo)
      )}
    </>
  );
};

export default EditToDo;
