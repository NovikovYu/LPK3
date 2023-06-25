import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { P } from "../CommonComponents/Common-сomponents-style";

export const SurvayWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const SurvayInner = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow:
    "0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)",
  borderRadius: "4px",
}));

export const SurvayPartTitleWrapper = styled(SurvayInner)(({ theme }) => ({
  marginBottom: "16px",
  padding: "32px 12px",

  [theme.breakpoints.up("md")]: {
    padding: "24px 32px",
  },
}));

export const SurvayPartQuestionsWrapper = styled(SurvayInner)(({ theme }) => ({
  padding: "32px 12px",

  [theme.breakpoints.up("md")]: {
    padding: "32px 32px",
  },
}));

export const SurvayPartTitleTitle = styled(P)(({ theme }) => ({
  marginTop: "0",
  color: "#18204A",
  fontSize: "20px",
  lineHeight: "1.35",
  fontWeight: "600",

  [theme.breakpoints.up("lg")]: {
    fontSize: "24px",
  },
}));

export const SurvayPartQuestionsCounter = styled(P)(({ theme }) => ({
  marginBottom: "16px",
  color: "#0C6748",
}));

export const SurvayQuestion = styled(P)(({ theme }) => ({
  marginBottom: "16px",
  color: "#18204A",

  [theme.breakpoints.up("lg")]: {
    fontSize: "18px",
  },
}));
export const SurvayAnswer = styled(P)(({ theme }) => ({
  marginBottom: "16px",
  color: "#18204A",

  [theme.breakpoints.up("lg")]: {
    fontSize: "16px",
  },
}));

export const SurvayAnswersWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "24px",

  [theme.breakpoints.up("lg")]: {
    marginBottom: "32px",
  },
}));

export const SurvayButtonsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
}));
