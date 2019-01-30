/**
 * @flow
 * @prettier
 */

/* eslint-disable no-underscore-dangle */

/* global window */

const ENV =
  typeof window !== 'undefined'
    ? // grab env variables from `window` on the client
      window.__ENV__
    : // grab env variables from node on the server
      process.env;

// eslint-disable-next-line immutable/no-mutation
module.exports = ENV;
