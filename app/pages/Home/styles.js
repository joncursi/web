/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';
import materialColors from 'material-colors';

import DIMS from '../../constants/dims';

const BRAND_HEIGHT = 50;

export default css`
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .container {
    animation: 1s ease 0s normal forwards 1 fadein;
  }
  .background {
    background-image: url(/static/img/background.jpg);
    background-size: cover;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
  }
  .contentContainer {
    align-items: center;
    bottom: 0;
    display: flex;
    left: 50%;
    padding: ${DIMS.LAYOUT_PADDING * 8}px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .containerBrand {
    align-items: center;
    display: flex;
  }
  .logo {
    border-radius: ${DIMS.BORDER_RADIUS_DEFAULT}px;
    display: inline-block;
    height: ${BRAND_HEIGHT}px;
    margin-right: ${DIMS.BORDER_RADIUS_DEFAULT * 8}px;
    width: auto;
  }
  .wordmark {
    display: inline-block;
    height: ${BRAND_HEIGHT - DIMS.LAYOUT_PADDING}px;
    width: auto;
  }
  a,
  p {
    color: ${materialColors.grey['500']};
    font-size: 24px;
  }
  .textLink {
    color: red;
    text-decoration: none;
  }
  .logoCheddur {
    height: 28px;
    width: 28px;
  }
  .iconLink {
    color: red;
    margin-right: ${DIMS.LAYOUT_PADDING}px;
    text-decoration: none;
    transition: all 0.5s ease;
  }
  .iconLink:hover {
    opacity: 0.5;
  }
  .textEmail {
    font-size: 80%;
  }
`;
