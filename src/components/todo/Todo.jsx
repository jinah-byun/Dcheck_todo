import React, { useState } from "react";
import "./style.css";

function Todo({ work, handleRemove, handleshift }) {
  return (
    <div className="todo-container">
      <div className="todo-title">{work.title}</div>
      <div className="todo-body">{work.body}</div>
      <div className="button-set">
        <button
          className="todo-delete-button"
          onClick={() => {
            handleRemove(work.id);
          }}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={() => {
            handleshift(work.id);
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}
export default Todo;
