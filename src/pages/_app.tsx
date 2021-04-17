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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
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
