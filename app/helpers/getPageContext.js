/**
 * @flow
 * @prettier
 */

import {
  createGenerateClassName,
  createMuiTheme,
} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { SheetsRegistry } from 'jss';

import COLORS from '../constants/colors';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      dark: red[700],
      light: red[300],
      main: red[500],
    },
    secondary: {
      dark: COLORS.WHITE,
      light: COLORS.WHITE,
      main: COLORS.WHITE,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const createPageContext = (): Object => {
  return {
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    theme,
  };
};

let pageContext;

const getPageContext = (): Object | null => {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
};

export default getPageContext;
