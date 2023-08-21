"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var material_1 = require("@mui/material");
var Portfolios_style_1 = require("../components/Portfolios/Portfolios-style");
var Common__omponents_style_1 = require("@/components/CommonComponents/Common-\u0441omponents-style");
var Incompleted_portfolio_card_item_copy_1 = require("@/components/Portfolios/Incompleted-portfolio-card-item copy");
var Completed_portfolio_card_item_1 = require("@/components/Portfolios/Completed-portfolio-card-item");
var completedPortfolios = [
    {
        currency: '€',
        amount: 2456,
        number: 1,
        profitability: 12,
        link: '/sdfsdf'
    },
    {
        currency: '€',
        amount: 9481,
        number: 2,
        profitability: -1,
        link: '/sdfsdf'
    },
];
var inCompletedPortfolios = [
    {
        link: '/sdfsdf'
    },
    {
        link: '/sdfsdf'
    },
];
function Portfolios() {
    return (React.createElement(Common__omponents_style_1.MainBox, { component: "main" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Lintu - portfolios page")),
        React.createElement(material_1.Container, { sx: { maxWidth: '808px' }, maxWidth: false },
            React.createElement(Portfolios_style_1.PortfoliosTitle, { variant: "h1" }, "Portfolios"),
            React.createElement(Portfolios_style_1.PortfoliosSubtitle, null, "Here are all your created portfolios and all the analytics about them"),
            React.createElement(Portfolios_style_1.PortfolioCardsList, { component: "ul" },
                React.createElement(Portfolios_style_1.PortfolioCardItem, { component: "li" },
                    React.createElement(Portfolios_style_1.PortfolioCardTitle, { variant: "h2" }, "Create new portfolio"),
                    React.createElement(Portfolios_style_1.PortfolioCardSubtitle, null, "Take the questionnaire and create a new portfolio"),
                    React.createElement(Portfolios_style_1.SecondaryButtonForPortfolioCard, { type: "button", fullWidth: true, size: "small", variant: "contained", href: "/start-the-questionnaire" }, "take a survey")),
                completedPortfolios.map(function (portfolio) {
                    return (React.createElement(Completed_portfolio_card_item_1["default"], { currency: portfolio.currency, amount: portfolio.amount, number: portfolio.number, profitability: portfolio.profitability, link: portfolio.link, key: portfolio.number }));
                }),
                inCompletedPortfolios.map(function (portfolio) {
                    return (React.createElement(Incompleted_portfolio_card_item_copy_1["default"], { link: portfolio.link, key: portfolio.link }));
                })))));
}
exports["default"] = Portfolios;
