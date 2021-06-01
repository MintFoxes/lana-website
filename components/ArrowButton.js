export default function ArrowButton() {
    return (
      <div className="grid justify-items-center">
  
        <a href="#Projects"><button className="arrow-button mt-20">˅</button></a>
  
        <style jsx>{`
  
          .arrow-button {
            font-size: 2rem;
            color: #AEE9E0;
            user-select: none;
            animation: arrow 0.5s infinite alternate ease-in;
          }

          @keyframes arrow {
          0% { transform: translateY(0) }
          100% { transform: translateY(0.5rem) }
          }

          button {
            color: #AEE9E0;
            padding: 0.5rem;
            width: 55px;
            border: 2px solid #AEE9E0;
            border-radius: 50px;
            outline-offset: 5px;
            font-weight: 500;
            user-select: none;
            transition: all 0.4s ease;
          }
  
          button:hover {
            background-color: #AEE9E0;
            color: #212329;
            transition: all 0.4s ease;
          }
  
        `}</style>
      </div>
    )
  }
  