
import { useState } from 'react'


export default function HomeBanner() {

    return (
        <>
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

        </>
    )

}