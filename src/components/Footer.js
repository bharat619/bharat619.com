import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";

const FooterStyle = styled.div`
  background: var(--black);
  color: white;
  display: grid;
  grid-template-rows: 1fr auto;

  .trademark {
    font-family: monospace;
    margin-top: 8rem;
    justify-self: center;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <SocialMedia></SocialMedia>
      <div className="trademark">Bharat Hegde © 2020</div>
    </FooterStyle>
  );
}
