import Head from "next/head"
import Brand from "../components/Brand"
import Cards from "../components/Cards"
import ArrowButton from "../components/ArrowButton"

export default function Home() {
  return (
    <div className="main">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <title>Project Lana Arts and Software - Homepage</title>
      </Head>

      <Brand />
      <section>
        <div className="grid justify-items-center">
          <img className="rounded-full" src="/lana.jpg" loading="lazy" draggable="false" width="250" height="250" alt="Lana the Protogen"></img>
          <h1 className="text-gray-200 mt-5 mb-12">Welcome to our page</h1>
          <p className="text-gray-200">This page serves as a sort of portfolio for our projects, and Lana is</p>
          <p className="text-gray-200">a character we created to be a mascot for these projects.</p>
          <p className="text-gray-200 my-4">Below you can find more information about us and our work.</p>
          <ArrowButton />
        </div>
      </section>

      <section id="Projects">
      <div className="grid justify-items-center">
        <h1 className="text-gray-200 mb-12">Our Projects</h1>
        <Cards />
      </div>
      </section>

      <section id="About-us">
        <h1 className="text-gray-200">Page Three</h1>
      </section>

      <style jsx global>{`
        html,
        body {
          background-color: #212329;
          font-family: 'Poppins', sans-serif;
          scroll-behavior: smooth;
        }

        section {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100vh;
          user-select: none;
        }

        section img {
          border: 4px solid #303238;
          user-select: none;
        }

        p {
          line-height: 2rem;
        }

        h1 {
          font-size: 2.5rem;
          border-bottom: 3px solid #AEE9E0;
        }

        p {
          font-size 1.2rem;
        }

      `}</style>
    </div>
  )
}
