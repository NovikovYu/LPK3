import Head from "next/head";
import * as React from "react";
import { Container } from "@mui/material";
import Layout from "@/components/Layout/Layout";
import {
  MainBox,
} from "@/components/CommonComponents/Common-сomponents-style";
import InfoPageContent from "@/components/Info-page/info-page-content";

export default function StartTheQuestionnaire() {
  return (
    <Layout>
      <Head>
        <title>Lintu</title>
        <meta name="description" content="Lintu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainBox component="main">
        <Container sx={{ maxWidth: "808px" }} maxWidth={false}>
          <InfoPageContent
            imgSrc={"/business-product-planning-and-research.png"}
            imgAlt={
              "our analytics are thinking about the best investment strategy for you"
            }
            titleText={"Creating a new investment portfolio"}
            mainText={"Answer 38 questions and we'll create a unique, personalized portfolio for you"}
            buttonText={"Start the questionnaire"}
            buttonLink={"/survey"}
          />
        </Container>
      </MainBox>
    </Layout>
  );
}
