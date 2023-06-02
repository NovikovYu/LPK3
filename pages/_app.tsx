import '@/styles/globals.css'
import {ThemeProvider, createTheme} from '@mui/material';
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
      fontFamily: 'Roboto',
      body1: {
        fontWeight: 400,
        fontSize:16,
        letterSpacing:0.15,
      },
      h3: {
        fontWeight: 400,
        fontSize:24,
      },
      h4: {
        fontWeight: 400,
        fontSize:18,
      },
      h5: {
        fontWeight: 400,
        fontSize:14,
        letterSpacing: 0.15
      },
      h6: {
        fontSize:12,
      },
      subtitle1:{
        fontSize:10,
      },
      subtitle2:{
        fontSize:9,
      },
    },
    breakpoints: {
      values: {
        xs: 0, 
        sm: 600,
        md: 930, 
        lg: 1205, 
        xl: 1536
      }
    }
  });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  )
  
}
