/**
 * @flow
 * @prettier
 */

/* global document */
/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import App, { Container } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';

import getPageContext from '../helpers/getPageContext';

class Application extends App {
  constructor() {
    super();

    // eslint-disable-next-line immutable/no-mutation
    this.pageContext = getPageContext();
  }

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

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(): React.Node {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default Application;
