import Head from "next/head";
import * as React from "react";
import { Container } from "@mui/material";
import Layout from "@/components/Layout/Layout";
import {
  MainBox,
  P,
} from "@/components/CommonComponents/Common-сomponents-style";
import {
  SurvayWrapper,
  SurvayPartTitleWrapper,
  SurvayPartTitleTitle,
  SurvayPartQuestionsWrapper,
  SurvayPartQuestionsCounter,
} from "@/components/Survey/Survey-style";
import Question from "@/components/Survey/Question";
import { useState } from "react";
import { cloneDeep } from "lodash";

const questions = [
  {
    partName: "Intoroduction part",
    quesionsArray: [
      {
        question: "How is it going?11",
        answers: ["it could be better", "fine", "great"],
        multiple: true,
      },
      {
        question: "How old are you?12",
        answers: [
          "I am in my early adulthood",
          "I am in my mid adulthood",
          "I am in my late adulthood",
        ],
        multiple: true,
      },
      {
        question: "How much do you worry about uncertainty?13",
        answers: [
          "I constantly feel anxious and worry about uncertainty",
          "I occasionally experience worry and concern about uncertainty",
          "I rarely feel concerned or worried about uncertainty",
        ],
        multiple: false,
      },
    ],
  },

  {
    partName: "Risk tollerance test",
    quesionsArray: [
      {
        question: "How is it going?21",
        answers: ["it could be better", "fine", "great"],
        multiple: false,
      },
      {
        question: "How old are you?22",
        answers: [
          "I am in my early adulthood",
          "I am in my mid adulthood",
          "I am in my late adulthood",
        ],
        multiple: false,
      },
      {
        question: "How much do you worry about uncertainty?23",
        answers: [
          "I constantly feel anxious and worry about uncertainty",
          "I occasionally experience worry and concern about uncertainty",
          "I rarely feel concerned or worried about uncertainty",
        ],
        multiple: false,
      },
      {
        question: "How much do you worry about uncertainty?24",
        answers: [
          "I constantly feel anxious and worry about uncertainty",
          "I occasionally experience worry and concern about uncertainty",
          "I rarely feel concerned or worried about uncertainty",
        ],
        multiple: false,
      },
    ],
  },
];

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [currentPart, setCurrentPart] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<Array<Array<string>>>>([[], []]);

  const goNext = () => {
    if (currentQuestion < questions[currentPart].quesionsArray.length - 1) {
      setCurrentQuestion((value) => value + 1);
    } else {
      if (currentPart < questions.length - 1) {
        setCurrentPart((value) => value + 1);
        setCurrentQuestion(0);
      } else {
        alert("Опрос закончен!" + JSON.stringify(answers));
      }
    }
  };
  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((value) => value - 1);
    } else {
      if (currentPart > 0) {
        setCurrentPart((value) => value - 1);
        setCurrentQuestion(questions[currentPart - 1].quesionsArray.length - 1);
      } else {
        console.error("Кнопка НАЗАД не должна была сработать...");
      }
    }
  };

  const updateAnswers = (answer: string[]): void => {
    const newAnswers = cloneDeep(answers);
    newAnswers[currentPart][currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  return (
    <Layout>
      <Head>
        <title>Lintu - survay</title>
        <meta name="description" content="Lintu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainBox component="main">
        <Container sx={{ maxWidth: "808px" }} maxWidth={false}>
          <SurvayWrapper>
            <SurvayPartTitleWrapper>
              <SurvayPartTitleTitle variant="h1">
                Part {currentPart + 1} of {questions.length}:{" "}
                {questions[currentPart].partName}
              </SurvayPartTitleTitle>
              <P>
                If you exit, the answers are saved. You can always come back and
                take the test to the end. There are a total of 38 questions in
                the question. Answer thoughtfully to get the best result
              </P>
            </SurvayPartTitleWrapper>

            <SurvayPartQuestionsWrapper>
              <SurvayPartQuestionsCounter>
                Question {currentQuestion + 1} of
                {questions[currentPart].quesionsArray.length}
              </SurvayPartQuestionsCounter>

              <Question
                question={questions[currentPart].quesionsArray[currentQuestion]}
                answer={answers[currentPart][currentQuestion] ?? null}
                goNext={goNext}
                goBack={goBack}
                updateAnswers={updateAnswers}
                disableGoBackBtn={currentPart === 0 && currentQuestion === 0}
              />
            </SurvayPartQuestionsWrapper>
          </SurvayWrapper>
        </Container>
      </MainBox>
    </Layout>
  );
}
