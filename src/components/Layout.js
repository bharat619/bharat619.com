import React from "react";

import "normalize.css";
import Nav from "./Nav";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Footer from "./Footer";

const ContentStyle = styled.div`
  margin: 0px auto;
  max-width: 800px;
`;

const AppContainer = styled.div`
  background: ${(props) => `url(${props.img})`} no-repeat top center;
`;

export default function Layout({ children, location }) {
  return (
    <AppContainer>
      <GlobalStyles></GlobalStyles>
      <Nav></Nav>
      <ContentStyle>{children}</ContentStyle>
      <Footer></Footer>
    </AppContainer>
  );
}
