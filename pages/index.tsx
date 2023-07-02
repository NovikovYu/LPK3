import Head from 'next/head'
import * as React from 'react';
import {Container, Typography} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
  <>
      <Head>
        <title>Lintu</title>
        <meta name="description" content="Lintu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <main>
          {isMatchLg && 
            <Container maxWidth='lg'></Container>
          }   
            <Container maxWidth='sm'></Container>
        </main>
  </>
  )
    <Layout
      pageTitle={"Lintu - main page"}
      pageDescription={"Home Page of Lintu progect"}
      pageKeywords={"Lintu, investments, finance, shares"}
    >
      <main>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: 24 }}>Home Page</Typography>
        </Container>
      </main>
    </Layout>
  );
}
