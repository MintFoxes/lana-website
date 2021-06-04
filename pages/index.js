import Head from "next/head"
import Brand from "../components/Brand"
import ArrowButton from "../components/ArrowButton"

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <title>Project Lana Arts and Software - Homepage</title>
      </Head>

      <section className="grid place-items-center place-content-evenly min-h-800 sm:h-screen">
        <Brand />
          <div className="grid place-items-center">
            <div className="relative">
              <img className="rounded-full my-4" src="/lana.jpg" loading="lazy" draggable="false" width="250" height="250" alt="Lana the Protogen"></img>
              <div className="absolute inset-4 text-gray orbit animate-spin-slow"></div>
              <div className="absolute inset-2 text-gray orbit animate-spin-slowly"></div>
              <div className="absolute inset-0 text-gray orbit animate-spin-slower"></div>
            </div>
            <h1 className="text-gray text-3xl sm:text-4xl mt-12 mb-6">Welcome to our page</h1>
            <p className="text-md sm:text-xl text-gray">This page serves as a sort of portfolio, and Lana is a character we created to be the mascot for these projects.</p>
            <p className="text-md sm:text-xl text-gray mt-2">Press the button below to find more information about us and our work.</p>
          </div>
        <ArrowButton />
      </section>

      <style jsx>{`

        .orbit::before {
          content: "⬤";
          font-size: 10px;
          position:absolute;
          transform: rotate(-45deg);
        }

        img {
          border: 3px solid #303238;
        }

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
          width: 620px;
          word-wrap:break-word;
        }

        h1 {
          border-bottom: 3px solid #F2F2F2;
        }

        @media(max-width: 425px) {

          p {
            width: 350px;
          }

        }

      `}</style>

      
    </div>
  )
}
