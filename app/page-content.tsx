'use client';

import * as React from 'react';

import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <main>
      {isMatchLg && <Container maxWidth="lg"></Container>}
      <Container maxWidth="sm">
        <h1>page.tsx in APP</h1>
      </Container>
    </main>
  );
}
