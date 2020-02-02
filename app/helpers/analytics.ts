/**
 * @prettier
 */

import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import ENV from '~/constants/env';

export const initGA = (): void => {
  ReactGA.initialize(ENV.GOOGLE_ANALYTICS_TRACKING_ID, {
    debug: ENV.NODE_ENV === 'development',
  });
};

export const initFBPixel = (): void => {
  ReactPixel.init(ENV.FACEBOOK_PIXEL_TRACKING_ID, undefined, {
    autoConfig: true,
    debug: ENV.NODE_ENV === 'development',
  });
};

export const logPageView = (): void => {
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
  action: string;
  category: string;
  label?: string;
}): void => {
  ReactGA.event({
    action,
    category,
    label,
  });
};
