import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', Arial, sans-serif;
    font-size: 20px;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Isabelle Yim</title>
          <link
            href="https://fonts.googleapis.com/css?family=Gothic+A1|Noto+Sans|Shrikhand"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="../static/fontawesome-all.js" />
        </body>
      </html>
    )
  }
}
