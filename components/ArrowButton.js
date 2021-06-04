export default function ArrowButton() {
    return (
      <div>
  
        <a href="#Projects">
          <button 
            className="animate-bounce rounded-full mt-12 hover:bg-lana focus:outline-none"
          >
            <svg className="fill-current text-lana hover:text-grayish-100 transition-colors" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 10 5 70">
              <text id="_" data-name="˅" font-size="100" font-family="SegoeUI, Segoe UI"><tspan x="-15" y="110">˅</tspan></text>
            </svg>
          </button>
        </a>


  
        <style jsx>{`

          button {
            font-size: 46px;
            line-height: 1;
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
  
