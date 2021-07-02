import Head from "next/head"
import Brand from "../components/Brand"
import Lana from "../components/Lana"
import Welcome from "../components/Content/Welcome"
import ArrowButton from "../components/ArrowButton"
import Projects from "../components/Projects"


export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <title>Project Lana Arts and Software - Homepage</title>
      </Head>

      <section className="grid place-items-center place-content-evenly min-h-800 sm:h-screen overflow-x-hidden">
        <Brand/>
          <content className="grid place-items-center">
            <Lana/>
            <Welcome/>
          </content>
        <ArrowButton/>
      </section>

      <section className="grid place-items-center my-12 min-h-800">
        <content id="Projects" className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 place-items-center place-content-center">
          <Projects/>
        </content>
      </section>

      <style jsx global>{`

        html,
        body {
          background-color: #212328;
          scroll-behavior: smooth;
          user-select: none;
        }

      `}</style>
    </>
  )
}
