export default function ArrowButton() {
    return (
      <div>
  
        <a href="#Projects">
          <button 
            className="animate-bounce rounded-full mt-12 hover:bg-gray focus:outline-none"
          >
            <svg className="fill-current fill-gray hover:fill-grayish-100 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
              <circle cx="50%" cy="50%" r="22" fill="#F2F2F2"/>
            </svg>
          </button>
        </a>


  
        <style jsx>{`

          svg:hover >
          circle {
            fill: #212328;
          }

          button {
            font-size: 46px;
            line-height: 1;
            height: 60px;
            width: 60px;
            border: 2px solid #F2F2F2;
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
  
