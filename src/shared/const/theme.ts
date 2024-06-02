import { ThemeOptions } from "@mui/material";

export enum Theme {
  LIGHT = 'app_light_theme',
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    success: {
      main: "#00CC99"
    },
    error: {
      main: "#FC440F"
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 10px rgba(0, 0, 0, .15)",
        }
      },
    },
  },
};
