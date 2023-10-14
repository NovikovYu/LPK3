import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { Container } from '@mui/material';
import {
  PortfoliosTitle,
  PortfoliosSubtitle,
  PortfolioCardTitle,
  PortfolioCardsList,
  PortfolioCardItem,
  PortfolioCardSubtitle,
  SecondaryButtonForPortfolioCard,
} from '../components/Portfolios/Portfolios-style';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import IncompletedPortfolioCardItem from '@/components/Portfolios/Incompleted-portfolio-card-item copy';
import CompletedPortfolioCardItem from '@/components/Portfolios/Completed-portfolio-card-item';
import { selectAccessKey } from '@/store/slices/sessionSlice';

const completedPortfolios = [
  {
    currency: '€',
    amount: 2456,
    number: 1,
    profitability: 12,
    link: '/sdfsdf',
  },
  {
    currency: '€',
    amount: 9481,
    number: 2,
    profitability: -1,
    link: '/sdfsdf',
  },
];

const inCompletedPortfolios = [
  {
    link: '/sdfsdf',
  },
  {
    link: '/sdfsdf',
  },
];

export default function Portfolios() {
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();

  useEffect(() => {
    if (!accessKey) {
      router.push('/');
    }
  }, [accessKey, router]);

  if (accessKey) {
    return (
        <MainBox component="main">
          <Head>
            <title>Lintu - portfolios page</title>
          </Head>
        
          <Container sx={{ maxWidth: '808px' }} maxWidth={false}>
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
                    key={portfolio.number}
                  />
                );
              })}

              {inCompletedPortfolios.map((portfolio) => {
                return (
                  <IncompletedPortfolioCardItem
                    link={portfolio.link}
                    key={portfolio.link}
                  />
                );
              })}
            </PortfolioCardsList>
          </Container>
        </MainBox>
    );
  }
}
