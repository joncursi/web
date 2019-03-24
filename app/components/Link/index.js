/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import isURL from 'validator/lib/isURL';

import { Link as LinkImport } from '../../../routes';

import styles from './styles';

type PropsFlowType = {
  children: React.Node,
  className?: string,
  onClick?: Function,
  params?: Object,
  style?: Object,
  target?: string,
  to: string,
};

const Link = ({
  children,
  className,
  onClick,
  params,
  style: styleObject,
  target,
  to,
  ...props
}: PropsFlowType): React.Node => {
  const isExternalUrl = isURL(to);

  return (
    <React.Fragment>
      <style jsx>{styles}</style>

      {isExternalUrl && (
        <a
          className={className}
          href={to}
          onClick={onClick}
          style={styleObject}
          target={target}
          {...props}
        >
          {children}
        </a>
      )}

      {!isExternalUrl && (
        <LinkImport params={params} route={to} {...props}>
          {/* eslint-disable jsx-a11y/no-static-element-interactions */}
          {/* eslint-disable jsx-a11y/click-events-have-key-events */}
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a
            className={className}
            onClick={onClick}
            style={styleObject}
            target={target}
          >
            {children}
          </a>
          {/* eslint-enable jsx-a11y/anchor-is-valid */}
          {/* eslint-enable jsx-a11y/click-events-have-key-events */}
          {/* eslint-enable jsx-a11y/no-static-element-interactions */}
        </LinkImport>
      )}
    </React.Fragment>
  );
};

// eslint-disable-next-line immutable/no-mutation
Link.defaultProps = {
  className: undefined,
  onClick: undefined,
  params: {},
  style: {},
  target: undefined,
};

export default Link;
