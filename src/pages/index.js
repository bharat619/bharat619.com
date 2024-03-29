import React, { useEffect } from "react";
import { Link } from "gatsby";

import { HeaderStyle } from "../components/styles/Heading";
import styled, { keyframes } from "styled-components";
import useSalutations from "../helpers/useSalutation";
import calculateMyWorkExperience from "../helpers/calculateMyWorkExperience";
import SEO from "../components/SEO";

const animation = keyframes`
  from {
    top: -7rem;
    opacity: 0;
  }

  to {
    top: 0rem;
    opacity: 1;
  }
`;

export const Salutation = styled(HeaderStyle)`
  span.girt {
    background: none;
    &:hover {
      transform: none;
      animation: none;
    }
  }
  span {
    border-bottom: 5px solid var(--yellow);
  }
  transform: none;
  animation: ${animation} 0.4s;
`;

const AboutMeWrapper = styled.div`
  margin-top: 10rem;
  font-family: monospace;
  @media (max-width: 600px) {
    margin-top: 5rem;
  }
  padding: 1rem;
  div.my-name {
    font-size: 4rem;
    font-style: italic;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
    max-width: 700px;
    margin: 0px auto;

    .title {
      font-family: radnika, sans-serif;
      font-weight: bold;
    }
  }

  div.fullstack {
    max-width: 700px;
    font-family: radnika, sans-serif;
    margin: 0px auto;
    padding: 5px;
    font-style: italic;
    display: block;
    span {
      font-style: normal;
    }
  }

  div.content {
    margin-top: 3rem;
    font-size: 3rem;
    line-height: 8rem;
    padding: 5px;
    @media (max-width: 600px) {
      font-size: 1.5rem;
      line-height: 4rem;
    }
  }

  div.content-item {
    line-height: 4.5rem;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
    span.here {
      border-bottom: 5px solid var(--yellow);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const IndexPage = () => {
  const [salutation, setSalutation, randomizeSalutation] = useSalutations();

  useEffect(() => {
    const timer = setTimeout(() => {
      const sal = randomizeSalutation();
      setSalutation((prev) => {
        if (prev !== sal) return sal;
      });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  const [years, days] = calculateMyWorkExperience();
  return (
    <>
      <SEO title="Home"></SEO>
      <AboutMeWrapper>
        <Salutation as="h1">
          <span>{salutation},</span>
        </Salutation>
        <div className="content">
          <div className="my-name">
            I'm &nbsp;
            <span className="title">Bharat Hegde.</span>
          </div>
          <div className="fullstack">
            Your friendly neighbourhood <b>Fullstack-Dev</b>{" "}
            <span role="img" aria-label="Coder">
              👨‍💻
            </span>
          </div>

          <div className="content-item">
            I'm from India{" "}
            <span role="img" aria-label="India">
              🇮🇳
            </span>
          </div>

          <div className="content-item">
            It's been about {years} years since I started working or about{" "}
            {days} days...!
          </div>

          <div className="content-item">
            You can know{" "}
            <span className="here">
              {" "}
              <Link to="/my-work">more about my work here</Link>{" "}
            </span>
          </div>

          <div className="content-item">
            Feel free to reach out to me any time on my email{" "}
            <span className="here">bharat_619@outlook.com</span>
          </div>
        </div>
      </AboutMeWrapper>
    </>
  );
};

export default IndexPage;
