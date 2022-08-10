import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

// 수정 버튼 누르면 박스 모달창 활성화되면서 완료 버튼 생성
// 내용 입력되게 하고
// 완료 버튼에 패치

const Todolist = ({ todo, todoList, setTodoList }) => {
  const { title, content } = todo;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textValue, setTextValue] = useState({ title: "", content: "" });

  const onchangeInput = (e) => {
    const { value, name } = e.target;
    setTextValue({ ...textValue, [name]: value });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const deleteTodo = () => {
    fetch(`http://localhost:8080/todos/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const updateTodo = () => {
    fetch(`http://localhost:8080/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: textValue.title,
        content: textValue.content,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <div>
        <ListBox>
          <InnerBox>
            <InnerText>
              <h4>{title}</h4>
              <p>{content}</p>
            </InnerText>
          </InnerBox>
          <InnerButton type="button" onClick={deleteTodo}>
            X
          </InnerButton>
          <InnerButton type="button" onClick={openModal}>
            수정
          </InnerButton>
        </ListBox>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: "50px",
            left: "50%",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "200px",
            height: "300px",
          },
        }}
      >
        <input
          type="text"
          placeholder="제목 변경"
          onChange={onchangeInput}
          name="title"
          value={textValue.title}
        />
        <ModalInput
          type="text"
          placeholder="내용 변경"
          onChange={onchangeInput}
          name="content"
          value={textValue.content}
        />
        <button type="button" onClick={updateTodo}>
          완료
        </button>
        <button type="button" onClick={() => setModalIsOpen(false)}>
          닫기
        </button>
      </ReactModal>
    </>
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
  width: 350px;
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
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px;
  font-size: 10px;
`;

const ModalInput = styled.input`
  height: 200px;
`;
