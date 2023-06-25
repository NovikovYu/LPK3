import Head from "next/head";
import * as React from "react";
import {  Container } from "@mui/material";
import Layout from "@/components/Layout/Layout";
import {
  PortfoliosTitle,
  PortfoliosSubtitle,
  PortfolioCardTitle,
  PortfolioCardsList,
  PortfolioCardItem,
  PortfolioCardSubtitle,
  PortfolioCardNumbersWrapper,
  PortfolioCardNumbersColumnRight,
  PortfolioCardNumbersColumnLeft,
  PortfolioCardAssentTitle,
  PrimaryButtonForPortfolioCard,
  SecondaryButtonForPortfolioCard,
} from "../components/Portfolios/Portfolios-style";
import { MainBox, P } from "@/components/CommonComponents/Common-сomponents-style";

export default function Portfolios() {
  return (
    <Layout>
      <Head>
        <title>Lintu</title>
        <meta name="description" content="Lintu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainBox component="main">
        <Container sx={{ maxWidth: "808px" }} maxWidth={false}>
          <PortfoliosTitle variant="h1">Portfolios</PortfoliosTitle>

          <PortfoliosSubtitle>
            Here are all your created portfolios and all the analytics about
            them
          </PortfoliosSubtitle>

          <PortfolioCardsList component="ul">
            <PortfolioCardItem component="li">
              <PortfolioCardTitle variant="h2">
                Create new portfolio
              </PortfolioCardTitle>

              <PortfolioCardSubtitle>
                Take the questionnaire and create a new portfolio
              </PortfolioCardSubtitle>

              <SecondaryButtonForPortfolioCard
                type="button"
                fullWidth
                size="small"
                variant="contained"
                href="/start-the-questionnaire"
              >
                take a survey
              </SecondaryButtonForPortfolioCard>
            </PortfolioCardItem>

            <PortfolioCardItem component="li">
              <PortfolioCardNumbersWrapper>
                <PortfolioCardNumbersColumnLeft>
                  <PortfolioCardTitle>€ 2 456</PortfolioCardTitle>
                  <P variant="h2">Portfolio 1</P>
                </PortfolioCardNumbersColumnLeft>

                <PortfolioCardNumbersColumnRight>
                  <PortfolioCardAssentTitle>+12%</PortfolioCardAssentTitle>
                  <P>per 1 year</P>
                </PortfolioCardNumbersColumnRight>
              </PortfolioCardNumbersWrapper>

              <SecondaryButtonForPortfolioCard
                type="button"
                fullWidth
                size="small"
                variant="contained"
                href="/"
              >
                details
              </SecondaryButtonForPortfolioCard>
            </PortfolioCardItem>

            <PortfolioCardItem component="li">
              <PortfolioCardTitle variant="h2">
                Portfolio is incomplete
              </PortfolioCardTitle>

              <PortfolioCardSubtitle>
                Finish the portfolio questionnaire
              </PortfolioCardSubtitle>

              <PrimaryButtonForPortfolioCard
                type="button"
                fullWidth
                size="small"
                variant="contained"
                href="/"
              >
                Continue
              </PrimaryButtonForPortfolioCard>
            </PortfolioCardItem>
          </PortfolioCardsList>
        </Container>
      </MainBox>
    </Layout>
  );
}
