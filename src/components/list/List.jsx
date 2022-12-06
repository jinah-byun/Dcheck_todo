import React, { useState } from "react";
import Todo from "../todo/Todo";
import "./style.css";

function Custombutton({ work, handleshift }) {
  if (work.isDone === false) {
    return (
      <button
        className="todo-complete-button"
        onClick={() => {
          handleshift(work.id);
        }}
      >
        완료
      </button>
    );
  } else {
    return (
      <button
        className="todo-cancle-button"
        onClick={() => {
          handleshift(work.id);
        }}
      >
        취소
      </button>
    );
  }
}

function List({ works, setWorks }) {
  const removeWorkHandler = (id) => {
    const newWorkList = works.filter((work) => work.id !== id);
    setWorks(newWorkList);
  };
  const shiftWorkHandler = (id) => {
    const findIndex = works.findIndex((work) => work.id === id);
    let copyWorks = [...works];
    if (findIndex !== -1) {
      if (copyWorks[findIndex].isDone === false) {
        copyWorks[findIndex] = { ...copyWorks[findIndex], isDone: true };
      } else {
        copyWorks[findIndex] = { ...copyWorks[findIndex], isDone: false };
      }
    }
    setWorks([...copyWorks]);
  };

  return (
    <div className="list-container">
      <div className="under-title">Working.. 🔥</div>
      <div className="list-wrapper">
        {works
          .filter((work) => {
            return work.isDone === false;
          })
          .map((work) => {
            return (
              <Todo
                work={work}
                key={work.id}
                handleRemove={removeWorkHandler}
                handleshift={shiftWorkHandler}
              />
            );
          })}
      </div>
      <div className="under-title">Done..! 🎉</div>
      <div className="list-wrapper">
        {works
          .filter((work) => {
            return work.isDone === true;
          })
          .map((work) => {
            return (
              <Todo
                work={work}
                key={work.id}
                handleRemove={removeWorkHandler}
                handleshift={shiftWorkHandler}
              />
            );
          })}
      </div>
    </div>
  );
}

export default List;
