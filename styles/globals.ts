import { css } from "@emotion/react";

export const global = css`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  * {
    box-sizing: border-box;
  }
`;
