import React from "react";
import styled from "styled-components";
import {
  SiJavascript,
  SiRuby,
  SiReact,
  SiRails,
  SiNextDotJs,
  SiGatsby,
  SiAzurefunctions,
  SiIonic,
  SiGithub,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

import { HeaderStyle } from "../components/styles/Heading";

const SectionHeader = styled(HeaderStyle)`
  font-weight: bold;
  font-size: 3rem;
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
    visibility: visible;
  }
`;

const MyWorkWrapper = styled.div`
  margin-top: 10rem;
  font-family: monospace;
  @media (max-width: 600px) {
    margin-top: 5rem;
  }
  padding: 1rem;

  p {
    line-height: 2;
  }
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const List = styled.ul`
  list-style: none;
  line-height: 2;
`;

const Link = styled.a`
  border-bottom: 5px solid var(--yellow);
`;

export default function MyWork() {
  return (
    <MyWorkWrapper>
      <SectionHeader as="span">Where I work?</SectionHeader>
      <p>
        Currently I work with Kiprosh, a wonderful folks to work with. Have a
        look at it over <span className="mark">here</span>
      </p>{" "}
      <br /> <br />
      <SectionHeader as="span">
        What Languages I have worked with?
      </SectionHeader>
      <p>I have worked with</p>
      <ListWrapper>
        <List>
          <li>
            <SiJavascript></SiJavascript> JavaScript
          </li>
          <li>
            <SiRuby></SiRuby> Ruby
          </li>
          <li>
            <IoLogoNodejs></IoLogoNodejs> NodeJS
          </li>
        </List>
      </ListWrapper>
      <br /> <br />
      <SectionHeader as="span">
        What Libraries and Frameworks I work with?
      </SectionHeader>
      <p>Focusing more onto the libaries / frameworks. I have used</p>
      <ListWrapper>
        <List>
          <li>
            <SiReact></SiReact> React
          </li>
          <li>
            <IoLogoNodejs></IoLogoNodejs> Express
          </li>
          <li>
            <SiRails></SiRails> Ruby on Rails
          </li>
        </List>
        <List>
          <li>
            <SiNextDotJs></SiNextDotJs> NextJS
          </li>
          <li>
            <SiGatsby></SiGatsby> Gatsby
          </li>
          <li>
            <SiAzurefunctions></SiAzurefunctions> Lambda
          </li>
        </List>
      </ListWrapper>
      <p>
        Recently I have started working with <SiIonic></SiIonic>Ionic React.
        Gotta say, Im lovin it...!
      </p>
      <br />
      <div>
        <p>
          The kind of projects that I have worked till now are in the domain of
          Banking, Insurance, CRM and E-commerce.
        </p>
      </div>
      <br />
      <SectionHeader as="span">Github</SectionHeader>
      <p>
        You can check my{" "}
        <Link href="https://github.com/bharat619">
          Github<SiGithub></SiGithub>
        </Link>
        .
      </p>
      <p>
        In case if you are interested about this site, its built using Gatsby...
        You can find the source code{" "}
        <Link href="https://github.com/bharat619/bharat619.com">here</Link>
      </p>
      <br />
      <br />
      <div>
        <p>
          Apart from that I do like to explore on new tech stacks, improve my
          technique and styles, write blogs...
        </p>
      </div>
      {/* <div className="">
        <p>I have worked with</p>
        <ul>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>NodeJS</li>
        </ul>
        <p>Focusing more onto the libaries / frameworks. I have used</p>
        <ul>
          <li>React</li>
          <li>Express</li>
          <li>Ruby on Rails</li>
          <li>NextJS</li>
          <li>Gatsby</li>
          <li>Lambda</li>
        </ul>
      </div>
      <div>
        <p>
          The kind of projects that I have worked till now are in the domain of
          Banking, Insurance, CRM and E-commerce
        </p>
      </div>
      <div>
        <p>Check out my GitHub profile here</p>
      </div>
      <div>
        In case if you are interested about this site, its built using Gatsby...
        You can find the source code here
      </div>
      <div>
        <p>
          Apart from that I do like to learn new technologies, improve technique
          and style, write blogs...
        </p>
      </div> */}
    </MyWorkWrapper>
  );
}
