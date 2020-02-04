/**
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '~/components/RenderMetaTags';

const Meta: React.FC = (): React.ReactElement<any> => (
  <RenderMetaTags
    description="I'm a software engineer who builds top-notch web and mobile apps. Previously founded Cheddur, the social network of crypto. Follow me! 🤠"
    keywords={[
      'cheddur',
      'cheddur app',
      'crypto',
      'cryptocurrency',
      'follow',
      'software developer',
      'software engineer',
      'front-end developer',
      'youtube',
      'youtuber',
    ]}
  />
);

export default Meta;
