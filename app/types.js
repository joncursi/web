/**
 * @flow
 * @prettier
 */

export type ContextFlowType = {
  asPath: string,
  err?: Object,
  jsonPageRes: Object,
  pathname: string,
  query: Object,
  req: {
    headers: Object,
    url: string,
  },
  res: Object,
};

export type UrlFlowType = {
  asPath: string,
  back: Function,
  pathname: string,
  push: Function,
  pushTo: Function,
  query: Object,
  replace: Function,
  replaceTo: Function,
};
