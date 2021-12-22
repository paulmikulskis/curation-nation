import '../styles/globals.css'
import { createGlobalStyle, ThemeProvider as SCThemeProvider } from 'styled-components'
import { theme } from './themes'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet',
  cache: new InMemoryCache()
});


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export default function App({ Component, pageProps }) {
  
  return (
    
    <div suppressHydrationWarning>
          <ApolloProvider client={client}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <SCThemeProvider theme={theme}>
                  {typeof window === 'undefined' ? null : <Component {...pageProps} />}
                </SCThemeProvider>
              </ThemeProvider>
            </StyledEngineProvider>
          </ApolloProvider>
    </div>
    
  )
}
