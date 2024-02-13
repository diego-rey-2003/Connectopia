import './index.css';

function App() {
  return (
    // Options Tab
    // add links to the location when finished
    
    <>
      <div className="bg-green-400 h-20 flex items-center">
        <button onClick={() => window.location.href = 'http://localhost:5173'} >
          <h1 className="text-4xl text-white ml-6 font-serif">
            Connectopia
          </h1>
        </button>

        <button onClick={() => window.location.href = ''} className="flex-nowrap ml-80 font-serif hover:text-slate-950">
          <h1 className="text-4xl text-white">
            Browse
          </h1>
        </button>

        <button onClick={() => window.location.href = ''} className="ml-14 font-serif">
          <h1 className="text-4xl text-white">
            Fun
          </h1>
        </button>

        <button onClick={() => window.location.href = ''} className="ml-14 font-serif">
          <h1 className="text-4xl text-white">
            Authors
          </h1>
        </button>

        <button onClick={() => window.location.href = ''} className="ml-14 font-serif">
          <h1 className="text-4xl text-white">
            Account
          </h1>
        </button>

        <a className="group block rounded-lg p-1 bg-emerald-500 ring-slate-900/5 shadow-lg space-y-3 hover:bg-emerald-700 ml-14 transition-all">
          <button onClick={() => window.location.href = ''}>
            <h1 className="text-4xl text-white font-serif">
              Subscribe
            </h1>
          </button>
        </a>
      </div>


      {/* second part of the home page (Science is for everyone)*/}
      <div className='text-center mt-40 font-serif'>
        <h1 className='text-5xl text-black'>
          Science is for Everyone
          <img className=' mb-96 mx-auto ' src="./src/assets/book.png" alt="book image" />
        </h1>

       
      </div>
      
     

    </>
  );
}

export default App;
