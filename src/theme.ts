import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        allVariants: {
            color: "#0F1727"
        },
        "fontFamily": `"Kotori Rose"`,
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            }
        },
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Kotori Rose';
        }
      `,
        },
    }
});
export default theme;