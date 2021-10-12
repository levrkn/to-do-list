import moment from "moment";
import React from "react";
import { useParams } from "react-router";
import ToDoForm from "../../shared/components/Form/ToDoForm";
import { saveToDo } from "../../state/actions/ToDoAction";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import { ToDo } from "../../types/types";

const EditToDo = () => {
  const dispatch = useAppDispatch();
  const params: any = useParams();
  const currentToDo: ToDo = useAppSelector(
    (state: RootState) =>
      state.ToDO.filter((el: ToDo) => el.id === Number(params.id))[0]
  );

  const onSubmit = (values: ToDo) => {
    const item = {
      ...values,
      date: moment(values.date).format("MM-DD-YYYY"),
      id: currentToDo.id,
    };
    saveToDo(
      "edit",
      [
        ...JSON.parse(localStorage.getItem("s") || "[]").filter(
          (el: any) => el.id !== item.id
        ),
        item,
      ],
      item
    )(dispatch);
  };

  const dater = (a: any, b: any) => Number(currentToDo.date.slice(a, b));

  return (
    <>
      {currentToDo ? (
        <ToDoForm
          onSubmit={onSubmit}
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
