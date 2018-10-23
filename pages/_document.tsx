import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ReactElement } from 'react';

interface IMyDocumentProps {
  styleTags: ReactElement<{}>[]
}

class MyDocument extends Document<IMyDocumentProps> {
  static getInitialProps (context: NextDocumentContext) {
    const sheet = new ServerStyleSheet()

    const page = context.renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      styleTags
    }
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
