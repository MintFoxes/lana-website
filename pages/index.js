import Head from "next/head"
import Brand from "../components/Brand"
import ArrowButton from "../components/ArrowButton"
import Projects from "../components/Projects"
import Lana from "../components/Lana"

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <title>Project Lana Arts and Software - Homepage</title>
      </Head>

      <container className="container mx-auto">
        <section className="grid place-items-center place-content-evenly min-h-800 sm:h-screen overflow-x-hidden">
          <Brand/>
            <content className="grid place-items-center">
              <Lana/>
              <h1 className="text-gray underline text-2xl sm:text-4xl mt-12 mb-4 sm:mb-6">Welcome to our page</h1>
              <p className="text-base sm:text-xl text-gray">This page serves as a sort of portfolio, and Lana is a character we created to be the mascot for these projects.</p>
              <p className="text-base sm:text-xl text-gray mt-2">Press the button below to find more information about us and our work.</p>
            </content>
          <ArrowButton/>
        </section>

        <container className="grid place-items-center my-12">
          <section id="Projects" className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 place-items-center place-content-center min-h-800">
            <Projects/>
          </section>
        </container>

      </container>

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #212328;
          scroll-behavior: smooth;
          user-select: none;
        }

        p {
          display: block;
          text-align: center;
          width: 320px;
          word-wrap:break-word;
        }

        @media(min-width: 425px) {

          p {
            width: 375px;
          }

        }

        @media(min-width: 640px) {

          p {
            width: 465px;
          }

        }

      `}</style>

    </>
  )
}
