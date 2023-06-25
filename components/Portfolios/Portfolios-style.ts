import {
  Box,
  ButtonProps,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  PrimaryButton,
  SecondaryButton,
  P,
} from "../CommonComponents/Common-сomponents-style";

export const PrimaryButtonForPortfolioCard = styled(PrimaryButton)<ButtonProps>(
  ({ theme }) => ({
    marginTop: "auto",
    textTransform: "uppercase",
  })
);

export const SecondaryButtonForPortfolioCard = styled(
  SecondaryButton
)<ButtonProps>(({ theme }) => ({
  marginTop: "auto",
  textTransform: "uppercase",
}));

export const PortfoliosTitle = styled(Typography)(({ theme }) => ({
  marginTop: "0",
  marginBottom: "8px",
  color: "#18204A",
  fontSize: "24px",
  lineHeight: "1.2",
  fontWeight: "600",

  [theme.breakpoints.up("lg")]: {
    fontSize: "34px",
  },
}));

export const PortfolioCardTitle = styled(Typography)(({ theme }) => ({
  marginTop: "0",
  marginBottom: "0",
  color: "#18204A",
  fontSize: "20px",
  lineHeight: "1.35",
  fontWeight: "600",

  [theme.breakpoints.up("lg")]: {
    fontSize: "24px",
  },
}));

export const PortfolioCardAssentTitle = styled(PortfolioCardTitle)(
  ({ theme }) => ({
    color: "#4CAF50",
  })
);

export const PortfolioCardNumbersColumnLeftTitle = styled(Typography)(
  ({ theme }) => ({
    marginTop: "0",
    marginBottom: "0",
    color: "#18204A",
    fontSize: "20px",
    fontWeight: "600",

    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    },
  })
);

export const PortfoliosSubtitle = styled(P)(({ theme }) => ({
  marginTop: "0",
  marginBottom: "24px",
  color: "#586691",
  fontSize: "14px",

  [theme.breakpoints.up("lg")]: {
    marginBottom: "32px",
  },
}));

export const PortfolioCardSubtitle = styled(P)(({ theme }) => ({
  marginTop: "0",
  marginBottom: "24px",
  color: "#586691",
  fontSize: "14px",
}));

export const PortfolioCardsList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "26px",
  margin: "0",
  padding: "0",
  listStyle: "none",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "stretch",
  },
}));

export const PortfolioCardItem = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "368px",
  padding: "24px 16px",
  backgroundColor: theme.palette.common.white,
  boxShadow:
    "0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)",
  borderRadius: "4px",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
    width: "calc(50% - 13px)",
  },
}));

export const PortfolioCardNumbersWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "24px",
  display: "flex",
  justifyContent: "space-between",
}));

export const PortfolioCardNumbersColumnRight = styled(Box)(({ theme }) => ({
  textAlign: "right",
}));

export const PortfolioCardNumbersColumnLeft = styled(Box)(({ theme }) => ({
  textAlign: "left",
}));
