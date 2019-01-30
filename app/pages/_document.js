/**
 * @flow
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import DocumentImport, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import htmlescape from 'htmlescape';
import materialColors from 'material-colors';

import type { ContextFlowType } from '../types';

// choose which env variables should be available on the client
const { GOOGLE_ANALYTICS_TRACKING_ID_WEB, NODE_ENV } = process.env;
const ENV = {
  GOOGLE_ANALYTICS_TRACKING_ID_WEB,
  NODE_ENV,
};

type PropsFlowType = {
  url: string,
};

type CtxFlowType = ContextFlowType & {
  renderPage: Function,
};

class Document extends DocumentImport<PropsFlowType> {
  props: PropsFlowType;

  static async getInitialProps(ctx: CtxFlowType): Promise<PropsFlowType> {
    const props = await super.getInitialProps(ctx);

    // build the page
    // eslint-disable-next-line object-curly-newline
    const page = ctx.renderPage();

    // build a separate stylesheet for styled-jsx styles
    const styledJsxStyles = flush();
    // combine styles
    const styles = [props.styles, ...styledJsxStyles];

    // get the current URL being requested
    const url = `https://${ctx.req.headers.host}${ctx.req.url}`;

    // inject the props
    return {
      ...page,
      ...props,
      styles,
      url,
    };
  }

  render(): React.Node {
    const { url } = this.props;

    return (
      <html lang="en">
        <Head>
          {/* General */}
          <meta charSet="utf-8" />
          <meta content="text/html; charset=utf-8" httpEquiv="content-type" />
          <meta
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
            name="viewport"
          />
          <meta content="joncursi" name="application-name" />
          <meta content="Jon Cursi" name="creator" />
          <meta
            content={
              ENV.NODE_ENV === 'production'
                ? 'index,follow'
                : 'noindex,nofollow'
            }
            name="robots"
          />

          {/* Icons */}
          <link href="/static/img/favicon.png" rel="shortcut icon" />

          {/* Facebook Open Graph */}
          <meta content="en_US" property="og:locale" />
          <meta content="joncursi" property="og:site_name" />
          <meta content="website" property="og:type" />
          <meta content={url} property="og:url" />

          {/* Twitter Cards */}
          <meta content="US" name="twitter:app:country" />
          <meta content="summary" name="twitter:card" />
          <meta content={url} name="twitter:url" />

          {/* Styles */}
          <link rel="stylesheet" href="/static/css/normalize.css" />
          <style jsx global>
            {`
              * {
                font-family: 'Roboto', sans-serif;
              }
              h1,
              h2,
              h3,
              h4,
              h5,
              h6,
              p,
              span,
              div,
              a {
                color: ${materialColors.white};
              }
            `}
          </style>

          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>

        <body bgColor={materialColors.black}>
          <Main />

          {/* eslint-disable react/no-danger */}
          <script
            dangerouslySetInnerHTML={{
              __html: `__ENV__ = ${htmlescape(ENV)}`,
            }}
          />
          {/* eslint-enable react/no-danger */}

          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
