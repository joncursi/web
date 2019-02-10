/**
 * @prettier
 */

/* eslint-disable promise/prefer-await-to-then, promise/prefer-await-to-callbacks */
/* eslint-plugin-disable flowtype */

const express = require('express');
const nextjs = require('next');
const sm = require('sitemap');

const ENV = require('./app/constants/env');
const nextRoutes = require('./routes');

// Create the express server
const expressApp = express();
// Create the next app
const nextApp = nextjs({
  // Set the `dev` flag in development to enable Hot Module Replacement
  dev: ENV.NODE_ENV === 'development',
  // Custom `pages` location
  dir: './app',
});
// Create the next handle
const nextHandle = nextRoutes.getRequestHandler(nextApp);

// Configure `sitemap.xml`
expressApp.get('/sitemap.xml', (req, res) => {
  const hostname = `https://${req.get('host')}`;
  const sitemap = sm.createSitemap({
    cacheTime: 600000,
    hostname,
    urls: [
      {
        changefreq: 'monthly',
        priority: 1,
        url: '/',
      },
    ],
  });
  sitemap.toXML((err, xml) => {
    if (err) {
      res.status(500).end();
    } else {
      res.setHeader('content-type', 'application/xml');
      res.send(xml);
    }
  });
});

// Configure `robots.txt`
expressApp.get('/robots.txt', (req, res) => {
  const hostname = `https://${req.get('host')}`;
  res.setHeader('content-type', 'text/plain');
  res.send(
    `User-agent: *\n${
      ENV.NODE_ENV === 'production'
        ? `Sitemap: ${hostname}/sitemap.xml`
        : 'Disallow: /'
    }`,
  );
});

// Render a next route
expressApp.get('*', (req, res) => nextHandle(req, res));

nextApp
  .prepare()
  .then(() =>
    expressApp.listen(ENV.PORT, err => {
      if (err) {
        throw err;
      }
      // eslint-disable-next-line no-console
      console.log(`> Serving on http://localhost:${ENV.PORT}`);
    }),
  )
  .catch(error => {
    throw error;
  });
