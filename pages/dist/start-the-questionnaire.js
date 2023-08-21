"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var material_1 = require("@mui/material");
var Common__omponents_style_1 = require("@/components/CommonComponents/Common-\u0441omponents-style");
var info_page_content_1 = require("@/components/Info-page/info-page-content");
function StartTheQuestionnaire() {
    return (React.createElement(Common__omponents_style_1.MainBox, { component: "main" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Lintu - Start the questionnaire")),
        React.createElement(material_1.Container, { sx: { maxWidth: '808px' }, maxWidth: false },
            React.createElement(info_page_content_1["default"], { imgSrc: '/business-product-planning-and-research.png', imgAlt: 'our analytics are thinking about the best investment strategy for you', titleText: 'Creating a new investment portfolio', mainText: "Answer 38 questions and we'll create a unique, personalized portfolio for you", buttonText: 'Start the questionnaire', buttonLink: '/survey' }))));
}
exports["default"] = StartTheQuestionnaire;
