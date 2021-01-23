import * as React from "react";
import styled from "styled-components";

const NotFound = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  margin-bottom: 30rem;
`;

// markup
const NotFoundPage = () => {
  return (
    <NotFound>
      <h3>
        Heyy.. Woahhhhh. <br />
        Thats something which isnt present here..
      </h3>
    </NotFound>
  );
};

export default NotFoundPage;
