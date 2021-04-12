import type { AppProps } from 'next/app';
import Head from 'next/head';
import defaultTheme from 'styles/defaultTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import { PageContainer } from 'components';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Observatório Bio Urb</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
        {/* Add favicon here */}
      </Head>
      <MuiThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
