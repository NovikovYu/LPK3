"use strict";
exports.__esModule = true;
var React = require("react");
var head_1 = require("next/head");
var material_1 = require("@mui/material");
var useMediaQuery_1 = require("@mui/material/useMediaQuery");
var styles_1 = require("@mui/material/styles");
function Home() {
    var theme = styles_1.useTheme();
    var isMatchLg = useMediaQuery_1["default"](theme.breakpoints.up('lg'));
    return (React.createElement("main", null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Lintu - main page")),
        isMatchLg && React.createElement(material_1.Container, { maxWidth: "lg" }),
        React.createElement(material_1.Container, { maxWidth: "sm" })));
}
exports["default"] = Home;
