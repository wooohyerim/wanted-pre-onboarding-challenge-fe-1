import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const navigate = useNavigate();

  const handleInputId = (e) => {
    setUserId(e.target.value);
  };
  const handleInputPw = (e) => {
    setUserPw(e.target.value);
  };

  const isValid =
    userId.includes("@") && userId.includes(".") && userPw.length >= 8;

  const goTodo = (e) => {
    // e.preventDefault();
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
        } else {
          alert("토큰이 유효하지 않습니다.");
          navigate("/");
        }
      });
    navigate("/todo");
  };

  return (
    <div>
      <Box>
        <input
          type="text"
          name="userId"
          placeholder="email"
          onChange={handleInputId}
        ></input>
        <input
          type="password"
          name="userPw"
          placeholder="password"
          onChange={handleInputPw}
        ></input>
        <button
          type="button"
          onClick={goTodo}
          disabled={isValid ? false : true}
        >
          제출
        </button>
      </Box>
    </div>
  );
};

export default Login;

const Box = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 100px;
  margin: 50px auto;
`;
