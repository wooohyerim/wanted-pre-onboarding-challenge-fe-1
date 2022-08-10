import React, { useState, useEffect } from "react";
import Todolist from "./Todolist";
import styled from "styled-components";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:8080/todos", {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((res) => setTodoList(res.data));
  }, []);

  const goToPost = () => {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <TodoBox>
        <Title>TODO LIST</Title>
        <TodoForm>
          <input
            type="text"
            placeholder="제목"
            name="title"
            onChange={onChangeTitle}
          />
          <input
            type="text"
            placeholder="내용"
            name="content"
            onChange={onChangeContent}
          />
          <button type="button" onClick={goToPost}>
            추가
          </button>
        </TodoForm>
        <InnerBox>
          {todoList.map((todo) => {
            return (
              <Todolist
                todo={todo}
                key={todo.id}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
        </InnerBox>
      </TodoBox>
    </>
  );
};

export default Todo;

const TodoBox = styled.div`
  width: 400px;
  height: auto;
  margin-top: 50px;
  margin-left: 20%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
`;

const TodoForm = styled.form`
  margin-left: 30px;
`;

const Title = styled.h3`
  text-align: center;
`;

const InnerBox = styled.div`
  width: 350px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  border-radius: 6px;
  box-sizing: border-box;
`;
