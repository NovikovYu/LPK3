import '@/styles/globals.css'
import { Container, ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
        primary: {
          main: '#62AA5D',
          contrastText: 'white'
        },
        secondary: {
          main: '#0288D1',
          contrastText: '#fff'
        },
        error: {
          main:'#D32F2F'
        }
    },
    typography: {
      fontFamily: 'Roboto'
    },
    breakpoints: {
      values: {
        xs: 0, 
        sm: 600,
        md: 930, 
        lg: 1200, 
        xl: 1536
      }
    }
  });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
  
}
