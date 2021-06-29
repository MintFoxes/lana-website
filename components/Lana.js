export default function Lana() {
  return (
  
    <>
      <lana className="relative my-4">
        <img className="border-8 border-solid border-grayish-200 rounded-full my-6" src="/lana.jpg" loading="lazy" draggable="false" width="245" height="245" alt="Lana the Protogen"></img>
        <moon className="absolute inset-4 text-gray orbit animate-spin-slow overflow-hidden"></moon>
        <moon className="absolute inset-2 text-gray orbit animate-spin-slowly overflow-hidden"></moon>
        <moon className="absolute inset-0 text-gray orbit animate-spin-slower overflow-hidden"></moon>
      </lana>

      <style jsx>{`

        .orbit::before {
          content: "⬤";
          font-size: 10px;
          position:absolute;
        }

      `}</style>
    </>
  
  )
}
  
