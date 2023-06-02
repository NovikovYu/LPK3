import Head from 'next/head'
import * as React from 'react';
import {Container, Typography} from '@mui/material';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Lintu</title>
        <meta name="description" content="Lintu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>   
        <Container maxWidth='lg'>
          <Typography sx={{fontSize:24}}>Home Page</Typography>
        </Container>
      </main>
    </Layout>
  )
}
