
import { useState } from 'react'


export default function Footer() {

    return (
        <>
            <section className="bg-blue-100 py-20">
                <div className="mx-auto max-w-screen-xl px-4 py-15  lg:flex  lg:items-center">
                    <div className="mx-auto max-w-xl text-center">

                        <h1 className="text-3xl font-extrabold sm:text-3xl mt-4">
                            <strong className="font-extrabold text-red-700 sm:block">Are You Ready To Start Your Project ?</strong>
                        </h1>
                        <p className="mt-4 sm:text-md/relaxed">
                            I always work to the best of my capacity to delivery standard work, and this goes hand in hand with client discussions to deliver the right product that fits the market, and the right designs that communicate the message.</p>
                    </div>
                </div>

            </section>

            <section className='flex flex-col sm:flex-row bg-black text-white py-7 px-8 '>
                <div className='basis-1/2 text-center sm:text-start'>
                    © 2024 All rights reserved, Wandie Innocent
                </div>
                <div className='basis-1/2 text-center sm:text-end pt-3 sm:pt-0'>
                    <a href="https://www.youtube.com/@wandieinnocent7656/videos" target="_blank"> <i class="fa-brands fa-youtube text-white text-2xl px-2"></i></a>
                    <a href="https://www.linkedin.com/in/wenareeba-innocent-771a93116" target="_blank"><i class="fa-brands fa-linkedin-in text-white text-2xl px-2"></i></a>
                    <a href="https://www.youtube.com/@wandieinnocent7656/videos" target="_blank"> <i class="fa-brands fa-instagram text-white text-2xl px-2"></i></a>

                </div>
            </section>




        </>
    )

}