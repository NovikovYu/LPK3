"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var material_1 = require("@mui/material");
var Common__omponents_style_1 = require("@/components/CommonComponents/Common-\u0441omponents-style");
var info_page_content_1 = require("@/components/Info-page/info-page-content");
function ConfirmYourEmail() {
    return (React.createElement(Common__omponents_style_1.MainBox, { component: "main" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Lintu - \u0441onfirm Email page")),
        React.createElement(material_1.Container, { sx: { maxWidth: '808px' }, maxWidth: false },
            React.createElement(info_page_content_1["default"], { imgSrc: '/checking-info.png', imgAlt: 'our analytic is ckecking each users', titleText: 'Confirm your email', mainText: "We sent an email to " + 'mymailverylongnameforexample@mail.com' + "\n              Until you confirm the email, you will not be able to use some of the functionality of the platform", buttonText: "OK, I'll confirm", buttonLink: '/portfolios' }))));
}
exports["default"] = ConfirmYourEmail;
