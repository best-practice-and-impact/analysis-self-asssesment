import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default function Document() {
  return (
    <Html lang="en">
      <meta name="description" content="A tool to assess the quality assurance of analysis workflows." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <Head />
      <body>

        <Main />
        <Link href="/" className="sd-btn home-btn" type="button" title="Home">Home</Link>

        <NextScript />
      </body>
    </Html>
  )
}
