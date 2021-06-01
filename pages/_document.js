import Document, { Html, Head, Main, NextScript } from "next/document"
import { Script } from "vm"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>

            <meta charSet="UTF-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>

            {/* Twitter meta tags */}
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta name="twitter:site" content="@KTSnowy_"></meta>
            <meta name="twitter:creator" content="@KTSnowy_"></meta>
            <meta name="twitter:title" content="Project Lana Arts and Software - Homepage"></meta>
            <meta name="twitter:description" content="A compilation of programming projects by a fox and a sergal."></meta>
            <meta name="twitter:image" content="https://www.projectlana.app/lanabanner.png"></meta>

            {/* Open Graph meta tags */}
            <meta property="og:title" content="Project Lana Arts and Software - Homepage"></meta>
            <meta property="og:description" content="A compilation of programming projects by a fox and a sergal."></meta>
            <meta property="og:image" content="https://www.projectlana.app/lanabanner.png"></meta>
            <meta property="og:image:alt" content="Project Lana Arts and Software - Banner"></meta>
            <meta property="og:locale" content="en_US"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content="https://www.projectlana.app"></meta>

            {/* Default meta tags */} 
            <meta name="robots" content="all"></meta>
            <meta name="description" content="A compilation of programming projects by a fox and a sergal."></meta>
            <meta name="author" content="Keith Taylor and Mint"></meta>
            <meta name="keywords" content="Project, Lana, Software, Project Lana Software, Protogen, app"></meta>

            <link rel="canonical" href="https://www.projectlana.app"></link>
            <link rel="icon" href="/assets/icon-512-circle.png"></link>
            <link rel="apple-touch-icon" href="/assets/icon-512-circle.png"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"></link>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument