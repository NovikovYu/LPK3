"use strict";
exports.__esModule = true;
var React = require("react");
var useMediaQuery_1 = require("@mui/material/useMediaQuery");
var styles_1 = require("@mui/material/styles");
var style_home_1 = require("@/feature/style-home");
var style_sign_up_form_1 = require("@/feature/sign-up/style-sign-up-form");
var ChangePasswordMessage = function () {
    var theme = styles_1.useTheme();
    var isMobile = useMediaQuery_1["default"](theme.breakpoints.down('sm'));
    var ButtonSize = isMobile ? 'small' : 'large';
    return (React.createElement(style_home_1.ChangePasswordMessageBox, null,
        React.createElement(style_home_1.ChangePasswordMessageHeading, null, "Password was changed"),
        React.createElement(style_sign_up_form_1.MessageRestyled, null, "Password changed successfully. Sign In"),
        React.createElement(style_home_1.ChangePasswordButtonStyle, { type: "submit", id: "change-password-form-button", variant: "contained", fullWidth: true, size: ButtonSize, href: "/" }, "sign in")));
};
exports["default"] = ChangePasswordMessage;
