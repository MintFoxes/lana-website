export default function Custom404() {
  return (
      <div className="center">

        <h1>404 | Page Not Found</h1>


        <style jsx>{`
        
          .center {
            display: grid;
            place-items: center;
            height: 100vh;
            background-color: #212329;
            user-select: none;
            }

          h1 {
            font-size: 2.5rem;
            color: #F2F2F2;
            font-family: 'Poppins', sans-serif;
          }

          @media(max-width: 655px) {

            h1 {
              font-size: 2rem;
            }

          }

          @media(max-width: 425px) {

            h1 {
              font-size: 1.5rem;
            }

          }
          
        `}</style>

      </div>
    )
  }