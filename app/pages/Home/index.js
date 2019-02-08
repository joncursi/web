/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import materialColors from 'material-colors';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import PageLayout from '../../layouts/PageLayout';

import styles from './styles';

const Home = (): React.Node => {
  const profiles = [
    {
      href:
        'https://www.youtube.com/channel/UCYFy6tdjA0anVL6NiscUX8w?sub_confirmation=1',
      icon: 'youtube',
      target: '_blank',
    },
    {
      href: 'https://www.facebook.com/JonCursi/',
      icon: 'facebook',
      target: '_blank',
    },
    {
      href: 'https://twitter.com/joncursi',
      icon: 'twitter',
      target: '_blank',
    },
    {
      href: 'https://www.instagram.com/joncursi/',
      icon: 'instagram',
      target: '_blank',
    },
    {
      href: 'https://www.linkedin.com/in/joncursi/',
      icon: 'linkedin',
      target: '_blank',
    },
    {
      href: 'https://github.com/joncursi',
      icon: 'github-circle',
      target: '_blank',
    },
    {
      href: 'https://t.me/joncursi',
      icon: 'telegram',
      target: '_blank',
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
                {'I run '}
                <a className="textLink" href="https://www.cheddur.com/">
                  Cheddur
                </a>
                , the social network of crypto, and make videos about
                cryptocurrency on the internet. Follow me!
              </p>

              <p>
                <a
                  className="iconLink"
                  href="https://www.cheddur.com/users/joncursi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="Cheddur"
                    className="logoCheddur"
                    src="/static/img/cheddur-icon-white.png"
                  />
                </a>

                {profiles.map(
                  (profile): React.Node => (
                    <a
                      href={profile.href}
                      className="iconLink"
                      key={profile.href}
                      rel={
                        profile.target === '_blank'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      target={profile.target}
                    >
                      <MaterialCommunityIcon
                        color={materialColors.white}
                        name={profile.icon}
                        size={40}
                      />
                    </a>
                  ),
                )}
              </p>

              <p>
                <a
                  className="textLink textEmail"
                  href="mailto:joncursi@gmail.com"
                >
                  joncursi@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    </React.Fragment>
  );
};

export default Home;
