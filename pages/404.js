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
          
        `}</style>

      </div>
    )
  }