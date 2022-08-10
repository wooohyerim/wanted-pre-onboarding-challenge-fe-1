import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import styled from "styled-components";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);

ReactModal.setAppElement("#root");
