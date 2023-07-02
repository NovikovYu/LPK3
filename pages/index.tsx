import Head from 'next/head'
import * as React from 'react';
import {Container} from '@mui/material';
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
}
