import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    custom: {
        spacing: {
        }
    },
    navigation: {
        width: 250
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: {
            contrastText: '#0F223C',
            dark: '#203654',
            light: '#708198',
            main: '#344966'
        },
        secondary: {
            contrastText: '#A06700',
            dark: '#CA8302',
            light: '#FFCB6E',
            main: '#FAA916'
        },
        text: {
            primary: '#fff',
            secondary: 'gray',
        }
    }
});

export default theme;