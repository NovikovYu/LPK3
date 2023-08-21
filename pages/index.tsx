import * as React from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <main>
      <Head>
        <title>Lintu - main page</title>
      </Head>

      {isMatchLg && <Container maxWidth="lg"></Container>}
      <Container maxWidth="sm"></Container>
    </main>
  );
}
