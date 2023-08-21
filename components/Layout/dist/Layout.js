"use strict";
exports.__esModule = true;
var react_1 = require("react");
var head_1 = require("next/head");
var Modal_form_1 = require("./Modal-form");
var header_1 = require("./header");
var RootLayout = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), openFormSignInModal = _b[0], setOpenFormSignInModal = _b[1];
    var handleOpenSignInModal = function () {
        setOpenFormSignInModal(true);
    };
    var handleCloseSignInModal = function () {
        setOpenFormSignInModal(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Lintu - main page"),
            React.createElement("meta", { name: "description", content: 'Page of Lintu progect' }),
            React.createElement("meta", { name: "keywords", content: 'Lintu, investments, finance, shares' }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" })),
        React.createElement(header_1["default"], { handleOpenSignInModal: handleOpenSignInModal }),
        children,
        React.createElement("footer", null),
        React.createElement(Modal_form_1["default"], { handleCloseSignInModal: handleCloseSignInModal, openFormSignInModal: openFormSignInModal })));
};
exports["default"] = RootLayout;
