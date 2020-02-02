/**
 * @prettier
 */

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import COLORS from '~/constants/colors';

export default createMuiTheme({
  palette: {
    primary: {
      dark: red[700],
      light: red[300],
      main: red[500],
    },
    secondary: {
      main: COLORS.WHITE,
    },
  },
});
