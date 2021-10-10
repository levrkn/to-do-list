import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../shared/components/Button/Button";
import DatePicker from "../../shared/components/DatePicker/DatePicker";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import ToDoCard from "./ToDoCard/ToDoCard";
import "./ToDoList.scss";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import Form from "../../shared/components/Form/Form";

const ToDoList = () => {
  const toDo = useAppSelector((state: RootState) => state.ToDO);
  const history = useHistory();
  const { control } = useForm();
  const [state, setstate] = useState(moment(new Date()).format("DD-MM-YYYY"));
  const dispatch = useDispatch();

  const toDoFilter = (date: any) => {
    setstate(moment(date).format("DD-MM-YYYY"));
  };

  const remvoeToDo = (id: number) => {
    localStorage.setItem(
      "s",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("s") || "[]").filter(
          (el: any) => el.id !== id
        ),
      ])
    );
    dispatch({
      type: "localsave",
      payload: JSON.parse(localStorage.getItem("s") || "[]"),
    });
  };

  return (
    <div className="toDoList__root">
      <Form />
      <DatePicker control={control} mark={toDo} onChange={toDoFilter} />
      <Button onClick={(e) => history.push("/create")}>Добавить</Button>
      <div className="toDo__list">
        {toDo
          .filter((el: any) => el.date === state)
          .map((el: any) => (
            <ToDoCard
              key={el.id}
              title={el.title}
              text={el.text}
              date={el.date}
              removeToDo={(e: any) => remvoeToDo(el.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
