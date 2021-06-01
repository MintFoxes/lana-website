export default function Brand() {
  return (
    <div className="grid justify-items-center bar">

      <img className="mx-4 mt-4" src="/logo.svg" loading="lazy" draggable="false" width="250" height="50" alt="Lana the Protogen"></img>

      <style jsx>{`

        .bar {
            height: 75px;
        }

        .bar img {
          user-select: none;
        }

      `}</style>
    </div>
  )
}
