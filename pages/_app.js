import { ThemeProvider } from '@mui/material/styles';
import { AuthContextProvider } from '../store/auth-context';
import { UiContextProvider } from '../store/ui-context';
import theme from '../styles/theme';
import Layout from '../components/common/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <UiContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UiContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
