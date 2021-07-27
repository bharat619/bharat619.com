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
  SiTypescript,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

import { HeaderStyle } from "../components/styles/Heading";
import SEO from "../components/SEO";

const SectionHeader = styled(HeaderStyle)`
  font-weight: bold;

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
  li {
    @media (max-width: 400px) {
      font-size: 14px;
    }
  }
`;

const Link = styled.a`
  border-bottom: 5px solid var(--yellow);
`;

export default function MyWork() {
  return (
    <>
      <SEO title="My Work"></SEO>
      <MyWorkWrapper>
        <SectionHeader as="span">Where I work?</SectionHeader>
        <p>
          Currently I work with{" "}
          <Link target="_blank" href="https://www.encora.com/">
            Encora
          </Link>
          , a wonderful bunch of folks who do pretty cool stuff!!
        </p>{" "}
        <p>
          Working on the product{" "}
          <Link target="_blank" href="https://www.bugcrowd.com/">
            Bugcrowd
          </Link>
        </p>
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
        <p>
          Started to get slightly inclined towards <SiTypescript /> Typescript
          these days.
        </p>
        <br />
        <div>
          <p>
            The kind of projects that I have worked till now are in the domain
            of Banking, Insurance, CRM and E-commerce.
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
          In case if you are interested about this site, its built using Gatsby.
          The services to fetch the Instagram and Twitter posts are done using
          serverless functions. You can find all the source code{" "}
          <Link href="https://github.com/bharat619/bharat619.com">here</Link>
        </p>
        <br />
        <div>
          <p>
            Apart from that, I do like to explore on new tech stacks, improve my
            technique and styles, write blogs, play games, drink coffee,
            music...
          </p>
          You get the point right 😅
        </div>
      </MyWorkWrapper>
    </>
  );
}
