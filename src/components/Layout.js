import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "normalize.css";
import Nav from "./Nav";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const ContentStyle = styled.div`
  margin: 0px auto;
  max-width: 800px;
`;

const AppContainer = styled.div`
  background: ${(props) => `url(${props.img})`} no-repeat top center;
`;

export default function Layout({ children, location }) {
  const data = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    `
  );

  // console.log(data.file.childImageSharp.original.src);
  return (
    <AppContainer>
      <GlobalStyles></GlobalStyles>
      <Nav></Nav>
      <ContentStyle>{children}</ContentStyle>
    </AppContainer>
  );
}
