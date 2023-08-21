"use strict";
exports.__esModule = true;
exports.P = exports.MainBox = exports.SecondaryButton = exports.PrimaryButton = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
exports.PrimaryButton = styles_1.styled(material_1.Button)(function (_a) {
    var theme = _a.theme;
    return ({
        textTransform: 'uppercase',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    });
});
exports.SecondaryButton = styles_1.styled(material_1.Button)(function (_a) {
    var theme = _a.theme;
    return ({
        textTransform: 'uppercase',
        backgroundColor: theme.palette.grey['200'],
        color: theme.palette.secondary.contrastText
    });
});
exports.MainBox = styles_1.styled(material_1.Box)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            backgroundColor: theme.palette.grey['100'],
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(4.5),
            minHeight: '100vh'
        },
        _b[theme.breakpoints.up('sm')] = {
            paddingTop: theme.spacing(11)
        },
        _b[theme.breakpoints.up('lg')] = {
            paddingTop: theme.spacing(16)
        },
        _b);
});
exports.P = styles_1.styled(material_1.Typography)(function (_a) {
    var theme = _a.theme;
    return ({
        marginTop: '0',
        marginBottom: '0',
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize,
        lineHeight: '1.6',
        letterSpacing: '0.1px',
        fontWeight: theme.typography.body1.fontWeight
    });
});
