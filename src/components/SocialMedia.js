import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SocialMediaStyle = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
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

const InstagramStyle = styled.div`
  img {
    object-fit: contain;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  justify-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    img {
      width: 100%;
    }
  }
`;

const getIgPosts = async () => {
  return fetch(`${process.env.GATSBY_SERVERLESS_BASE}/instagram`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.text().then((data) => JSON.parse(data)));
};

export default function SocialMedia() {
  const [IgPosts, setIgPosts] = useState([]);

  useEffect(() => {
    getIgPosts().then((data) => {
      setIgPosts(data);
    });
  }, []);

  return (
    <SocialMediaStyle>
      <div>
        <InstagramStyle>
          {IgPosts.map((post) => (
            <img
              key={post.id}
              src={`https://images.weserv.nl/?url=${encodeURIComponent(
                post.thumbnail
              )}&w=150&h=130`}
              alt=""
            />
          ))}
        </InstagramStyle>
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
      <div>
        <div className="social-media">
          <span className="text">Facebook (TODO)</span>
        </div>
      </div>
    </SocialMediaStyle>
  );
}
