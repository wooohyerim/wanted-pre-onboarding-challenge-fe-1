import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Todolist = ({ todo, todoList, setTodoList }) => {
  const { title, content } = todo;

  const deleteTodo = () => {
    let del = [...todoList];
    del.splice(todo.id, 1);
    setTodoList(del);
  };
  //   fetch("http://localhost:8080/todos/:id", {
  //     method: "DELETE",
  //     headers: { Authorization: localStorage.getItem("token") },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setTodoList(res.filter((el) => el.id !== todoList.id)));
  // };

  return (
    <div>
      <ListBox>
        <InnerBox>
          <InnerText>
            <p>{title}</p>
            <p>{content}</p>
          </InnerText>
        </InnerBox>
        <InnerButton type="button" onClick={deleteTodo}>
          X
        </InnerButton>
        <InnerButton type="button">수정</InnerButton>
      </ListBox>
    </div>
  );
};

export default Todolist;

const ListBox = styled.div`
  height: auto;
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: auto;
`;

const InnerText = styled.div`
  width: 300px;
  height: auto;
  margin-right: 20px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  box-sizing: border-box;
`;

const InnerButton = styled.button`
  width: 40px;
  padding: 5px;
  font-size: 10px;
`;
