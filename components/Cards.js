export default function Cards() {
    return (

      <div className="grid text-gray-200 my-5">

        <div className="card">

          <img className="cardImg m-2" width="234" height="234" alt="Lana The Protogen" src="lana.jpg" />  

          <a href="lana" className="flex items-center justify-center h-12 arrow">Lana The Protogen</a>

        </div>

        <div className="card">

          <img className="cardImg m-2 rotate" width="234" height="234" alt="In Develpment" src="development.svg" />
          
          <a href=" " className="flex items-center justify-center h-12 arrow">In Development</a>

        </div>

        <style jsx>{`
        
          .grid {
            padding: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
            grid-auto-rows: 312px;
            gap: 25px;
            justify-content: center;
            align-items: center;
            width: 85vw;
            }

          .card {
              height: 312px;
              width: 250px;
              background-color: #303238; 
              border-radius: 45px;
              font-size 1.2rem;
          }

          .cardImg {
              object-fit: cover;
              border-radius: 45px;
              border: 0px;
          }

          .arrow::after {
            content: "➤";
            margin-left: 5px;
            color: inherit;
          }

          .rotate:hover {
            animation-name: ROTATE;
              animation-duration:3s;
              animation-iteration-count: infinite;
              animation-timing-function: ease;
              animation-fill-mode: forwards;
              }

          @keyframes ROTATE {
              from {
                  transform: rotate(0deg);
              }
              to {
                  transform: rotate(360deg);
              }
          }
    
        `}</style>

      </div>

    )
  }