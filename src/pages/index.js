import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeaderStyle } from "../components/styles/Heading";
import styled, { keyframes } from "styled-components";
import useSalutations from "../helpers/useSalutation";

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
  margin: 0px auto;
  max-width: 800px;
  margin-top: 10rem;

  div.my-name {
    max-width: 600px;
    margin: 0px auto;
  }

  div.fullstack {
    max-width: 600px;
    margin: 0px auto;
  }

  div.content {
    line-height: 4rem;
  }
`;

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
  });

  const [salutation, setSalutation, randomizeSalutation] = useSalutations();

  useEffect(() => {
    const timer = setTimeout(() => {
      const sal = randomizeSalutation();
      setSalutation(sal);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <AboutMeWrapper>
      <Salutation as="h1">
        <span>{salutation},</span>
      </Salutation>
      <div className="content">
        <div className="my-name">I'm Bharat Hegde</div>
        <div className="fullstack">
          Your friendly neighbourhood Fullstack-Dev
        </div>
      </div>
    </AboutMeWrapper>
  );
};

export default IndexPage;
