import SNOWBOL from "../components/Content/SNOWBOL"
import Telegram from "../components/Content/Telegram"
import Twitter from "../components/Content/Twitter"


export default function Projects() {
  const Link = ()=>{window.location.href = "404";};

  return (
    <>
      <project className="md:col-span-2 text-gray underline text-2xl sm:text-4xl">
        <container className="grid place-items-center my-8">
          Behold our projects
        </container>
      </project>

      <project className="cardLarge row-span-2 rounded-3xl">
        <container className="grid place-items-center my-6">
          <SNOWBOL/>
        </container>
      </project>

      <project className="card rounded-3xl" onClick={Link}>
        <container className="grid place-items-center my-6">
          <Telegram/>
        </container>
      </project>

      <project className="card rounded-3xl" onClick={Link}>
        <container className="grid place-items-center my-6">
          <Twitter/>
        </container>
      </project>

      <style jsx>{`
      
        .card {
          height: 250px;
          width: 300px;
          background-color: #313338;
          cursor: pointer;
          transition: linear 0.1s;
        }

        .card:hover {
          transform: scale(1.1);
        }

        .cardLarge {
          height: 532px;
          width: 300px;
          background-color: #313338;
        }

      `}</style>
    </>
  )
}
  
