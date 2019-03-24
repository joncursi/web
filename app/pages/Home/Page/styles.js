/**
 * @flow
 * @prettier
 */

import css from 'styled-jsx/css';
import materialColors from 'material-colors';

import DIMS from '../../../constants/dims';

const BRAND_HEIGHT_SMALL = 35;
const BRAND_HEIGHT_MEDIUM = 40;
const BRAND_HEIGHT_LARGE = 50;

export default css`
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    50% {
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
    left: -50%;
    right: 0;
    opacity: 0.15;
    position: absolute;
    top: 0;
  }
  .contentContainer {
    align-items: flex-end;
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .containerInfo {
    padding: ${DIMS.LAYOUT_PADDING * 2}px;
  }
  .containerBrand {
    align-items: center;
    display: flex;
  }
  .logo {
    border-radius: ${DIMS.BORDER_RADIUS_DEFAULT}px;
    display: inline-block;
    height: ${BRAND_HEIGHT_SMALL}px;
    margin-right: ${DIMS.BORDER_RADIUS_DEFAULT * 8}px;
    width: auto;
  }
  .wordmark {
    display: inline-block;
    height: ${BRAND_HEIGHT_SMALL - DIMS.LAYOUT_PADDING}px;
    width: auto;
  }
  a,
  p {
    color: ${materialColors.grey['500']};
    font-size: 20px;
  }
  .textLink {
    color: red;
    text-decoration: none;
  }
  .profiles {
    display: flex;
    flex-wrap: wrap;
  }
  .profile {
    align-items: center;
    color: red;
    display: flex;
    height: 40px;
    justify-content: center;
    margin-right: ${DIMS.LAYOUT_PADDING}px;
    text-decoration: none;
    transition: all 0.5s ease;
    width: 40px;
  }
  .profile:hover {
    opacity: 0.5;
  }
  .imageIcon {
    margin-top: 4px;
  }
  .textEmail {
    font-size: 80%;
  }

  @media (min-width: ${DIMS.BREAKPOINTS.SMALL}px) {
    .containerInfo {
      padding: ${DIMS.LAYOUT_PADDING * 4}px;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.MEDIUM}px) {
    .background {
      left: -35%;
      opacity: 1;
    }
    .contentContainer {
      align-items: center;
      left: 50%;
    }
    .logo {
      height: ${BRAND_HEIGHT_MEDIUM}px;
    }
    .wordmark {
      height: ${BRAND_HEIGHT_MEDIUM - DIMS.LAYOUT_PADDING}px;
    }
    a,
    p {
      font-size: 22px;
    }
  }

  @media (min-width: ${DIMS.BREAKPOINTS.LARGE}px) {
    .background {
      left: 0;
    }
    .containerInfo {
      padding: ${DIMS.LAYOUT_PADDING * 8}px;
    }
    .logo {
      height: ${BRAND_HEIGHT_LARGE}px;
    }
    .wordmark {
      height: ${BRAND_HEIGHT_LARGE - DIMS.LAYOUT_PADDING}px;
    }
    a,
    p {
      font-size: 24px;
    }
  }
`;
