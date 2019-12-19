import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React, { useState, useEffect, FunctionComponent } from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";

type MyComponentProps = {
  title?: string;
  paragraph?: string;
};

const ErrorMsgComponent = styled.div`
  ${tw`inline float-right text-red-500 text-xs italic`};
`;

const MyComponent: FunctionComponent<MyComponentProps> = ({
  title = "The default title",
  paragraph = "The default paragraph",
  children
}) => {
  // Component state
  const [status, setStatus] = useState("initalValue");

  // Sideeffects like onLoad and stuff
  //   useEffect(() => {
  //     document.title = `Hello ${name}`
  //   }, [name])

  return (
    <div
      css={css`
        ${tw`mx-auto`}
      `}
    >
      {title}
    </div>
  );
};

MyComponent.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string
};

export default MyComponent;
