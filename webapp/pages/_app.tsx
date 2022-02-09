import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A558C', 
      light: '#4098D7', 
      dark: '#003E6B'
    },
    secondary: {
      main: '#243B53', 
      light: '#829AB1',
      dark: '#102A43'
    },
  }
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
};

export default MyApp
