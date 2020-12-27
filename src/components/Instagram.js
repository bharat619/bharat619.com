import React, { useEffect, useState } from "react";
import styled from "styled-components";

const InstagramStyle = styled.div`
  padding: 0.5rem;
  background: white;
  img {
    max-width: 100%;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  justify-items: center;
  @media (max-width: 350px) {
    grid-template-columns: 1fr;
    width: 100%;
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

export default function Instagram() {
  const [igPosts, setIgPosts] = useState([]);

  useEffect(() => {
    getIgPosts().then((data) => {
      setIgPosts(data);
    });
  }, []);

  return (
    <InstagramStyle>
      {igPosts.map((post) => (
        <a href="" key={post.id}>
          <img
            src={`https://images.weserv.nl/?url=${encodeURIComponent(
              post.thumbnail
            )}&w=200`}
            alt=""
          />
        </a>
      ))}
    </InstagramStyle>
  );
}
