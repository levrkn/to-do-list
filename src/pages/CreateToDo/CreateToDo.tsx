import moment from "moment";
import React from "react";
import { useHistory } from "react-router";
import ToDoForm from "../../shared/components/Form/ToDoForm";
import { saveToDo } from "../../state/actions/ToDoAction";
import { useAppDispatch } from "../../state/hooks";
import { ToDoType } from "../../types/types";
import "./CreateToDo";

const CreateToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onSubmit = (values: ToDoType) => {
    const item: ToDoType = {
      ...values,
      date: moment(values.date).format("MM-DD-YYYY"),
      id: Date.now(),
    };
    saveToDo(
      "save",
      [...JSON.parse(localStorage.getItem("s") || "{}"), item],
      item
    )(dispatch);
  };

  return (
    <>
      <ToDoForm
        onSubmit={onSubmit}
        promise1={(e) => {history.push("/"); history.push("/create")}}
        button="создать"
        alert1="Вы успешно создали событие"
      />
    </>
  );
};

export default CreateToDo;
