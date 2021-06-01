import Head from "next/head"
import Accordion from "../components/Accordion"
import Brand from "../components/Brand"
import Arrow from "../components/Arrow"

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
          <h1 className="text-gray-200 mt-5 mb-8">Welcome to our page</h1>
          <p className="text-gray-200">This page serves as a sort of portfolio for our projects, and Lana is</p>
          <p className="text-gray-200">a character we created to be a mascot for these projects.</p>
          <p className="text-gray-200 my-4">Below you can find more information about us and our work.</p>
          <Arrow />
        </div>
      </section>

      <section id="Projects">
      <h1 className="text-gray-200">Page Two</h1>
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

        .button-container button {
          color: #AEE9E0;
          padding: 1rem;
          width: 125px;
          border: 2px solid #AEE9E0;
          border-radius: 25px;
          outline-offset: 5px;
          font-weight: 500;
          user-select: none;
          transition: all 0.4s ease;
        }

        .button-container button:hover {
          background-color: #AEE9E0;
          color: #212329;
          transition: all 0.4s ease;
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
