/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import FacebookIcon from 'mdi-material-ui/Facebook';
import GithubCircleIcon from 'mdi-material-ui/GithubCircle';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from 'mdi-material-ui/Instagram';
import LinkedinIcon from 'mdi-material-ui/Linkedin';
import TwitterIcon from 'mdi-material-ui/Twitter';
import Typography from '@material-ui/core/Typography';
import YoutubeIcon from 'mdi-material-ui/Youtube';

import Link from '../../../components/Link';
import PageLayout from '../../../layouts/PageLayout';

import styles, { globalStyles } from './styles';

const Page = (): React.Node => {
  const profiles = [
    {
      Icon: TwitterIcon,
      link: {
        target: '_blank',
        to: 'https://twitter.com/joncursi',
      },
    },
    {
      Icon: GithubCircleIcon,
      link: {
        target: '_blank',
        to: 'https://github.com/joncursi',
      },
    },
    {
      Icon: YoutubeIcon,
      link: {
        target: '_blank',
        to: 'https://www.youtube.com/joncursi?sub_confirmation=1',
      },
    },
    {
      Icon: InstagramIcon,
      link: {
        target: '_blank',
        to: 'https://www.instagram.com/joncursi/',
      },
    },
    {
      Icon: FacebookIcon,
      link: {
        target: '_blank',
        to: 'https://www.facebook.com/JonCursi/',
      },
    },
    {
      Icon: LinkedinIcon,
      link: {
        target: '_blank',
        to: 'https://www.linkedin.com/in/joncursi/',
      },
    },
    {
      image: {
        alt: 'Steemit',
        src: '/static/img/steemit-icon-white.png',
        style: {
          height: 30,
          width: 30,
        },
      },
      link: {
        target: '_blank',
        to: 'https://steemit.com/@joncursi',
      },
    },
  ];

  return (
    <React.Fragment>
      <style global jsx>
        {globalStyles}
      </style>
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
                  root: 'typographyDescriptionRoot',
                }}
                color="secondary"
                variant="h6"
              >
                {
                  "I'm a software engineer who builds top-notch web and mobile apps. Previously founded "
                }
                <Link target="_blank" to="https://www.cheddur.com/">
                  <span className="textLink">Cheddur</span>
                </Link>
                {', the social network of crypto. Follow me! 🤠'}
              </Typography>

              <div className="profiles">
                {profiles.map(
                  (profile): React.Node => (
                    <div className="profile" key={profile.link.to}>
                      <Link {...profile.link} className="iconLink">
                        <IconButton color="secondary">
                          {!!profile.Icon && <profile.Icon fontSize="large" />}

                          {!!profile.image && (
                            <img
                              alt={profile.image.alt}
                              src={profile.image.src}
                              style={profile.image.style}
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
    </React.Fragment>
  );
};
export default Page;
