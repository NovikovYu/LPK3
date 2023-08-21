"use strict";
exports.__esModule = true;
var react_1 = require("react");
var head_1 = require("next/head");
var lodash_1 = require("lodash");
var material_1 = require("@mui/material");
var Common__omponents_style_1 = require("@/components/CommonComponents/Common-\u0441omponents-style");
var Survey_style_1 = require("@/components/Survey/Survey-style");
var Question_1 = require("@/components/Survey/Question");
var questions = [
    {
        partName: 'Intoroduction part',
        quesionsArray: [
            {
                question: 'How is it going?11',
                answers: ['it could be better', 'fine', 'great'],
                multiple: true
            },
            {
                question: 'How old are you?12',
                answers: [
                    'I am in my early adulthood',
                    'I am in my mid adulthood',
                    'I am in my late adulthood',
                ],
                multiple: true
            },
            {
                question: 'How much do you worry about uncertainty?13',
                answers: [
                    'I constantly feel anxious and worry about uncertainty',
                    'I occasionally experience worry and concern about uncertainty',
                    'I rarely feel concerned or worried about uncertainty',
                ],
                multiple: false
            },
        ]
    },
    {
        partName: 'Risk tollerance test',
        quesionsArray: [
            {
                question: 'How is it going?21',
                answers: ['it could be better', 'fine', 'great'],
                multiple: false
            },
            {
                question: 'How old are you?22',
                answers: [
                    'I am in my early adulthood',
                    'I am in my mid adulthood',
                    'I am in my late adulthood',
                ],
                multiple: false
            },
            {
                question: 'How much do you worry about uncertainty?23',
                answers: [
                    'I constantly feel anxious and worry about uncertainty',
                    'I occasionally experience worry and concern about uncertainty',
                    'I rarely feel concerned or worried about uncertainty',
                ],
                multiple: false
            },
            {
                question: 'How much do you worry about uncertainty?24',
                answers: [
                    'I constantly feel anxious and worry about uncertainty',
                    'I occasionally experience worry and concern about uncertainty',
                    'I rarely feel concerned or worried about uncertainty',
                ],
                multiple: false
            },
        ]
    },
];
function Survey() {
    var _a;
    var _b = react_1.useState(0), currentQuestion = _b[0], setCurrentQuestion = _b[1];
    var _c = react_1.useState(0), currentPart = _c[0], setCurrentPart = _c[1];
    var _d = react_1.useState([[], []]), answers = _d[0], setAnswers = _d[1];
    var goNext = function () {
        if (currentQuestion < questions[currentPart].quesionsArray.length - 1) {
            setCurrentQuestion(function (value) { return value + 1; });
        }
        else {
            if (currentPart < questions.length - 1) {
                setCurrentPart(function (value) { return value + 1; });
                setCurrentQuestion(0);
            }
            else {
                alert('Опрос закончен!' + JSON.stringify(answers));
            }
        }
    };
    var goBack = function () {
        if (currentQuestion > 0) {
            setCurrentQuestion(function (value) { return value - 1; });
        }
        else {
            if (currentPart > 0) {
                setCurrentPart(function (value) { return value - 1; });
                setCurrentQuestion(questions[currentPart - 1].quesionsArray.length - 1);
            }
            else {
                console.error('Кнопка НАЗАД не должна была сработать...');
            }
        }
    };
    var updateAnswers = function (answer) {
        var newAnswers = lodash_1.cloneDeep(answers);
        newAnswers[currentPart][currentQuestion] = answer;
        setAnswers(newAnswers);
    };
    return (React.createElement(Common__omponents_style_1.MainBox, { component: "main" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Lintu - survey page")),
        React.createElement(material_1.Container, { sx: { maxWidth: '808px' }, maxWidth: false },
            React.createElement(Survey_style_1.SurvayWrapper, null,
                React.createElement(Survey_style_1.SurvayPartTitleWrapper, null,
                    React.createElement(Survey_style_1.SurvayPartTitleTitle, { variant: "h1" },
                        "Part ",
                        currentPart + 1,
                        " of ",
                        questions.length,
                        ":",
                        ' ',
                        questions[currentPart].partName),
                    React.createElement(Common__omponents_style_1.P, null, "If you exit, the answers are saved. You can always come back and take the test to the end. There are a total of 38 questions in the question. Answer thoughtfully to get the best result")),
                React.createElement(Survey_style_1.SurvayPartQuestionsWrapper, null,
                    React.createElement(Survey_style_1.SurvayPartQuestionsCounter, null,
                        "Question ",
                        currentQuestion + 1,
                        " of",
                        questions[currentPart].quesionsArray.length),
                    React.createElement(Question_1["default"], { question: questions[currentPart].quesionsArray[currentQuestion], answer: (_a = answers[currentPart][currentQuestion]) !== null && _a !== void 0 ? _a : null, goNext: goNext, goBack: goBack, updateAnswers: updateAnswers, disableGoBackBtn: currentPart === 0 && currentQuestion === 0 }))))));
}
exports["default"] = Survey;
