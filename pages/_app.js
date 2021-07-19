import { GlobalStyle } from '../styles/global-styles'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
