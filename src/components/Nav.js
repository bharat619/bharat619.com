import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import styled from "styled-components";
import Header from "./styles/Heading";
import pdf from '../static/resume.pdf'

const NavContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 1rem;
  .logo {
    width: 200px;
    height: 200px;
    justify-self: center;
    z-index: 1;
    margin-bottom: -3rem;
    transform: rotate(var(--rotate));
    &:hover {
      cursor: pointer;
      --rotate: 5deg;
    }
  }
`;

const Nav = styled.nav`
  ul {
    margin: 0;
    margin-top: -1rem;
    padding: 0;
    text-align: center;
    list-style: none;
    height: 100%;
    --columns: 4;
    @media (max-width: 300px) {
      --columns: 2;
    }
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    align-content: center;
    -webkit-box-shadow: 2px -8px 38px -20px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px -8px 38px -20px rgba(0, 0, 0, 0.75);
    box-shadow: 2px -8px 38px -20px rgba(0, 0, 0, 0.75);
    border-bottom: 5px solid var(--yellow);
    transform: rotate(-1deg);
  }

  li {
    transform: rotate(var(--rotate));
    order: 1;
    /* span {
      &:hover {
        --rotate: 5deg;
      }
    } */

    a {
      text-decoration: none;
      font-size: 3rem;
      font-weight: bold;
      color: var(--black);
    }
  }
`;

export default function () {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          resize(width: 400) {
            src
          }
        }
      }
    }
  `);

  return (
    <NavContainer>
      <img
        className="logo"
        src={data.logo.childImageSharp.resize.src}
        alt="Bharat"
      />
      <Nav>
        <ul>
          <li>
            <Link to="/">
              <Header as="span">About Me</Header>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Header as="span">What I work</Header>
            </Link>
          </li>
          <li>
            <a href={pdf} target="_blank">
              <Header as="span">My Resume</Header>
            </a>
          </li>
          <li>
            <Link to="/uses">
              <Header as="span">/uses</Header>
            </Link>
          </li>
        </ul>
      </Nav>
    </NavContainer>
  );
}
