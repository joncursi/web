/**
 * @prettier
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-plugin-disable filenames, flowtype */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withCSS = require('@zeit/next-css');

// eslint-disable-next-line immutable/no-mutation
module.exports = withCSS({
  // Disable file-system routing of `pages` directory
  useFileSystemPublicRoutes: false,
  webpack(config) {
    // use the bundle analyzer if `ANALYZE` is enabled
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }),
      );
    }

    config.module.rules.push(
      // support .mjs files
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        use: [],
      },
      // load images
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              limit: 8192,
              name: '[name]-[hash].[ext]',
              outputPath: '../static/images/',
              publicPath: '/_next/static/images/',
            },
          },
        ],
      },
      // load fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              limit: 8192,
              name: '[name]-[hash].[ext]',
              outputPath: '../static/fonts/',
              publicPath: '/_next/static/fonts/',
            },
          },
        ],
      },
    );

    // Remove minifed react aliases for material-ui so production builds work
    /* eslint-disable no-param-reassign */
    if (config.resolve.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias['react-dom'];
    }
    /* eslint-enable no-param-reassign */

    return config;
  },
});
