import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import GlobalStyles from "./styles/GlobalStyles";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Nav></Nav>
      {children}
    </>
  );
}
