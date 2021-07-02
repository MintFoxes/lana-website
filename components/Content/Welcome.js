//WELCOME CONTENT
export default function Welcome() {
  return (
    <>
      <h1 className="text-gray underline text-2xl sm:text-4xl mt-12 mb-4 sm:mb-6">Welcome to our page</h1>
      <p className="text-base sm:text-xl text-gray">This page serves as a sort of portfolio, and Lana is a character we created to be the mascot for these projects.</p>
      <p className="text-base sm:text-xl text-gray mt-2">Press the button below to find more information about us and our work.</p>
    
      <style jsx >{`
      
        p {
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