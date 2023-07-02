import { Container } from "@mui/material";
import Layout from "@/components/Layout/Layout";
import {
  PortfoliosTitle,
  PortfoliosSubtitle,
  PortfolioCardTitle,
  PortfolioCardsList,
  PortfolioCardItem,
  PortfolioCardSubtitle,
  SecondaryButtonForPortfolioCard,
} from "../components/Portfolios/Portfolios-style";
import { MainBox } from "@/components/CommonComponents/Common-сomponents-style";
import IncompletedPortfolioCardItem from "@/components/Portfolios/Incompleted-portfolio-card-item copy";
import CompletedPortfolioCardItem from "@/components/Portfolios/Completed-portfolio-card-item";

const completedPortfolios = [
  {
    currency: "€",
    amount: 2456,
    number: 1,
    profitability: 12,
    link: "/sdfsdf",
  },
  {
    currency: "€",
    amount: 9481,
    number: 2,
    profitability: -1,
    link: "/sdfsdf",
  },
];

const inCompletedPortfolios = [
  {
    link: "/sdfsdf",
  },
  {
    link: "/sdfsdf",
  },
];

export default function Portfolios() {
  return (
    <Layout pageTitle={"Lintu - portfolios page"}>
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

            {completedPortfolios.map((portfolio) => {
              return (
                <CompletedPortfolioCardItem
                  currency={portfolio.currency}
                  amount={portfolio.amount}
                  number={portfolio.number}
                  profitability={portfolio.profitability}
                  link={portfolio.link}
                />
              );
            })}

            {inCompletedPortfolios.map((portfolio) => {
              return <IncompletedPortfolioCardItem link={portfolio.link} />;
            })}
          </PortfolioCardsList>
        </Container>
      </MainBox>
    </Layout>
  );
}
