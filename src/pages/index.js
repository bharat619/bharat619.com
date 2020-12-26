import React, { useEffect } from "react";
import { HeaderStyle } from "../components/styles/Heading";
import styled, { keyframes } from "styled-components";
import useSalutations from "../helpers/useSalutation";
import calculateMyWorkExperience from "../helpers/calculateMyWorkExperience";

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

const Salutation = styled(HeaderStyle)`
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
          Your friendly neighbourhood <b>Fullstack-Dev</b> <span>👨‍💻</span>
        </div>

        <div className="content-item">I'm from India 🇮🇳</div>

        <div className="content-item">
          It's been about {years} years since I started working or about {days}{" "}
          days...!
        </div>

        <div className="content-item">
          You can know <span className="here"> more about my work here</span>
        </div>

        <div className="content-item">
          Feel free to reach out to me any time on my email{" "}
          <span className="here">baru.hegde@gmail.com</span>
        </div>
      </div>
    </AboutMeWrapper>
  );
};

export default IndexPage;
