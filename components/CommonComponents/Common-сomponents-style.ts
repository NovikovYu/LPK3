import {
  Box,
  Button,
  ButtonProps,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: "uppercase",
  backgroundColor: "#0C6748",
  color: "#ffffff",
}));

export const SecondaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: "uppercase",
  backgroundColor: "#DDE1EE",
  color: "rgba(0, 0, 0, 0.87)",
}));

export const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F0F3FA",
  paddingTop: "80px",
  paddingBottom: "36px",
  minHeight: "100vh",

  [theme.breakpoints.up("sm")]: {
    paddingTop: "88px",
  },

  [theme.breakpoints.up("lg")]: {
    paddingTop: "128px",
  },
}));

export const P = styled(Typography)(({ theme }) => ({
  marginTop: "0",
  marginBottom: "0",
  color: "#586691",
  fontSize: "14px",
  lineHeight: "1.6",
  letterSpacing: "0.1px",
  fontWeight: 400,
}));
