import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect } from "react";
import { Checkbox, FormGroup } from "@mui/material";
import {
  SurvayAnswersWrapper,
  SurvayButtonsWrapper,
  SurvayQuestion,
} from "./Survey-style";
import {
  SecondaryButton,
  PrimaryButton,
} from "../CommonComponents/Common-сomponents-style";

interface IProps {
  question: {
    question: string;
    answers: string[];
    multiple: boolean;
  };
  answer: string[] | null;
  goNext: () => void;
  goBack: () => void;
  updateAnswers: (answer: string[]) => void;
  disableGoBackBtn: boolean;
}

const Question = ({
  question,
  answer,
  goNext,
  goBack,
  updateAnswers,
  disableGoBackBtn,
}: IProps) => {
  const [value, setValue] = React.useState<string[]>([]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue([(event.target as HTMLInputElement).value]);
  };
  const handleCheckboxChange = (i: number) => {
    const newAnswer = String(i);
    let oldAnswers = [...value];
    if (oldAnswers.includes(newAnswer)) {
      const index = oldAnswers.indexOf(newAnswer);
      oldAnswers.splice(index, 1);
    } else {
      oldAnswers.push(newAnswer);
    }
    setValue(oldAnswers);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateAnswers(value);
    setValue([]);
    goNext();
  };

  useEffect(() => {
    if (answer !== null) {
      setValue(answer);
    }
  }, [answer]);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <SurvayQuestion>{question.question}</SurvayQuestion>

        {!question.multiple ? (
          <SurvayAnswersWrapper>
            <RadioGroup value={value} onChange={handleRadioChange}>
              {question.answers.map((answer, i) => (
                <FormControlLabel
                  key={answer}
                  value={i}
                  control={<Radio />}
                  label={answer}
                />
              ))}
            </RadioGroup>
          </SurvayAnswersWrapper>
        ) : (
          <SurvayAnswersWrapper>
            <FormGroup>
              {question.answers.map((answer, i) => (
                <FormControlLabel
                  key={answer}
                  control={
                    <Checkbox
                      checked={value.includes(String(i))}
                      onChange={() => handleCheckboxChange(i)}
                    />
                  }
                  label={answer}
                />
              ))}
            </FormGroup>
          </SurvayAnswersWrapper>
        )}

        <SurvayButtonsWrapper>
          <SecondaryButton
            type="button"
            size="large"
            variant="contained"
            onClick={goBack}
            disabled={disableGoBackBtn}
          >
            Previous
          </SecondaryButton>

          <PrimaryButton
            type="submit"
            size="large"
            variant="contained"
            disabled={value.length === 0}
          >
            next
          </PrimaryButton>
        </SurvayButtonsWrapper>
      </FormControl>
    </form>
  );
};

export default Question;
