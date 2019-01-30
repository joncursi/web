/**
 * @flow
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';

import PageLayout from '../layouts/PageLayout';

const Error = (): React.Node => (
  <PageLayout>
    <div>Page not found.</div>
  </PageLayout>
);

export default Error;
