import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const image = "https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <>
{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}



<section className="bg-blue-100 ">
  <div className="mx-auto max-w-screen-xl px-4 py-40  lg:flex  lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Hello, I'm
        <strong className="font-extrabold text-red-700 sm:block"> Wandie Innocent </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      I am a self-driven Software Engineer  and UX Designer that is passionate about creating  world-class software products and leading highly effective teams. 
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Hire Me
        </a>

        <a
          className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:text-blue-300  focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Download CV
        </a>
      </div>
    </div>
  </div>
</section>

    
    </>
   
    
  )
}

export default App
