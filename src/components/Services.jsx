
export default function Services() {
    return (
        <>
            <h2 className="mx-auto text-center pt-6 text-3xl font-extrabold sm:text-4xl">
                <strong className=" font-extrabold text-red-700 sm:block"> What i offer </strong>
            </h2>
            <p className="mx-auto text-center sm:text-xl/relaxed"> Here are the things that i can do in my line of speciality.</p>

            <div className='flex  flex-col sm:flex-row  justify-center gap-5 pt-5 pb-5'>

                {/* col-1 */}
                <div >
                    <div className="relative w-64 p-4 m-auto bg-white shadow rounded-2xl dark:bg-gray-900 hover:bg-blue-600 hover:rotate-[270deg] hover:perspective-100 transition-transform duration-500  ">
                        <div className="w-full h-full text-center">
                            <div className="flex flex-col justify-between h-full ">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white" viewBox="0 0 2048 1792">
                                    <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                                    </path>
                                </svg> */}

                                <i class="mx-auto fa-solid fa-desktop text-white text-4xl mt-4 " ></i>

                                <p className="mt-4 text-lg text-gray-900 dark:text-white">
                                    Web Designing
                                </p>
                                <p className="px-6 py-2 text-sm font-thin text-gray-700 dark:text-gray-50">
                                    I Create websites with great user experience , packaged with stunning graphics  alongside and they are easy to manage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* col-2 */}
                <div >
                    <div className="relative w-64 p-4 m-auto bg-blue-800 shadow-lg rounded-2xl  hover:bg-blue-600 hover:rotate-[360deg] transition-transform duration-500">
                        <div className="w-full h-full text-center">
                            <div className="flex flex-col justify-between h-full">
                                <i class="fa-solid fa-laptop-code text-white text-4xl mt-4"></i>
                                <p className="mt-4 text-lg text-gray-900 dark:text-white">
                                    Software Development
                                </p>
                                <p className="px-6 py-2 text-sm font-thin text-gray-700 dark:text-gray-50">
                                    I create world class customised softwares that serve market needs for businesses , startups and Organisations.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* col-3 */}
                <div >
                    <div className="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900 hover:bg-blue-600 hover:rotate-[90deg] hover:perspective-100 transition-transform duration-500 ">
                        <div className="w-full h-full text-center">
                            <div className="flex flex-col justify-between h-full">
                                <i class="fa-solid fa-pen-nib text-white text-4xl mt-4"></i>
                                <p className="mt-4 text-lg text-gray-900 dark:text-white">

                                    Cooporate Branding
                                </p>
                                <p className="px-6 py-2 text-sm font-thin text-gray-700 dark:text-gray-50">

                                    I  do professional graphic designing, created 3000 + design pieces , startups and individuals  in their respective category.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex  flex-col sm:flex-row  justify-center gap-5 pt-5 pb-10 '>

                {/* col-1 */}
                <div >
                    <div className="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900 hover:bg-blue-600 hover:rotate-[270deg] hover:perspective-100 transition-transform duration-500 ">
                        <div className="w-full h-full text-center">
                            <div className="flex flex-col justify-between h-full ">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white" viewBox="0 0 2048 1792">
                    <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                    </path>
                </svg> */}

                                <i class="fa-solid fa-pen-ruler text-white text-4xl mt-4"></i>
                                <p className="mt-4 text-lg text-gray-900 dark:text-white">
                                    UI/UX Designing
                                </p>
                                <p className="px-6 py-2 text-sm font-thin text-gray-700 dark:text-gray-50">
                                    I standout in UI/UX Design, and  i have created a couple of UX designs that makes usability of software products easy.                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* col-2 */}
                <div >
                    <div className="relative w-64 p-4 m-auto bg-blue-800 shadow-lg rounded-2xl  hover:bg-blue-600 hover:rotate-[360deg] transition-transform duration-500">
                        <div className="w-full h-full text-center">
                            <div className="flex flex-col justify-between h-full">
                                <i class="fa-solid fa-mobile-screen-button text-white text-4xl mt-4"></i>

                                <p className="mt-4 text-lg text-gray-900 dark:text-white">
                                    Mobile Applications
                                </p>
                                <p className="px-6 py-2 text-sm font-thin text-gray-700 dark:text-gray-50">
                                    I create Mobile applications basing on the on-trend design patterns and always deliver apps more than expected.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* col-3 */}
                <div >
                    <div className="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900 hover:bg-blue-600 hover:rotate-[90deg] hover:perspective-100 transition-transform duration-500 ">
                        <div className="w-full h-full text-center">
                            <div className="flex flex-col justify-between h-full">
                                <i class="fa-solid fa-chalkboard-user text-white text-4xl mt-4 "></i>
                                <p className="mt-4 text-lg text-gray-900 dark:text-white">
                                    Technical Trainings
                                </p>
                                <p className="px-6 py-2 text-sm font-thin text-gray-700 dark:text-gray-50">
                                    I have over time trained 2000+ students with software, design , and computer skills that are directly employable
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}