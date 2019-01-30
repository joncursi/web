/**
 * @flow
 * @prettier
 */

/* global window */

import ReactGA from 'react-ga';

import ENV from '../constants/env';

export const initGA = () => {
  ReactGA.initialize(ENV.GOOGLE_ANALYTICS_TRACKING_ID_WEB, {
    debug: ENV.NODE_ENV === 'development',
  });
};

export const logPageView = () => {
  const page = window.location.pathname;
  ReactGA.set({ page });
  ReactGA.pageview(page);
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
