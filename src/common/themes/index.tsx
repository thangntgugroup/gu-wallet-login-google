import { createTheme, ThemeProvider } from '@material-ui/core';
import {
  ALICE_BLUE_2_COLOR,
  BLACK_COLOR,
  COMET_COLOR,
  ECLIPSE_COLOR,
  NIGHT_RIDER_2_COLOR,
  NOBEL_COLOR,
  WHITE_COLOR,
} from '../constants/colors';
import { useDisplayUiMode } from '../hooks/useDisplayUiMode';
import React from 'react';
import { DisplayUiModeType } from '../objects/object-types';

export const defaultTheme = createTheme({
  typography: {
    fontFamily: 'inherit',
  },
});

export const generateTheme = (mode: DisplayUiModeType) => {
  return mode === DisplayUiModeType.Dark
    ? createTheme({
        typography: {
          fontFamily: 'inherit',
        },
        palette: {
          type: 'dark',
          background: {
            default: NIGHT_RIDER_2_COLOR,
            paper: ECLIPSE_COLOR,
          },
          text: {
            primary: WHITE_COLOR,
            secondary: NOBEL_COLOR,
          },
        },
      })
    : createTheme({
        typography: {
          fontFamily: 'inherit',
        },
        palette: {
          type: 'light',
          background: {
            default: ALICE_BLUE_2_COLOR,
            paper: WHITE_COLOR,
          },
          text: {
            primary: BLACK_COLOR,
            secondary: COMET_COLOR,
          },
        },
      });
};

interface Props {}

export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const displayUiMode = useDisplayUiMode();
  const theme = generateTheme(displayUiMode);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
