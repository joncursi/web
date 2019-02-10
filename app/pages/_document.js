/**
 * @flow
 * @prettier
 */

/* eslint-disable filenames/match-regex, filenames/match-exported */

import * as React from 'react';
import AppRegistry from 'react-native-web/dist/cjs/exports/AppRegistry';
import DocumentImport, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import htmlescape from 'htmlescape';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import materialColors from 'material-colors';

import type { ContextFlowType } from '../types';

// choose which env variables should be available on the client
const { GOOGLE_ANALYTICS_TRACKING_ID_WEB, NODE_ENV } = process.env;
const ENV = {
  GOOGLE_ANALYTICS_TRACKING_ID_WEB,
  NODE_ENV,
};

// Force Next-generated DOM elements to fill their parent's height.
// Not required for using of react-native-web, but helps normalize
// layout for top-level wrapping elements.
// Disable input, textarea outline because blinking caret is enough.
const normalizeNextElements = `
  body > div:first-child,
  #__next {
    height: 100%;
  }
  input, textarea {
    outline: none;
  }
`;

let index = 0;

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

    // register the app with react-native-web
    AppRegistry.registerComponent('Main', (): Function => Main);

    // build a separate stylesheet for react-native-web universal components
    const { getStyleElement } = AppRegistry.getApplication('Main', {});
    const reactNativeWebStyles = getStyleElement();
    // build a separate stylesheet for styled-jsx styles
    const styledJsxStyles = flush();
    // combine styles
    const styles = [
      props.styles,
      /* eslint-disable react/no-danger, no-plusplus */
      <style
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
        key={index++}
      />,
      /* eslint-enable react/no-danger, no-plusplus */
      ...styledJsxStyles,
      reactNativeWebStyles,
    ];

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

          {/* Google */}
          <meta
            content="RCyMwbqpOJnycWzhUXhN_Rau4zLKEJjlJOPrugGp21c"
            name="google-site-verification"
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

          {/* Icons */}
          <style type="text/css">
            {`
              @font-face {
                src: url(${MaterialCommunityIcons});
                font-family: MaterialCommunityIcons;
              }
            `}
          </style>

          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/img/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/img/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/img/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/img/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/img/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/img/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/img/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/img/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/img/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/static/img/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />

          {/* Fonts */}
          <style jsx global>
            {`
              @font-face {
                font-family: 'Muller ExtraBold';
                src: url('/static/fonts/muller/extrabold/MullerExtraBold.eot');
                src: url('/static/fonts/muller/extrabold/MullerExtraBold.eot?#iefix')
                    format('embedded-opentype'),
                  url('/static/fonts/muller/extrabold/MullerExtraBold.woff2')
                    format('woff2'),
                  url('/static/fonts/muller/extrabold/MullerExtraBold.woff')
                    format('woff'),
                  url('/static/fonts/muller/extrabold/MullerExtraBold.ttf')
                    format('truetype'),
                  url('/static/fonts/muller/extrabold/MullerExtraBold.svg#MullerExtraBold')
                    format('svg');
                font-weight: normal;
                font-style: normal;
              }

              @font-face {
                font-family: 'Muller Medium';
                src: url('/static/fonts/muller/medium/MullerMedium.eot');
                src: url('/static/fonts/muller/medium/MullerMedium.eot?#iefix')
                    format('embedded-opentype'),
                  url('/static/fonts/muller/medium/MullerMedium.woff2')
                    format('woff2'),
                  url('/static/fonts/muller/medium/MullerMedium.woff')
                    format('woff'),
                  url('/static/fonts/muller/medium/MullerMedium.ttf')
                    format('truetype'),
                  url('/static/fonts/muller/medium/MullerMedium.svg#MullerMedium')
                    format('svg');
                font-weight: normal;
                font-style: normal;
              }

              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                color: ${materialColors.white};
                font-family: 'Muller ExtraBold', sans-serif;
              }

              p,
              span,
              div,
              a {
                color: ${materialColors.white};
                font-family: 'Muller Medium', sans-serif;
              }
            `}
          </style>
        </Head>

        <body bgColor={materialColors.black} style={{ overflow: 'hidden' }}>
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
