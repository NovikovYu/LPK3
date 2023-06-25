import {
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  P,
} from "../CommonComponents/Common-сomponents-style";

export const InfoPageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "560px",
  margin: "0 auto",
  padding: "32px 12px",
  backgroundColor: "#FFFFFF",
  boxShadow:
    "0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)",
  borderRadius: "4px",

  [theme.breakpoints.up("sm")]: {
    padding: "48px 40px",
  },

  [theme.breakpoints.up("md")]: {
    maxWidth: "760px",
    padding: "48px 140px",
  },
}));

export const InfoPageImgWrapper = styled(Typography)(({ theme }) => ({
  marginBottom: "12px",
}));

export const InfoPageTitle = styled(Typography)(({ theme }) => ({
  marginTop: "0",
  marginBottom: "8px",
  color: "#18204A",
  fontSize: "20px",
  lineHeight: "1.35",
  fontWeight: "600",
  textAlign: "center",

  [theme.breakpoints.up("lg")]: {
    fontSize: "24px",
  },
}));

export const InfoPageText = styled(P)(({ theme }) => ({
  marginBottom: "32px",
  textAlign: "center",
}));
