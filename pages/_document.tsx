import withServerStyleSheet from 'components/withServerStyleSheet';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { DEFAULT_LOCALE } from 'utils/constants';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return withServerStyleSheet(ctx);
  }

  render(): ReactElement {
    return (
      <Html lang={DEFAULT_LOCALE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
