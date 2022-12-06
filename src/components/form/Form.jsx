import React, { useState } from "react";
import "./style.css";

function Form({ works, setWorks }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addUserHandler = () => {
    const newWork = {
      id: works.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setWorks([...works, newWork]);
  };

  return (
    <div className="input-div">
      <div className="input-bar">
        <div className="input-title">제목</div>
        <input
          id="title-input"
          type="text"
          value={title}
          className="input-space"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="input-title">내용</div>
        <input
          id="body-input"
          type="text"
          value={body}
          className="input-space"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div>
        <button className="add-button" onClick={addUserHandler}>
          추가하기
        </button>
      </div>
    </div>
  );
}
export default Form;
