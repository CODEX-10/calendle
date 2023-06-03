import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Auth } from '../components'
import { useRouter } from 'next/router'
import GlobalStyle from './_global-styles'
import Head from 'next/head'
import _ from 'lodash'

import MainContainer from '../container'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/src/assets/favicon/favicon.ico" />

        <title>Agendamento</title>
        <meta name="author" content="Agendamento" />
        <meta name="description" content="Agendamento - Agendamento de clientes" />
        <meta name="keyword" content="Whatsapp, Marketing, envios em masssa" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <GlobalStyle />
      <Auth />
      {_.includes(router.route, 'auth')
        ? <Component {...pageProps} />
        : <MainContainer>
          <Component {...pageProps} />
        </MainContainer>}
    </Provider>
  )
}
