import './index.css';

function App() {
  return (
    <>
      <div className='w-full h-screen bg-cover bg-no-repeat bg-left-bottom bg-fixed' style={{backgroundImage: "url('./src/assets/animated-light-bulb-gif.webp')"}}>
        <div className="h-20 flex items-center">
          <button onClick={() => window.location.href = 'http://localhost:5173'}>
            <h1 className="text-4xl text-white ml-6 font-serif">
              Connectopia
            </h1>
          </button>

          <button onClick={() => window.location.href = ''} className="flex-nowrap ml-96 font-serif hover:text-slate-950 px-14">
            <h1 className="text-4xl text-white hover:border-b-2 border-transparent hover:border-yellow-500 transition-all">
              Universities
            </h1>
          </button>
    
          <button onClick={() => window.location.href = ''} className="ml-14 font-serif pr-10">
            <h1 className="text-4xl text-white hover:border-b-2 border-transparent hover:border-yellow-500 transition-all">
              Account
            </h1>
          </button>

          <a className="block rounded-lg p-1 bg-yellow-500 ring-slate-900/5 shadow-lg space-y-3 hover:bg-yellow-700 ml-14 transition-all">
            <button onClick={() => window.location.href = ''}>
              <h1 className="text-4xl text-white font-serif">
                Subscribe
              </h1>
            </button>
          </a>
        </div>

        <div className='text-right mt-72 mr-40 font-serif'>
          <h1 className='text-5xl text-white ml-14'> 
            Help us open the door 
            <h2 className='mr-20'>
              of Knowledge
            </h2>
          </h1>

          <div className="flex justify-center ml-96">
            <a className="inline-block rounded-lg p-1 bg-yellow-500  hover:bg-yellow-700 ml-96 px-10 mt-6 transition-all "> 
                <button onClick={() => window.location.href = ''}>
                  <h3 className="text-4xl text-white font-serif">
                    Wisdom 
                  </h3>
                </button>
              </a>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
