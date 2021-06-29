export default function Projects() {
    return (
  
      <>
        <project className="col-span-2 text-gray underline text-2xl sm:text-4xl">
          <container className="grid place-items-center my-8">
            Behold our projects<br/>
            Page still in development<br/>
            Testing in production goes brrrrr
          </container>
        </project>

        <project className="cardLarge row-span-2 text-gray text-xl">
          <container className="grid place-items-center my-8">
            SNOWBOL
            COMPILER
          </container>
        </project>

        <project className="card text-gray text-xl">
          <container className="grid place-items-center my-8">
            LANA TELEGRAM BOT
          </container>
        </project>

        <project className="card text-gray text-xl">
          <container className="grid place-items-center my-8">
            LANA TWITTER BOT
          </container>
        </project>

        <style jsx>{`
        
          .card {
              height: 250px;
              width: 300px;
              background-color: #313338; 
              border-radius: 45px;
          }

          .cardLarge {
            height: 550px;
            width: 300px;
            background-color: #313338; 
            border-radius: 45px;
          }

        `}</style>

      </>
  
    )
  }
  
