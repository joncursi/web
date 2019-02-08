/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import RenderMetaTags from '../../components/RenderMetaTags';

const Meta = (): React.Node => (
  <RenderMetaTags
    description="I run Cheddur, the social network of crypto, and make videos about cryptocurrency on the internet. Follow me!"
    imageUrl="/static/img/me-seo-thumbnail.jpg"
    keywords={[
      'cheddur',
      'cheddur app',
      'crypto',
      'cryptocurrency',
      'follow',
      'social',
      'youtube',
      'youtuber',
    ]}
    title="Jon Cursi"
  />
);

export default Meta;
