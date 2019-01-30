/**
 * @flow
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import App, { Container } from 'next/app';

class Application extends App {
  static async getInitialProps({ Component, ctx }): Object {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render(): React.Node {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default Application;
