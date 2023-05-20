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
        {/* <Container maxWidth='lg' sx={{p:0, m:0}}>
          <Typography sx={{fontFamily: 'Roboto', fontSize:24,  pt:4.875, pl:13.5}}>Home Page</Typography>
        </Container> */}
      </main>
    </Layout>
  )
}
