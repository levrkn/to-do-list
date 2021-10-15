import React from "react";
import { ToDoCardType } from "../../../types/types";
import "./ToDoCard.scss";

const ToDoCard: React.FC<ToDoCardType> = (props: ToDoCardType) => {
  return (
    <div className="toDo__card">
      <p className="toDo__card__title">{props.title}</p>
      <p className="toDo__card__text">{props.text}</p>
      <p className="toDo__card__text">{props.date}</p>
      <span className="toDo__card__delete" onClick={props.removeToDo}></span>
      <span className="toDo__card__edit" onClick={props.editToDO}></span>
    </div>
  );
};

export default ToDoCard;
