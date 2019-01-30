/**
 * @flow
 * @prettier
 */

/* global window */

import * as React from 'react';

import { initGA, logPageView } from '../../helpers/analytics';

type PropsFlowType = {
  children: React.Node,
};

class PageLayout extends React.Component<PropsFlowType> {
  props: PropsFlowType;

  componentDidMount() {
    /* eslint-disable no-underscore-dangle */
    if (!window.__GA_INITIALIZED__) {
      initGA();
      // eslint-disable-next-line immutable/no-mutation
      window.__GA_INITIALIZED__ = true;
    }
    logPageView();
    /* eslint-enable no-underscore-dangle */
  }

  render(): React.Node {
    const { children } = this.props;

    return children;
  }
}

export default PageLayout;
