import React from "react";
import Button from "../../shared/components/Button/Button";
import DatePicker from "../../shared/components/DatePicker/DatePicker";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../../state/store";
import ToDoCard from "./ToDoCard/ToDoCard";
import "./ToDoList.scss";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { ToDoType } from "../../types/types";

const ToDoList: React.FC = () => {
  const toDo: ToDoType[] = useAppSelector((state: RootState) => state.ToDO);
  const history = useHistory();
  const [selectedDate, setSelectedDate] = React.useState(moment(new Date()).format("MM-DD-YYYY"));
  const dispatch = useDispatch();

  const toDoFilter = (date: Date) => {
    setSelectedDate(moment(date).format("MM-DD-YYYY"));
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
      <DatePicker mark={toDo} onChange={toDoFilter} />
      <Button onClick={(e) => history.push("/create")}>Добавить</Button>
      <div className="toDo__list">
        {toDo
          .filter((el: ToDoType) => el.date === selectedDate)
          .map((el: ToDoType) => (
            <ToDoCard
              key={el.id}
              title={el.title}
              text={el.text}
              date={el.date}
              removeToDo={(e) => remvoeToDo(el.id)}
              editToDO={(e) => history.push(`/edit/${el.id}`)}
            />
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
