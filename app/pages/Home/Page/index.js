/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import materialColors from 'material-colors';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import Link from '../../../components/Link';
import PageLayout from '../../../layouts/PageLayout';

import styles from './styles';

const Page = (): React.Node => {
  const profiles = [
    {
      image: {
        alt: 'Cheddur',
        src: '/static/img/cheddur-icon-white.png',
        style: {
          height: 28,
          width: 28,
        },
      },
      link: {
        target: '_blank',
        to: 'https://www.cheddur.com/users/joncursi',
      },
    },
    {
      icon: 'youtube',
      link: {
        target: '_blank',
        to: 'https://www.youtube.com/joncursi?sub_confirmation=1',
      },
    },
    {
      icon: 'facebook',
      link: {
        target: '_blank',
        to: 'https://www.facebook.com/JonCursi/',
      },
    },
    {
      icon: 'twitter',
      link: {
        target: '_blank',
        to: 'https://twitter.com/joncursi',
      },
    },
    {
      icon: 'instagram',
      link: {
        target: '_blank',
        to: 'https://www.instagram.com/joncursi/',
      },
    },
    {
      icon: 'linkedin',
      link: {
        target: '_blank',
        to: 'https://www.linkedin.com/in/joncursi/',
      },
    },
    {
      icon: 'github-circle',
      link: {
        target: '_blank',
        to: 'https://github.com/joncursi',
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
      <style jsx>{styles}</style>

      <PageLayout>
        <div className="container">
          <div className="background" />

          <div className="contentContainer">
            <div className="containerInfo">
              <div className="containerBrand">
                <img
                  alt="Logo"
                  className="logo"
                  src="/static/img/brand/logo-hollow-on-white-square.png"
                />
                <img
                  alt="Jon Cursi"
                  className="wordmark"
                  src="/static/img/brand/wordmark-white.png"
                />
              </div>

              <p>
                {
                  "I'm a software engineer who builds top-notch web and mobile apps, such as "
                }
                <a className="textLink" href="https://www.cheddur.com/">
                  Cheddur
                </a>
                &mdash;the social network of crypto. I also make videos about
                cryptocurrency on the internet. Follow me!
              </p>

              <div className="profiles">
                {profiles.map(
                  (profile): React.Node => (
                    <div className="profile" key={profile.link.to}>
                      <Link {...profile.link} className="iconLink">
                        {profile.icon && (
                          <MaterialCommunityIcon
                            color={materialColors.white}
                            name={profile.icon}
                            size={40}
                          />
                        )}

                        {profile.image && (
                          <img
                            alt={profile.image.alt}
                            className="imageIcon"
                            style={profile.image.style}
                          />
                        )}
                      </Link>
                    </div>
                  ),
                )}
              </div>

              <p>
                <a
                  className="textLink textEmail"
                  href="https://earn.com/joncursi/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Business Inquiries
                </a>
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    </React.Fragment>
  );
};

export default Page;
