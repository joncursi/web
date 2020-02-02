/**
 * @prettier
 */

import * as React from 'react';

import { initFBPixel, initGA, logPageView } from '../../helpers/analytics';

interface Props {
  children: React.ReactNode;
}

class PageLayout extends React.Component<Props> {
  componentDidMount(): void {
    /* eslint-disable no-underscore-dangle */
    if (!(window as any).__GA_INITIALIZED__) {
      initGA();
      initFBPixel();
      // eslint-disable-next-line immutable/no-mutation
      (window as any).__GA_INITIALIZED__ = true;
    }
    /* eslint-enable no-underscore-dangle */

    logPageView();
  }

  render(): React.ReactNode {
    const { children } = this.props;

    return children;
  }
}

export default PageLayout;
