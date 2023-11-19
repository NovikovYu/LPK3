import { FC } from 'react';

import { useRouter } from 'next/navigation';

import {
  PortfolioCardItem,
  PortfolioCardTitle,
  PortfolioCardSubtitle,
  PrimaryButtonForPortfolioCard,
} from './Portfolios-style';

interface IProps {
  id: string;
}

// toDo
// когда появятся данные по готовым портфолио (описания), заменить это компонент подробными карточками портфолио
const CompletedButEmptyPortfolioCardItem: FC<IProps> = ({ id }) => {
  const router = useRouter();

  const continueQuestionnaire = () => {
    // router.push(`/portfolio/${id}`);
    router.push(`/portfolio`);
  };

  return (
    <PortfolioCardItem>
      <PortfolioCardTitle variant="h2">Completed portfolio</PortfolioCardTitle>

      <PortfolioCardSubtitle>
        Find out the portfolio details
      </PortfolioCardSubtitle>

      <PrimaryButtonForPortfolioCard
        type="button"
        fullWidth
        size="small"
        variant="contained"
        onClick={continueQuestionnaire}
      >
        details
      </PrimaryButtonForPortfolioCard>
    </PortfolioCardItem>
  );
};

export default CompletedButEmptyPortfolioCardItem;
