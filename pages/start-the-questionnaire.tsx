import { Container } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';

export default function StartTheQuestionnaire() {
  return (
    <Layout pageTitle={'Lintu - start the questionnaire page'}>
      <MainBox component="main">
        <Container sx={{ maxWidth: '808px' }} maxWidth={false}>
          <InfoPageContent
            imgSrc={'/business-product-planning-and-research.png'}
            imgAlt={
              'our analytics are thinking about the best investment strategy for you'
            }
            titleText={'Creating a new investment portfolio'}
            mainText={
              "Answer 38 questions and we'll create a unique, personalized portfolio for you"
            }
            buttonText={'Start the questionnaire'}
            buttonLink={'/survey'}
          />
        </Container>
      </MainBox>
    </Layout>
  );
}
