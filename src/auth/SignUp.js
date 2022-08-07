import React, { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleInputId = (e) => {
    setUserId(e.target.value);
  };
  const handleInputPw = (e) => {
    setUserPw(e.target.value);
  };

  const isValid =
    userId.includes("@") && userId.includes(".") && userPw.length >= 8;

  const goTo = (e) => {
    // e.preventDefault();
    fetch("http://localhost:8080/users/create", {
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
      .then((res) => console.log(res));
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
        <button type="button" onClick={goTo} disabled={isValid ? false : true}>
          제출
        </button>
      </Box>
    </div>
  );
};

export default SignUp;

const Box = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 100px;
  margin: 50px auto;
`;
