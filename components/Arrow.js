export default function Arrow() {
    return (
      <div className="grid justify-items-center arrow">
  
        <span className="mt-12">˅</span>
  
        <style jsx>{`
  
          .arrow span {
              font-size: 3.2rem;
              color: #AEE9E0;
              user-select: none;
              animation: arrow 0.5s infinite alternate ease-in;
          }

            @keyframes arrow {
            0% { transform: translateY(0) }
            100% { transform: translateY(0.5rem) }
            }
  
        `}</style>
      </div>
    )
  }
  