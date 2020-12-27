import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

const InstaWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  background: white;

  color: black;

  justify-items: center;

  .mark {
    transform: rotate(-3deg) translateY(-12px);
    margin-top: 5px;

    p {
      display: flex;
      align-items: center;
      background: var(--yellow);
      margin: 0;
      text-align: center;
      font-size: clamp(18px, 5vw, 20px);
    }

    :hover {
      transform: rotate(-2deg) translateY(-12px);
    }
  }
`;

const GridStyle = styled.div`
  padding: 0.5rem;
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
  margin-top: -6%;
`;

const getIgPosts = async () => {
  return fetch(`${process.env.GATSBY_SERVERLESS_BASE}/instagram`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) =>
    response.text().then((data) => {
      console.log(data);
      return JSON.parse(data);
    })
  );
};

export default function Instagram() {
  const [igPosts, setIgPosts] = useState([]);

  useEffect(() => {
    getIgPosts().then((data) => {
      setIgPosts(data);
    });
  }, []);

  return (
    <InstaWrapper>
      <a
        href="https://www.instagram.com/one_armed_wolf_/"
        target="_blank"
        className="mark"
      >
        <p>
          &nbsp; <FaInstagram /> &nbsp; @one_armed_wolf_ &nbsp;
        </p>
      </a>

      <GridStyle>
        {igPosts.map((post) => (
          <a href={post.url} key={post.id} target="_blank">
            <img
              src={`https://images.weserv.nl/?url=${encodeURIComponent(
                post.thumbnail
              )}&w=200`}
              alt={post.alt}
            />
          </a>
        ))}
      </GridStyle>
    </InstaWrapper>
  );
}
