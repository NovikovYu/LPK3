"use strict";
exports.__esModule = true;
var React = require("react");
var useMediaQuery_1 = require("@mui/material/useMediaQuery");
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var style_home_1 = require("@/feature/style-home");
var confirm_email_img_1 = require("@/components/img/confirm-email-img");
var ChangePasswordMessage = function () {
    var theme = styles_1.useTheme();
    var isMobile = useMediaQuery_1["default"](theme.breakpoints.down('sm'));
    var ButtonSize = isMobile ? 'medium' : 'large';
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.GlobalStyles, { styles: {
                body: { backgroundColor: theme.palette.grey[100] }
            } }),
        React.createElement(style_home_1.ConfirmEmailBoxWrapperRestyle, null,
            React.createElement(style_home_1.ConfirmEmailBoxRestyle, null,
                React.createElement(style_home_1.ConfirmEmailContentWrapperRestyle, null,
                    React.createElement(style_home_1.ConfirmEmailImgWrapperRestyle, null,
                        React.createElement(confirm_email_img_1["default"], null)),
                    React.createElement(style_home_1.ConfirmEmailHeadingRestyle, null, "Confirm your email"),
                    React.createElement(style_home_1.ConfirmEmailMessageRestyle, null, "We sent an email to mymailverylongnameforexample@mail.com Until you confirm the email, you will not be able to use some of the functionality of the platform"),
                    React.createElement(style_home_1.ConfirmEmailButtonRestyle, { id: "confirm-email-button", variant: "contained", size: ButtonSize, href: "/" }, "OK, I'll confirm"))))));
};
exports["default"] = ChangePasswordMessage;
