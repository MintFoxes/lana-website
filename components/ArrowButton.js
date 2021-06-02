export default function ArrowButton() {
    return (
      <div>
  
        <a href="#Projects">
          <button 
            className="animate-bounce text-lana text-5xl rounded-full mt-12 hover:bg-lana hover:text-grayish-100 focus:outline-none"
          >˅</button>
        </a>
  
        <style jsx>{`

          button {
            height: 60px;
            width: 60px;
            border: 2px solid #AEE9E0;
            outline-offset: 5px;
            font-weight: 600;
            user-select: none;
            transition: all 0.4s ease;
          }
  
          button:hover {
            border: 2px solid #212329;
            transition: all 0.4s ease;
          }
  
        `}</style>
      </div>
    )
  }
  