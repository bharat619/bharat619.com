import React from "react";
import styled from "styled-components";
import Instagram from "./Instagram";

const SocialMediaStyle = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 2rem;
  justify-content: space-between;

  div.social-media {
    width: 25rem;
    height: 20rem;
    background: var(--yellow);
    color: black;
    justify-self: center;
    align-self: center;
  }
`;

export default function SocialMedia() {
  return (
    <SocialMediaStyle>
      <div>
        <Instagram />
      </div>
      <div>
        <div className="social-media">
          <span className="text">Twitter (TODO)</span>
        </div>
      </div>
      <div>
        <div className="social-media">
          <span className="text">LinkedIn (TODO)</span>
        </div>
      </div>
      {/* <div>
        <div className="social-media">
          <span className="text">Facebook (TODO)</span>
        </div>
      </div> */}
    </SocialMediaStyle>
  );
}
