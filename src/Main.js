import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();

  const goTodo = () => {
    navigate("/todo");
  };

  return <div>Main</div>;
};

export default Main;
