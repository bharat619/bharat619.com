import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const TwitterWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
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

  .tweet {
    font-size: 17px;
    font-family: monospace;
  }
`;

const GridStyle = styled.div`
  display: grid;
  padding: 0.5rem;
  background: white;
  grid-template-rows: repeat(5, 148px);
  justify-items: center;
  width: 70%;
  @media (max-width: 925px) {
    width: 424px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  margin-top: -4%;
  p {
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    padding-left: 1em;
  }

  .stroke {
    :hover {
      text-decoration: line-through;
    }
  }
`;

function useTweets() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(`${process.env.GATSBY_SERVERLESS_BASE}/twitter`).then((response) => {
      response.json().then((data) => {
        setTweets(data);
      });
    });
  }, []);

  return tweets;
}

export default function () {
  const tweets = useTweets();

  if (!tweets.length) {
    return (
      <TwitterWrapper>
        <a
          href="https://twitter.com/bharat619_hegde"
          target="_blank"
          className="mark"
          rel="noreferrer"
        >
          <p>
            &nbsp; <FaTwitter /> &nbsp; @bharat619_hegde &nbsp;
          </p>
        </a>
        <GridStyle>
          <p>Hang on!! Tweets are flying in...</p>;
        </GridStyle>
      </TwitterWrapper>
    );
  }
  return (
    <TwitterWrapper>
      <a
        href="https://twitter.com/bharat619_hegde"
        target="_blank"
        className="mark"
        rel="noreferrer"
      >
        <p>
          &nbsp; <FaTwitter /> &nbsp; @bharat619_hegde &nbsp;
        </p>
      </a>

      <GridStyle>
        {tweets.map((tweet) => {
          return (
            <ul key={tweet.id}>
              <li className="stroke">
                <FaTwitter></FaTwitter>
                <a
                  className="tweet"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://twitter.com/bharat619_hegde/status/${tweet.id_str}`}
                >
                  {tweet.text.slice(0, 100)}...
                </a>
              </li>
            </ul>
          );
        })}
      </GridStyle>
    </TwitterWrapper>
  );
}
