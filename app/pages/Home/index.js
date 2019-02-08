/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import Meta from './meta';
import Page from './Page';

const Home = (): React.Node => (
  <React.Fragment>
    <Page />

    <Meta />
  </React.Fragment>
);

export default Home;
