import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const KenshinTodo = ({ todoTask, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p>{todoTask.todoTask}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todoTask.tId)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(todoTask.tId)}
        />
      </div>
    </div>
  );
};

export default KenshinTodo;
