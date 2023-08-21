"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var material_1 = require("@mui/material");
require("typeface-inter");
require("@/styles/globals.css");
var layout_1 = require("@/components/Layout/layout");
var LinkBehaviour = react_1.forwardRef(function LinkBehaviour(props, ref) {
    return React.createElement(link_1["default"], __assign({ ref: ref }, props));
});
var theme = material_1.createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour
            }
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour
            }
        }
    },
    palette: {
        primary: {
            main: '#0C6748',
            dark: '#084530',
            light: '#0E7B56',
            contrastText: '#fff'
        },
        secondary: {
            main: '#9C27B0',
            dark: '#7B1FA2',
            light: '#BA68C8',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
        error: {
            main: '#D32F2F',
            dark: '#C62828',
            light: '#EF5350',
            contrastText: '#fff'
        },
        text: {
            primary: '#18204A',
            secondary: '#586691',
            disabled: '#989FB9'
        },
        grey: {
            50: '#F8F9FD',
            100: '#F0F3FA',
            200: '#DDE1EE',
            300: '#DDE1EE',
            400: '#989FB9',
            500: '#586691',
            600: '#18204A',
            700: '#0E122A',
            800: '#090C1B',
            900: '#05070F',
            A100: '#D5D5D5',
            A200: '#AAAAAA',
            A400: '#616161',
            A700: '#303030'
        },
        background: {
            "default": '#F0F3FA'
        },
        action: {
            hover: 'rgba(12, 103, 72, 0.05)'
        }
    },
    typography: {
        fontFamily: 'Inter',
        h1: {
            fontWeight: 600,
            fontSize: 96,
            letterSpacing: -1.5
        },
        h2: {
            fontWeight: 600,
            fontSize: 60,
            letterSpacing: -0.5
        },
        h3: {
            fontWeight: 600,
            fontSize: 48,
            letterSpacing: '116.7%'
        },
        h4: {
            fontWeight: 600,
            fontSize: 34,
            letterSpacing: '123.5%'
        },
        h5: {
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: '133.4%'
        },
        h6: {
            fontWeight: 600,
            fontSize: 20,
            letterSpacing: '160%'
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: 20,
            letterSpacing: '160%'
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 14,
            letterSpacing: '157%',
            lineHeight: '157%'
        },
        body1: {
            fontWeight: 400,
            fontSize: 16,
            letterSpacing: '150%'
        },
        body2: {
            fontWeight: 400,
            fontSize: 14,
            letterSpacing: '143%'
        },
        caption: {
            fontWeight: 400,
            fontSize: 12,
            letterSpacing: '166%'
        },
        overline: {
            fontWeight: 400,
            fontSize: 12,
            letterSpacing: '266%',
            textTransform: 'uppercase'
        }
    },
    breakpoints: {
        values: {
            xs: 444,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
});
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(material_1.ThemeProvider, { theme: theme },
        React.createElement(layout_1["default"], null,
            React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = App;
