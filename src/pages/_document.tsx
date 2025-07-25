import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const meta = {
  title: 'Bhavani Bojedla Portfolio',
  description:
    'Bhavani Bojedla Portfolio',
  image:
    ''
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			};
		} finally {
			sheet.seal();
		}
	}

  render() {
    return (
      <Html lang="pt-EN">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="BhavaniBojedla" />
          <meta name="description" content={meta.description} />
          <meta itemProp="name" content={meta.title} />
          <meta itemProp="description" content={meta.description} />
          <meta itemProp="image" content={meta.image} />
          <meta
            name="keywords"
            content="BhavaniBojedla, website, programador, front-end, personal website, developer, portfolio, sites, web, JavaScript, TypeScript, ReactJS, NextJS, software, Freelancer, portfolio developer, BhavaniBojedla portfolio"
          />
          <meta name="copyright" content="BhavaniBojedla 2025" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="pt-EN" />
          <meta name="rating" content="general" />
          <link rel="canonical" href="https://bhavani-bojedla.vercel.app/" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta property="og:url" content="https://bhavani-bojedla.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="BhavaniBojedla" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />

          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />

          <link rel="icon" href="/Logo1.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
