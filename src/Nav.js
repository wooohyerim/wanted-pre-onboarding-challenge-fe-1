import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToMain = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goTodo = () => {
    navigate("/todo");
  };

  const goToJoin = () => {
    navigate("/signup");
  };

  return (
    <Box>
      <button type="button" onClick={goToMain}>
        Home
      </button>
      {localStorage.getItem("token") ? (
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
            location.reload();
          }}
        >
          logout
        </button>
      ) : (
        <>
          <button type="button" onClick={goToLogin}>
            Login
          </button>
          <button type="button" onClick={goToJoin}>
            Join
          </button>
        </>
      )}
      <button type="button" onClick={goTodo}>
        TODO LIST
      </button>
    </Box>
  );
};

export default Nav;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
