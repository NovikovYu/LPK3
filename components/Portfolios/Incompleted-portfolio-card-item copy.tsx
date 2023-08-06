import { FC } from 'react';
import {
  PortfolioCardItem,
  PortfolioCardTitle,
  PortfolioCardSubtitle,
  PrimaryButtonForPortfolioCard,
} from './Portfolios-style';

interface IProps {
  link: string;
}

const IncompletedPortfolioCardItem: FC<IProps> = ({ link }) => {
  return (
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
        href={link}
      >
        Continue
      </PrimaryButtonForPortfolioCard>
    </PortfolioCardItem>
  );
};

export default IncompletedPortfolioCardItem;
