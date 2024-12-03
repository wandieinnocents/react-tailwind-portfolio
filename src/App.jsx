import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar';


function App() {

  return (
    <>



{/* nav */}

<NavBar />

{/* end nav */}


{/* hero */}
<section className="bg-blue-100 rounded-bl-[10%] rounded-br-[10%] sm:rounded-bl-[20%] sm:rounded-br-[20%]">
  <div className="mx-auto max-w-screen-xl px-4 py-40  lg:flex  lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Hello, I'm
      </h1>
      <h1 className="text-3xl font-extrabold sm:text-5xl mt-4">
     
        <strong className="font-extrabold text-red-700 sm:block">WANDIE INNOCENT</strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      I am a self-driven Software Engineer  and UX Designer that is passionate about crafting  world-class software products and leading highly effective teams. 
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


{/* triangle */}
<div class="mx-auto w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-blue-100 "></div>



  <h2 className="mx-auto text-center pt-6 text-3xl font-extrabold sm:text-4xl">
     <strong className=" font-extrabold text-red-700 sm:block"> What i offer </strong>
   </h2>
   <p className="mx-auto text-center sm:text-xl/relaxed"> Here are the things that i can do in my line of speciality.</p>


{/* services  */}
  <div className='flex  flex-col sm:flex-row  justify-center gap-5 pt-5 pb-5 '>

  {/* col-1 */}
    <div >
        <div class="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900 hover:bg-blue-600 hover:rotate-[90deg] hover:perspective-100 transition-transform duration-500 ">
            <div class="w-full h-full text-center">
                <div class="flex flex-col justify-between h-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white" viewBox="0 0 2048 1792">
                        <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                        </path>
                    </svg>
                    
                    <p class="mt-4 text-lg text-gray-900 dark:text-white">
                        Software Development
                    </p>
                    <p class="px-6 py-2 text-xs font-thin text-gray-700 dark:text-gray-50">
                        Your package was delivered in 1 day and 4 hours by our postal partner
                    </p>
                </div>
            </div>
        </div>
        </div>

        {/* col-2 */}
        <div >
        <div class="relative w-64 p-4 m-auto bg-blue-800 shadow-lg rounded-2xl  hover:bg-blue-600 hover:rotate-[360deg] transition-transform duration-500">
            <div class="w-full h-full text-center">
                <div class="flex flex-col justify-between h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white" viewBox="0 0 2048 1792">
                        <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                        </path>
                    </svg>
                    
                    <p class="mt-4 text-lg text-gray-900 dark:text-white">
                        Package delivered
                    </p>
                    <p class="px-6 py-2 text-xs font-thin text-gray-700 dark:text-gray-50">
                        Your package was delivered in 1 day and 4 hours by our postal partner
                    </p>
                </div>
            </div>
        </div>
        </div>

     {/* col-3 */}
     <div >
        <div class="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900 hover:bg-blue-600 hover:rotate-[90deg] hover:perspective-100 transition-transform duration-500 ">
            <div class="w-full h-full text-center">
                <div class="flex flex-col justify-between h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white" viewBox="0 0 2048 1792">
                        <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                        </path>
                    </svg>
                   
                    <p class="mt-4 text-lg text-gray-900 dark:text-white">
                        Package delivered
                    </p>
                    <p class="px-6 py-2 text-xs font-thin text-gray-700 dark:text-gray-50">
                        Your package was delivered in 1 day and 4 hours by our postal partner
                    </p>
                </div>
            </div>
        </div>
        </div>

  </div>

  <div className='flex  flex-col sm:flex-row  justify-center gap-5 pt-5 pb-5 '>

  {/* col-1 */}
    <div >
        <div class="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900 hover:bg-blue-600">
            <div class="w-full h-full text-center">
                <div class="flex flex-col justify-between h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white" viewBox="0 0 2048 1792">
                        <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                        </path>
                    </svg>
                    
                    <p class="mt-4 text-lg text-gray-900 dark:text-white">
                        Website Designing 
                    </p>
                    <p class="px-6 py-2 text-xs font-thin text-gray-700 dark:text-gray-50">
                        Your package was delivered in 1 day and 4 hours by our postal partner
                    </p>
                </div>
            </div>
        </div>
        </div>

        {/* col-2 */}
        <div >
        <div class="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900 hover:bg-blue-600">
            <div class="w-full h-full text-center">
                <div class="flex flex-col justify-between h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white" viewBox="0 0 2048 1792">
                        <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                        </path>
                    </svg>
                    
                    <p class="mt-4 text-lg text-gray-900 dark:text-white">
                        Package delivered
                    </p>
                    <p class="px-6 py-2 text-xs font-thin text-gray-700 dark:text-gray-50">
                        Your package was delivered in 1 day and 4 hours by our postal partner
                    </p>
                </div>
            </div>
        </div>
        </div>

     {/* col-3 */}
     <div >
        <div class="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900 hover:bg-blue-600">
            <div class="w-full h-full text-center">
                <div class="flex flex-col justify-between h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white" viewBox="0 0 2048 1792">
                        <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                        </path>
                    </svg>
                   
                    <p class="mt-4 text-lg text-gray-900 dark:text-white">
                        Package delivered
                    </p>
                    <p class="px-6 py-2 text-xs font-thin text-gray-700 dark:text-gray-50">
                        Your package was delivered in 1 day and 4 hours by our postal partner
                    </p>
                </div>
            </div>
        </div>
        </div>

  </div>




    
    </>
   
    
  )
}

export default App
