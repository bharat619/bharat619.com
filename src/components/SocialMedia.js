import React from "react";
import styled from "styled-components";

const SocialMediaStyle = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 1rem;
  justify-content: space-between;

  div.social-media {
    width: 25rem;
    height: 25rem;
    background: var(--yellow);
    color: black;
    justify-self: center;
    align-self: center;
  }
`;

export default function SocialMedia() {
  return (
    <SocialMediaStyle>
      <div className="social-media">Instagram (TODO)</div>
      <div className="social-media">
        <span className="text">Twitter (TODO)</span>
      </div>
      <div className="social-media">
        <span className="text">LinkedIn (TODO)</span>
      </div>
      <div className="social-media">
        <span className="text">Facebook (TODO)</span>
      </div>
    </SocialMediaStyle>
  );
}
