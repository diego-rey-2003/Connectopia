import { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init();


AOS.init({

  disable: false,
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate', 
  useClassNames: false,
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  

  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: false,
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});
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

    AOS.init({
      duration: 2000,
    })
    

  }, []);

  return (
    <>
      <section id='Starting-page' ref={startingPageRef}>
        <div className='w-full h-screen bg-cover bg-no-repeat bg-left-bottom bg-fixed' style={{backgroundImage: "url('./assets/animated-light-bulb-gif.webp')"}}>
          <div className="h-20 flex items-center">
            <button onClick={() => window.location.href = 'https://connectopia-teal.vercel.app/'}>
              <h1 className="text-4xl text-white ml-6 font-sans mr-28">
                Connectopia
              </h1>
            </button>

            <button onClick={() => window.location.href = ''} className="flex-nowrap ml-96 font-sans hover:text-slate-950 px-14">
              <h1 className="text-4xl text-white hover:border-b-2 border-transparent border-yellow-500 transition-all">
                Libraries
              </h1>
            </button>
      
            <button onClick={() => window.location.href = ''} className="ml-14 font-sans pr-10">
              <h1 className="text-4xl text-white hover:border-b-2 border-transparent hover:border-yellow-500 transition-all">
                Account
              </h1>
            </button>

            <a className="block rounded-lg p-1 bg-yellow-500  ring-slate-900/5 shadow-lg space-y-3 hover:bg-yellow-400 ml-14 transition-all">
              <button onClick={() => window.location.href = './src/subscribe.tsx'}>
                <h1 className="text-4xl text-white font-sans">
                  Subscribe
                </h1>
              </button>
            </a>
          </div>

          <div className='text-right mt-72 mr-20 font-sans '>
            <h1 className='text-4xl text-white ml-14 mr-12'> 
              Help us open the door for
            </h1>

            <div className="flex justify-center ml-96">
              <a className="inline-block rounded-lg p-3 bg-yellow-500  hover:bg-yellow-400 ml-96 px-10 mt-6 transition-all -mx-24"> 
                  <button onClick={() => window.location.href = './subscribe'}>
                    <h3 className="text-4xl text-white font-sans">
                    Knowledge 
                    </h3>
                  </button>
                </a>
            </div>
          </div>
        </div>
      </section>

      <section id='half-page' ref={halfPageRef} className='h-screen relative overflow-hidden' style={{ opacity: 0 }}>
        <video autoPlay loop muted className="w-full h-full object-cover absolute inset-0 z-0">
          <source src="./assets/university-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='w-full h-full flex flex-col justify-center items-center text-center z-10 relative mb-52'>
          <h1 className='text-6xl  font-sans text-white '>
            Get access to the Libraries of US 
          </h1>
          <h2 className='text-6xl font-sans text-white'>
            most prestigious universities
          </h2>
        </div>
      </section>

      <section id='second-page' className='h-screen flex items-center bg-slate-50' data-aos="fade-up">
        <div className="container mx-auto flex justify-center px-10">
          <div className="w-1/2">
            <div className="rounded-lg w-full h-96 shadow-2xl bg-slate-50 flex justify-between items-center ">
              <div className="flex flex-col ">
                <img src="./assets/sfsu.png" alt="SFSU-logo" className='h-32 ml-2 mb-4 ' />
                <img src="./assets/UH-logo.png" alt="UH-logo" className='h-32 ml-3 m-1' />
              </div>
              <div className="flex flex-col">
                <img src="./assets/michigan-logo.png" alt="michigan-logo" className='h-32 mb-2 transition ease-in-out delay-100' />
                <img src="./assets/berkeley-logo.png" alt="berkeley-logo" className='h-32 mt-3' />
              </div>
              <div className="flex flex-col">
                <img src="./assets/MIT-logo.png" alt="MIT-logo" className='h-32 mb-2' />
                <img src="./assets/a&m-logo.png" alt="a&m-logo" className='h-32 mr-9 ml-9' />
              </div>
            </div>
          </div>
          <div className="w-1/2 text-right pr-10 ">
            <h1 className="text-5xl font-bold mr-40 mt-16">What we offer</h1>
            <p className="mt-7 text-xl ml-24 text-justify">
            We partnered with the best universities in the United States 
              to provide access to their Libraries so you don't have to fully enroll
              in the university but you still get access to most of the knowledge 
              they give a student. Don't tell me it's not awesome  
             </p>

             <p className="mt-6 text-3xl text-yellow-500 mr-32 ">Welcome to Connectopia!</p>
          </div>
        </div>
      </section>
      <section id='third page' className='h-screen flex items-center justify-center bg-slate-50'>
  <div className='text-center' data-aos="zoom-in">
    <h1 className='text-7xl mb-8 ml-32 px- font-sans text-center'>
      Join thousands of learners and start your knowledge journey today
    </h1>
    <div className="flex justify-center"> 
      <a className="block rounded-lg p-4 bg-yellow-500 ring-slate-900/5  hover:bg-yellow-400 transition-all shadow-2xl mt-10 ml-24">
        <button onClick={() => window.location.href = '/subscribe.tsx'} className="text-4xl text-white font-sans">
          Subscribe
        </button>
      </a>
    </div>
  </div>
  <img src="./assets/secondimage.png" alt="books'image" data-aos="zoom-in" />
  

</section>
<section className='h-36 bg-black'>
  <div className='flex items-center'>
    <h1 className='text-white ml-96 mt-4 px-44 font-sans'>
     © 2024 Connectopia™. All Rights Reserved.
    </h1>

  </div>

</section>
      
    </>
    
    
  );
  
}

export default App;