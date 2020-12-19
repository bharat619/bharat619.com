import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      {children}
    </>
  );
}
