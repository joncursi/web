/**
 * @prettier
 */

import * as React from 'react';
import {
  Facebook,
  GithubCircle,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'mdi-material-ui';
import { IconButton, Typography } from '@material-ui/core';

import Link from '~/components/Link';
import PageLayout from '~/layouts/PageLayout';

import styles, { useStyles } from './styles';

const SOCIAL_PROFILES = [
  {
    Icon: Twitter,
    linkProps: {
      target: '_blank',
      to: 'https://twitter.com/joncursi',
    },
  },
  {
    Icon: GithubCircle,
    linkProps: {
      target: '_blank',
      to: 'https://github.com/joncursi',
    },
  },
  {
    Icon: Youtube,
    linkProps: {
      target: '_blank',
      to: 'https://www.youtube.com/joncursi?sub_confirmation=1',
    },
  },
  {
    Icon: Instagram,
    linkProps: {
      target: '_blank',
      to: 'https://www.instagram.com/joncursi/',
    },
  },
  {
    Icon: Facebook,
    linkProps: {
      target: '_blank',
      to: 'https://www.facebook.com/JonCursi/',
    },
  },
  {
    Icon: Linkedin,
    linkProps: {
      target: '_blank',
      to: 'https://www.linkPropsedin.com/in/joncursi/',
    },
  },
  {
    imageProps: {
      alt: 'Steemit',
      src: '/static/img/steemit-icon-white.png',
      style: {
        height: 30,
        width: 30,
      },
    },
    linkProps: {
      target: '_blank',
      to: 'https://steemit.com/@joncursi',
    },
  },
];

const Page: React.FC = (): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <>
      <style jsx>{styles}</style>

      <PageLayout>
        <div className="container">
          <div className="background" />

          <div className="contentContainer">
            <div className="containerInfo">
              <div className="containerBrand">
                <img
                  alt="Jon Cursi"
                  className="wordmark"
                  src="/static/img/brand/wordmark-white.png"
                />
              </div>

              <Typography
                classes={{
                  root: classes.typographyRoot,
                }}
                color="secondary"
                variant="h6"
              >
                I&apos;m a software engineer who builds top-notch web and mobile
                apps. Previously founded&nbsp;
                <Link target="_blank" to="https://www.cheddur.com/">
                  <span className="textLink">Cheddur</span>
                </Link>
                , the social network of crypto. Follow me!&nbsp;
                <span aria-label="cowboy" role="img">
                  🤠
                </span>
              </Typography>

              <div className="socialProfilesContainer">
                {SOCIAL_PROFILES.map(
                  (socialProfile): React.ReactElement<any> => (
                    <div
                      className="socialProfile"
                      key={socialProfile.linkProps.to}
                    >
                      <Link {...socialProfile.linkProps}>
                        <IconButton color="secondary">
                          {!!socialProfile.Icon && (
                            <socialProfile.Icon fontSize="large" />
                          )}

                          {!!socialProfile.imageProps && (
                            <img
                              {...socialProfile.imageProps}
                              alt={socialProfile.imageProps.alt}
                            />
                          )}
                        </IconButton>
                      </Link>
                    </div>
                  ),
                )}
              </div>

              <Typography color="primary" variant="overline">
                <Link to="mailto:joncursi@gmail.com">
                  <span className="textLink">
                    Business Inquiries: joncursi@gmail.com
                  </span>
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
