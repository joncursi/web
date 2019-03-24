/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';

// Firefox does not support break-word
export default css`
  a {
    word-break: break-word;
    text-decoration: none;
  }
`;
