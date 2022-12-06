import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import List from "../components/list/List";
import Todo from "../components/todo/Todo";
import { useState } from "react";
import React from "react";

const TodoList = () => {
  const [works, setWorks] = useState([
    { id: 1, title: "입문주차", body: "props이해하기", isDone: false },
    { id: 2, title: "숙련주차", body: "리덕스이해하기", isDone: false },
  ]);
  return (
    <div>
      <Layout />
      <Form works={works} setWorks={setWorks} />
      <Header />
      <List works={works} setWorks={setWorks} />
      <Todo />
    </div>
  );
};

export default TodoList;
