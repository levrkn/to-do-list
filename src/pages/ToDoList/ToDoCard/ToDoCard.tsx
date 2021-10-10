import React from "react";
import "./ToDoCard.scss";

const ToDoCard = (props: any) => {
  return (
    <div className="toDo__card" key={props.id}>
      <p className="toDo__card__title">{props.title}</p>
      <p className="toDo__card__text">{props.text}</p>
      <p className="toDo__card__text">{props.date}</p>
      <div className="icon-expand">
        <i className="fa fa-bars"></i>
      </div>
      <span className="toDo__card__delete" onClick={props.removeToDo}></span>
      <span className="toDo__card__edit" onClick={props.editToDO}></span>
    </div>
  );
};

export default ToDoCard;
