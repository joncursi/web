/**
 * @flow
 * @prettier
 */

/* global window */

import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import ENV from '../constants/env';

export const initGA = () => {
  ReactGA.initialize(ENV.GOOGLE_ANALYTICS_TRACKING_ID_WEB, {
    debug: ENV.NODE_ENV === 'development',
  });
};

export const initFBPixel = () => {
  // https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
  const advancedMatching = {};
  const options = {
    autoConfig: true,
    debug: ENV.NODE_ENV === 'development',
  };
  ReactPixel.init(ENV.FACEBOOK_PIXEL_TRACKING_ID, advancedMatching, options);
};

export const logPageView = () => {
  const page = window.location.pathname;
  ReactGA.set({ page });
  ReactGA.pageview(page);
  ReactPixel.pageView();
};

export const logEvent = ({
  action = '',
  category = '',
  label = '',
}: {
  action: string,
  category: string,
  label?: string,
}) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};
