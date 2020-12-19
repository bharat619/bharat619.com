import React from "react";
import styled, { keyframes } from "styled-components";

import whiteGrit from "./whiteGrit.png";
import blackGrit from "./blackGrit.png";

const HEADING_SIZE = {
  h1: 5,
  h2: 4,
  h3: 3,
  h4: 2.5,
  h5: 2,
  h6: 1.8,
  span: 3.2,
};

const animation = keyframes`
  from {
    background-position: 0;
  }

  to {
    background-position: -600px;
  }
`;

const HeaderStyle = styled.h1`
  font-size: ${HEADING_SIZE.h1}rem;
  font-size: ${({ as }) => as && `${HEADING_SIZE[as]}rem`};
  position: relative;
  transform: rotate(var(--rotate));

  &:after {
    position: absolute;
    z-index: 2;
    content: "";
    background: url(${whiteGrit});
    background-size: 700px;
    background-repeat: repeat;
    background-position: center;
  }

  span.grit {
    display: block;
    background: url(${blackGrit});
    background-size: 600px;
    width: 70%;
    ${(as) => (as === "span" ? `margin-right: 2rem` : "")};
    &:hover {
      transform: rotate(10deg);
      animation: ${animation} 2s steps(10) infinite;
    }

    &:before {
      width: 0.75em;
      height: 0.75em;
      content: "";
      background: var(--yellow);
      position: absolute;
      z-index: -10;
      --translate: -0.5rem;
      transform: translateX(var(--translate)) translateY(var(--translate))
        rotate(0deg);
      visibility: hidden;
    }

    &:hover:before {
      visibility: visible;
    }
  }

  a {
    color: inherit;
    text-decoration-color: var(--yellow);
  }

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export default function Header({ children }) {
  return (
    <HeaderStyle>
      <span className="grit">{children}</span>
    </HeaderStyle>
  );
}
