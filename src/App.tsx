import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.css';

function App() {
  const halfPageRef = useRef(null);
  const startingPageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const startingPage = startingPageRef.current;
    const halfPage = halfPageRef.current;

    gsap.from(startingPage, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: startingPage,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play none reverse none'
      }
    });

    gsap.to(halfPage, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: halfPage,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play none reverse none'
      }
    });

  }, []);

  return (
    <>
      <section id='Starting-page' ref={startingPageRef}>
        <div className='w-full h-screen bg-cover bg-no-repeat bg-left-bottom bg-fixed' style={{backgroundImage: "url('./src/assets/animated-light-bulb-gif.webp')"}}>
          <div className="h-20 flex items-center">
            <button onClick={() => window.location.href = 'http://localhost:5173'}>
              <h1 className="text-4xl text-white ml-6 font-serif">
                Connectopia
              </h1>
            </button>

            <button onClick={() => window.location.href = ''} className="flex-nowrap ml-96 font-serif hover:text-slate-950 px-14">
              <h1 className="text-4xl text-white hover:border-b-2 border-transparent hover:border-yellow-500 transition-all">
                Libraries
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
      </section>

      <section id='half-page' ref={halfPageRef} className='h-screen relative overflow-hidden' style={{ opacity: 0 }}>
        <video autoPlay loop muted className="w-full h-full object-cover absolute inset-0 z-0">
          <source src="./src/assets/university-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='w-full h-full flex flex-col justify-center items-center text-center z-10 relative mb-52'>
          <h1 className='text-6xl  font-serif text-white'>
            Get access to the Libraries of US 
          </h1>
          <h2 className='text-6xl font-serif text-white'>
            most prestigious universities
          </h2>
        </div>
      </section>

      <section id='second-page' className='h-screen bg-gray-200'>
        <div className="flex justify-center items-center h-full">
          <img src="./src/assets/universities.png" alt="universities-logo" />
        </div>
      </section>
    </>
  );
}

export default App;
